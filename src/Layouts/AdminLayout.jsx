import { Outlet } from "react-router";
import { ColorModeContext, useMode } from "../utils/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AdminHeader from "../Components/Header/AdminHeader";
import Sidebar from "../Pages/Admin/Scenes/Sidebar";
// import Orders from "../Pages/Admin/Orders";
// import PriceAndInventory from "../Pages/Admin/PriceAndInventory";
// import Products from "../Pages/Admin/Products";
// import Bar from "../Pages/Admin/Bar";
// import Line from "../Pages/Admin/Line";
// import Pie from "../Pages/Admin/Pie";
// import FAQ from "../Pages/Admin/FAQ";
// import Calendar from "../Pages/Admin/Calendar";

const AdminLayout = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <AdminHeader />
            <div className="flex">
              <Outlet />
              <Sidebar />
            </div>
            <div>footer</div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default AdminLayout;
