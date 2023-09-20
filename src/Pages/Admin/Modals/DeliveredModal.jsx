import DateComponent from "../../../Components/Common/dateEditor";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const customDialogStyle = {
  minWidth: 600,
};

const customTableStyle = {
  marginTop: "16px",
};

export default function DeliveredStatusModal({
  selectedUser,
  product,
  open,
  onClose,
  onClick,
}) {
  const theme = useTheme();
  const [userData, setUserData] = useState({});
  const [getUserTable, setGetUserTable] = useState([]);

  console.log(product);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data here using selectedUser
        // Fetch product details and build getUserTableData here
        // Set the state for userData and getUserTable
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedUser]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" sx={customDialogStyle}>
      <DialogContent>
        <Typography variant="h5" align="center" gutterBottom>
          سفارش
        </Typography>
        <div style={{ borderBottom: "2px solid #ccc" }}></div>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="subtitle1">
            نام مشتری:{product?.user?.firstname} {product?.user?.lastname}
          </Typography>
          <Typography variant="subtitle1">
            ادرس: {product?.user?.address}
          </Typography>
          <Typography variant="subtitle1">
            تلفن: {product?.user?.phoneNumber}
          </Typography>
          <Typography variant="subtitle1">
            :زمان تحویل
            <DateComponent dateString={product?.deliveryDate} />
          </Typography>
          <Typography variant="subtitle1">
            :زمان سفارش <DateComponent dateString={product?.createdAt} />
          </Typography>
        </Box>
        <TableContainer sx={customTableStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">قیمت</TableCell>
                <TableCell align="center">تعداد</TableCell>
                <TableCell align="center">کالا</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product?.products?.map((productItem, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {productItem.product?.price}
                  </TableCell>
                  <TableCell align="center">{productItem.count}</TableCell>
                  <TableCell align="center">
                    {productItem.product?.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography
          variant="subtitle1"
          sx={{
            marginTop: "16px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          :زمان تحویل <DateComponent dateString={product.deliveryDate} />
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
