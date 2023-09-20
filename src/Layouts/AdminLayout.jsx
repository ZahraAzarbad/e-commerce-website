import { Outlet } from "react-router";
import { ColorModeContext, useMode } from "../utils/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AdminHeader from "../Components/Header/AdminHeader";
import Sidebar from "../Pages/Admin/Scenes/Sidebar";

const AdminLayout = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex justify-between">
          <main className="w-full h-full">
            <AdminHeader />
            <Outlet />
          </main>
          <Sidebar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default AdminLayout;
