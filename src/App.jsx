import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./features/homepage/Footer";

function App() {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
