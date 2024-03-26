import React from "react";
import SettingContent from "../component/SettingContent";
import Footer from "../component/Footer";
import "../Setting.css";


export default function Setting() {
  return (
    <>
      <div className="job-bg">
        <div className="container ">
          <div class="breadcrumb d-flex align-items-center pt-2 mb-4">
            <a href="/">Ana Sayfa</a>
            <span>&rsaquo;</span>
            <b>Ayarlar</b>
          </div>
          <SettingContent/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
