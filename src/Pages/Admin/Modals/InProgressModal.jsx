// import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogContent,
//   Typography,
//   Table,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Box,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { useTheme } from "@mui/material/styles";
// import privateAxios from "../../../Services/instances/privateAxios";
// import DateComponent from "../../../Components/Common/dateEditor";

// const customDialogStyle = {
//   minWidth: 600,
// };

// const customTableStyle = {
//   marginTop: "16px",
// };

// export default function DeliveredStatusModal({
//   selectedUser,
//   product,
//   open,
//   onClose,
//   onClick,
// }) {
//   const theme = useTheme();
//   const [userData, setUserData] = useState({});
//   const [getUserTable, setGetUserTable] = useState([]);

//   console.log(product);

//   const handleDone = () => {
//     privateAxios.patch(`/orders/${product._id}`, {
//       deliveryStatus: false,
//     });
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" sx={customDialogStyle}>
//       <DialogContent>
//         <Typography variant="h5" align="center" gutterBottom>
//           سفارش
//         </Typography>
//         <div style={{ borderBottom: "2px solid #ccc" }}></div>
//         <Box display="flex" flexDirection="column" gap={2}>
//           <Typography variant="subtitle1">
//             نام مشتری:{product?.user?.firstname} {product?.user?.lastname}
//           </Typography>
//           <Typography variant="subtitle1">
//             ادرس: {product?.user?.address}
//           </Typography>
//           <Typography variant="subtitle1">
//             تلفن: {product?.user?.phoneNumber}
//           </Typography>
//           <Typography variant="subtitle1">
//             :زمان تحویل
//             <DateComponent dateString={product?.deliveryDate} />
//           </Typography>
//           <Typography variant="subtitle1">
//             :زمان سفارش <DateComponent dateString={product?.createdAt} />
//           </Typography>
//         </Box>
//         <TableContainer sx={customTableStyle}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">قیمت</TableCell>
//                 <TableCell align="center">تعداد</TableCell>
//                 <TableCell align="center">کالا</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {product?.products?.map((productItem, index) => (
//                 <TableRow key={index}>
//                   <TableCell align="center">
//                     {productItem.product?.price}
//                   </TableCell>
//                   <TableCell align="center">{productItem.count}</TableCell>
//                   <TableCell align="center">
//                     {productItem.product?.name}
//                   </TableCell>
//                 </TableRow>
//               ))}
//               {/* <TableRow>
//                 <TableCell align="center">
//                   {product?.products?.product?.price}
//                 </TableCell>
//                 <TableCell align="center">{product?.products?.count}</TableCell>
//                 <TableCell align="center">
//                   {product?.products?.product?.name}
//                 </TableCell>
//               </TableRow> */}

//               {/* Map and render your table data here */}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         {/* <Typography variant="subtitle1" sx={{ marginTop: "16px" }}>
//           زمان تحویل: 1402/5/3
//         </Typography> */}
//         <Button
//           onClick={handleDone}
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: "16px", width: "100%" }}
//         >
//           تحویل داده شد
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// }

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
import privateAxios from "../../../Services/instances/privateAxios";
import DateComponent from "../../../Components/Common/dateEditor";

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
  onDone,
}) {
  const theme = useTheme();
  const [userData, setUserData] = useState({});
  const [getUserTable, setGetUserTable] = useState([]);

  console.log(product);
  // In DeliveredStatusModal component
  const handleDone = async () => {
    try {
      // Update the delivery status
      await privateAxios.patch(`/orders/${product._id}`, {
        deliveryStatus: false,
      });

      // Close the modal by calling the onClose function
      onClose();

      // Call the onDone callback to trigger a table data refresh
      onDone();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // const handleDone = () => {
  //   privateAxios.patch(`/orders/${product._id}`, {
  //     deliveryStatus: false,
  //   });

  //   // Close the modal by calling the onClose function
  //   onClose();
  // };

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
        <Button
          onClick={handleDone}
          variant="contained"
          color="primary"
          sx={{ marginTop: "16px", width: "100%" }}
        >
          تحویل داده شد
        </Button>
      </DialogContent>
    </Dialog>
  );
}
