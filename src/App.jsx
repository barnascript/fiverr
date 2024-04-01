import styles from "./App.module.scss";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Snippet from "./components/snippet/Snippet";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/gigs" element={<Gigs />} />
        <Route exact path="/gig/:id" element={<Gig />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/mygigs" element={<MyGigs />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/message/:id" element={<Message />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <Snippet />
    </>
  );
}

export default App;
