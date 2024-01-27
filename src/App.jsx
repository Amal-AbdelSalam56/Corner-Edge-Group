import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Footer from "./components/footer/footer";
import Manu from './pages/menu/menu';
import Business from './pages/Business/business';
import AboutUs from './pages/aboutus/aboutus';
import Services from './pages/services/services';
import ServicesSingle from './pages/servicesSingle/servicesSingle';
import Projects from './pages/projects/projects';
import Blog from './pages/blog/blog';
import BlogSingle from './pages/blogSingle/blogSingle';
import Contact from './pages/contact/contact';
import ErrorPage from './pages/errorPage/errorPage';

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Manu />} />
        <Route path="/business" element={<Business />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesSingle" element={<ServicesSingle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogSingle" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" exact element={<ErrorPage />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
