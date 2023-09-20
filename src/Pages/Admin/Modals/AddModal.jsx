import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  useTheme,
  Dialog,
  DialogContent,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { tokens } from "../../../utils/Theme";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import privateAxios from "../../../Services/instances/privateAxios";
import { useEffect } from "react";
import { Upload } from "antd";

const MyModal = ({ open, onClose, addProduct }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [imageFile, setImageFile] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const modalStyle = {
    width: "full",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      name,
      category: selectedCategory,
      description,
      images: imageFile,
      subcategory: selectedSubcategory,
      brand,
      price,
      quantity,
    };
    const form = new FormData();
    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach((v) => {
          form.append(key, v);
        });
      } else {
        form.append(key, value);
      }
    }
    privateAxios
      .post("/products", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const newProduct = response.data.data.product;
        addProduct(newProduct);
        setBrand("");
        setName("");
        setPrice("");
        setQuantity("");
        setDescription("");
        onClose();
      });
  };

  const handleDescriptionChange = (data) => {
    setDescription(data);
  };

  useEffect(() => {
    privateAxios.get("/categories").then((res) => {
      setCategory(res.data.data.categories);
    });
    privateAxios.get("/subcategories").then((response) => {
      setSubCategory(response.data.data.subcategories);
    });
  }, []);
  function handleImageChange(e) {
    console.log(e.target.files);
    setImageFile([e.target.files[0]]);
  }
  return (
    <CacheProvider value={cacheRtl}>
      <div dir="rtl">
        <Dialog
          open={open}
          onClose={onClose}
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: colors.blueAccent[900],
              // Change to the desired background color
            },
          }}
        >
          <Button
            onClick={onClose}
            style={{
              width: "3px",
              margin: "3px",
              color: "white",
            }}
          >
            <CloseIcon />
          </Button>
          <DialogContent style={modalStyle}>
            <TextField
              label="نام"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl fullWidth size="small">
              <InputLabel
                id="demo-select-small-label"
                style={{ textAlign: "right" }}
              >
                دسته بندی
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedCategory}
                label="دسته بندی"
                className="font-secondary"
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              >
                {category.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category?.name}
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
                }}
              >
                {subcategory
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
            <TextField
              label="قیمت"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="تعداد"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              label="برند"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <Upload
              listType="picture-card"
              showUploadList={true}
              beforeUpload={(file) => {
                setImageFile(file);
                return false; // Prevent default behavior (uploading)
              }}
              onChange={handleImageChange}
              type="file"
              name="file"
            >
              <div
                style={{
                  marginTop: 8,
                  color: colors.blueAccent[100],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddIcon />
                <div>آپلود عکس</div>
              </div>
            </Upload>

            <ReactQuill
              style={{ marginTop: 8, backgroundColor: colors.primary[700] }}
              value={description}
              onChange={handleDescriptionChange}
            />
            <Button
              style={{
                backgroundColor: "green",
                padding: "5px 10px",
                borderRadius: "3px",
                margin: "5px",
                color: "white",
                fontSize: "18px",
              }}
              onClick={handleSave}
            >
              ذخیره
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </CacheProvider>
  );
};

export default MyModal;
