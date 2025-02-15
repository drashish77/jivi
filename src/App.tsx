import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormComponent from "./components/Form/Form";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Thanks from "./components/Thanks/Thanks";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <FormComponent /> },
    { path: "/thanks", element: <Thanks /> },
  ]);
  return (
    <div className="">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
