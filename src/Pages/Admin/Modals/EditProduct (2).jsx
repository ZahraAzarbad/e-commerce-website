import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../../styles/index.css";
import closeBtn from "../../../assets/svg/closeBtn.svg";
import LexicalTextEditor from "../forms/LexicalEditor";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import privateAxios from "../../../services/instances/privateAxios";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};
export async function convertImage(value) {
  if (typeof value === "string") {
    try {
      const url = `http://localhost:8000/images/products/images/${value}`;
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      console.log(file);
      return file;
    } catch (error) {
      throw new Error("can not convert that image to file");
    }
  } else {
    return value;
  }
}
export async function handleMedias(images) {
  // console.log(images);
  let isAllString = images.find((item) => typeof item !== "string")
    ? false
    : true;

  const medias = [];

  if (!isAllString) {
    for (let index = 0; index < images.length; index++) {
      const mediaFile = await convertImage(images[index]);
      medias.push(mediaFile);
    }
    return medias;
  } else {
    return undefined;
  }
}
export default function EditProduct({ open, onClose, product }) {
  const [categoryy, setCategory] = useState([]);
  const [subcategoryy, setSubCategory] = useState([]);
  const [name, setName] = useState(product ? product.name : "");
  const [imageFile, setImageFile] = useState(product ? product.images : []);
  const [description, setDescription] = useState(
    product ? product.description : ""
  );
  const [price, setPrice] = useState(product ? product.price : "");
  const [quantity, setQuantity] = useState(product ? product.quantity : "");
  const [brand, setBrand] = useState(product ? product.brand : "");
  const [selectedCategory, setSelectedCategory] = useState(
    product ? product.category : ""
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    product ? product.subcategory : ""
  );

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(imageFile);

    const media = await handleMedias(imageFile);
    const updatedData = {
      name,
      description,
      images: media,
      brand,
      price,
      quantity,
      category: selectedCategory,
      subcategory: selectedSubcategory,
    };

    // const form = new FormData();
    // for (const key in updatedData) {
    //   const value = updatedData[key];
    //   form.append(key, value);
    // }
    const form = new FormData();
    for (const key in updatedData) {
      const value = updatedData[key];
      if (Array.isArray(value)) {
        value.forEach((v) => {
          form.append(key, v);
        });
      } else {
        form.append(key, value);
      }
    }
    console.log(updatedData);
    privateAxios
      .patch(`/products/${product._id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        onClose();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
    setImageFile([]);
    window.location.reload();
  };

  const handleDescriptionChange = (newDescription) => {
    setDescription(newDescription);
  };

  const handleCancel = () => {
    onClose();
  };
  function handleImage(e) {
    console.log(e.target.files);
    setImageFile((data) => [...data, e.target.files[0]]);
  }
  
  useEffect(() => {
    privateAxios.get("/categories").then((res) => {
      setCategory(res.data.data.categories);
      const matchedCategory = res.data.data.categories.find(
        (category) => category.name === product.category
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory._id);
      }
    });
    privateAxios.get("/subcategories").then((response) => {
      setSubCategory(response.data.data.subcategories);
    });
  }, [product.category]);

  return (
    <div className="font-secondary">
      <Modal
        open={open}
        onClose={onClose}
        product={product}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md">
          <img src={closeBtn} onClick={handleCancel} />
          <Typography>اضافه کردن کالا</Typography>
          <TextField
            label="نام کالا"
            fullWidth
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="برند کالا"
            fullWidth
            size="small"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <TextField
            label="قیمت کالا "
            fullWidth
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="تعداد کالا "
            fullWidth
            size="small"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">دسته بندی</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectedCategory}
              label="دسته بندی"
              className="font-secondary"
              onChange={(e) => {
                setSelectedCategory(e.target.value),
                  console.log(e.target.value);
              }}
            >
              {categoryy.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-small-label">زیربخش</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectedSubcategory}
              label="زیربخش"
              className="font-secondary"
              onChange={(e) => {
                setSelectedSubcategory(e.target.value);
                console.log(e.target.value);
              }}
            >
              {subcategoryy
                .filter(
                  (subcategory) => subcategory.category === selectedCategory
                )
                .map((subcategory) => (
                  <MenuItem key={subcategory._id} value={subcategory._id}>
                    {subcategory.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <LexicalTextEditor
            onChange={handleDescriptionChange}
            defaultText={description}
          />
          <Upload
            listType="picture-card"
            showUploadList={true}
            beforeUpload={(file) => {
              setImageFile((data) => [...data, file]);
              return false;
            }}
            onChange={handleImage}
            type="file"
            name="file"
            defaultFileList={product.images.map((image, index) => ({
              uid: index,
              name: `image-${index}`,
              status: "done",
              url: `http://localhost:8000/images/products/images/${image}`,
            }))}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>آپلود عکس</div>
            </div>
          </Upload>

          <Button onClick={handleSave} className="font-secondary">
            ذخیره
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
