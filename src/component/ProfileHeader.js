import React from "react";

export default function ProfileHeader() {
  return (
    <>
      <div className="profile-header">
        <div className="header-background"></div>
        <div className="container">
          <div className="header-photo">
            <img
              src="https://docs.kariyer.net/candidate/000/033/604/avatar/3360403520240316065308023.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUsicT0T%2Bivw8tRGslHnTNI6kNQBdNmxzLrzZ4gIqPq6cplu%2Fepa236IwVEe9OuIbIUXM2WyraYGP!e!"
              alt=""
            />
           
          </div>
          <div className="header-info">
            <div className="d-flex">
              <h2>MUHAMMED IKBAL</h2>
              <a href="/ayarlar" className="button-outline d-flex align-items-center" style={{textDecoration:"none"}}><span style={{ color: "#8316b5" }}>Ayarlar</span></a>
            </div>
            <div className="email">
              goktekinikbals@gmail.com <span className="dot">·</span> <span>Doğrula</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
