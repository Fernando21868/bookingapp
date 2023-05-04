import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties></FeaturedProperties>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
