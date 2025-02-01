import { useState } from "react";
import "./topbar.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Topbar() {

  const navigate = useNavigate();

  const [topbarLink,setTopbarLink] = useState("Crisis");

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
          <span onClick={()=>setTopbarLink("Crisis")} className={topbarLink==="Crisis"?"active":""}>Crisis</span>
          <span onClick={()=>setTopbarLink("Fund")} className={topbarLink==="Fund"?"active":""}>Fund</span>
          <span onClick={()=>setTopbarLink("Volunteer")} className={topbarLink==="Volunteer"?"active":""}>Volunteer</span>
          <span onClick={()=>setTopbarLink("Dashboard")} className={topbarLink==="Dashboard"?"active":""}>Dashboard</span>
        </div>
        <img onClick={() => navigate("/LoginPopup")} src="/assests/1.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}
