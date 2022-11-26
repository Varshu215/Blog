//import { useLocation } from "react-router";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

import "./home.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
    <div className="blaa">
      <Header />
      <div className="home">
         <Sidebar />
      </div>

    </div>
      
    </>
  );
}