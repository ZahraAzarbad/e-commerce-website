import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
