import { RouterProvider } from "react-router-dom";
import route from "./Router/Router";
import "./Styles/App.css";

function App() {
  return (
    <main
      style={{
        maxWidth: "1440px",
      }}
    >
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
