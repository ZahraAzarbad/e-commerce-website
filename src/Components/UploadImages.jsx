import { Button, Typography, Card, CardMedia } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState } from "react";

const ImageUpload = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="image-upload-button"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload-button">
        <Button
          variant="outlined"
          component="span"
          startIcon={<PhotoCameraIcon />}
        >
          آپلود عکس
        </Button>
      </label>
      {imagePreview && (
        <Card style={{ marginTop: "20px" }}>
          <CardMedia
            component="img"
            alt="Uploaded Image Preview"
            height="150"
            image={imagePreview}
          />
        </Card>
      )}
    </div>
  );
};

export default ImageUpload;
