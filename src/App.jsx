import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./features/homepage/Footer";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
