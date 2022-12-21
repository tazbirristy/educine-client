import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Route";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  //Aos library setup
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-color">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
