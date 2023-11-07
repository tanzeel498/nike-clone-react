import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./features/homepage/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
