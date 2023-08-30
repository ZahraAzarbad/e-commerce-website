import { useTheme, Modal, Typography, Button } from "@mui/material";
import { tokens } from "../../../utils/Theme";

const DeleteModal = ({ open, onClose, onDelete }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: colors.blueAccent[100],
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: colors.blueAccent[900],
        }}
      >
        <Typography>آیا میخواهید این محصول را حذف کنید؟</Typography>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: colors.redAccent[500] }}
            onClick={onDelete}
          >
            حذف
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
            style={{ marginRight: "10px" }}
          >
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
