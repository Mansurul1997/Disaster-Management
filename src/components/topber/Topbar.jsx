import { useState } from "react";
import "./topbar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Topbar() {

  const navigate = useNavigate();

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img onClick={() => navigate("/Home")} src="/assests/nameLogo.jpg" alt="" className="logo"/>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <FaSearch /> <input placeholder="Seacrh here" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span onClick={()=>navigate("/Crisis")} >Crisis</span>
          <span onClick={()=>navigate("/Donation")} >Fund</span>
          <span onClick={()=>navigate("Volunteer")} >Volunteer</span>
          <span onClick={()=>navigate("Dashboard")} >Dashboard</span>
        </div>
        <img onClick={() => navigate("/LoginPopup")} src="/assests/1.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}
