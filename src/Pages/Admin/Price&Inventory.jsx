// import { Link } from "react-router-dom";

// const PriceAndInventory = () => {
//   return (
//     <div className="flex gap-5 text-cyan-700 ">
//       <div>PriceAndInventory</div>
//       <Link to="/Login">go back to Login</Link>
//     </div>
//   );
// };
// export default PriceAndInventory;

// // import * as React from "react";
// // import {
// //   GridColDef,
// //   GridRowsProp,
// //   DataGrid,
// //   GridCellEditStartParams,
// //   GridCellEditStopReasons,
// //   MuiEvent,
// // } from "@mui/x-data-grid";
// import {
//   GridColDef,
//   GridRowsProp,
//   DataGrid,
//   GridCellEditStopParams,
//   GridCellEditStopReasons,
//   MuiEvent,
// } from "@mui/x-data-grid";
// // import {
// //   randomCreatedDate,
// //   randomTraderName,
// //   randomUpdatedDate,
// // } from "@mui/x-data-grid-generator";

// export default function DisableStopEditModeOnFocusOut() {
//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
//           if (params.reason === GridCellEditStopReasons.cellFocusOut) {
//             event.defaultMuiPrevented = true;
//           }
//         }}
//       />
//     </div>
//   );
// }

// const columns: GridColDef[] = [
//   { field: "name", headerName: "Name", width: 180, editable: true },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     editable: true,
//     align: "left",
//     headerAlign: "left",
//   },
//   {
//     field: "dateCreated",
//     headerName: "Date Created",
//     type: "date",
//     width: 180,
//     editable: true,
//   },
//   {
//     field: "lastLogin",
//     headerName: "Last Login",
//     type: "dateTime",
//     width: 220,
//     editable: true,
//   },
// ];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: "hello",
//     age: 25,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 2,
//     name: "hello",
//     age: 36,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 3,
//     name: "hello",
//     age: 19,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 4,
//     name: "hello",
//     age: 28,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
//   {
//     id: 5,
//     name: "hello",
//     age: 23,
//     dateCreated: "hi",
//     lastLogin: "by",
//   },
// ];

import { Box } from "@mui/material";
import { DataGrid, GridToolbar, faIR } from "@mui/x-data-grid";
import { tokens } from "../../utils/Theme";
import { mockDataContacts } from "./data/mockData";
import Title from "../../Components/Title";
import { useTheme } from "@mui/material";

const PriceAndInventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Title
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          rows={mockDataContacts}
          columns={columns}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PriceAndInventory;
