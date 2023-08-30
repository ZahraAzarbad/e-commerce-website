import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import AddIcon from "@mui/icons-material/Add";
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import privateAxios from "../../../Services/instances/privateAxios";
import { useEffect, useState } from "react";
import { Upload } from "antd";
import { tokens } from "../../../utils/Theme";

const EditModal = ({ open, onClose, editingProduct }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const modalStyle = {
    width: "full",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setSelectedCategory(editingProduct.category);
      setSelectedSubcategory(editingProduct.subcategory);
      setPrice(editingProduct.price);
      setQuantity(editingProduct.quantity);
      setBrand(editingProduct.brand);
      setDescription(editingProduct.description);
    }
  }, [editingProduct]);

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
      formData.append(key, data[key]);
    }
    if (imageFile) {
      formData.append("images", imageFile);
    }
    await privateAxios.put(`/products/${editingProduct._id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    onClose();
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
                {category.map((category) => (
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
              onChange={(info) => {
                if (info.file.status === "done") {
                  setImageFile(info.file.originFileObj);
                }
              }}
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
            <Button onClick={handleSave}>ذخیره</Button>
          </DialogContent>
        </Dialog>
      </div>
    </CacheProvider>
  );
};

export default EditModal;
