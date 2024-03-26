import React from "react";

export default function ProfileContent() {
  return (
    <>
      <div className="my-profile-content">
        <div className="container">
          <div className="profile-items d-flex">
            <div className="profile-left">
              <section className="profile-left-section">
                <div className="section-header">
                  Kariyer.net hesabını dolu dolu kullan! 💛
                </div>
                <p className="section-title">
                  Hesabını daha aktif kullanmak için bilgileri ekle!
                </p>
                <p className="section-description">
                  <div className="range-container">
                    <div className="done"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div>1/5</div>
                  </div>
                </p>
                <div>
                  <TaskCard
                    img={
                      "https://aday-spage.mncdn.com/Knet_img_phone.e3e4d10.svg?v=69448"
                    }
                    description={
                      "İşverenlerin sana ulaşacakları numarayı ekleyebilirsin. ☎"
                    }
                  >
                    Numara Ekle
                  </TaskCard>
                  <TaskCard
                    img={
                      "https://aday-spage.mncdn.com/Knet_img_home.b527778.svg?v=69448"
                    }
                    description={
                      "Konumuna yakın ilanları daha hızlı görüntüleyebilirsin. 🚶🏻"
                    }
                  >
                    Yaşadığın yeri ekle
                  </TaskCard>
                  <TaskCard
                    img={
                      "https://aday-spage.mncdn.com/Knet_img_calendar.6c7e034.svg?v=69448"
                    }
                    description={
                      "Kendinle ilgili daha fazla bilgi ekleyebilirsin. ✍🏻"
                    }
                  >
                    Doğum tarihini ekle
                  </TaskCard>
                  <TaskCard
                    img={
                      "https://aday-spage.mncdn.com/Knet_img_mail.a4e2088.svg?v=69448"
                    }
                    description={
                      "Hesabını güvende tutmak için e-postanı doğrulayabilirsin. 📬"
                    }
                  >
                    E-posta doğrula
                  </TaskCard>
                  <div className="task-card-done d-flex">
                    <div className="row">
                      <div className="col-sm-1">
                        <img
                          src="https://aday-spage.mncdn.com/Knet_img_photo.306a8be.svg?v=69448"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </div>
                      <div className="col-sm-11">
                        <div className="task-title">Profil fotoğrafı ekle</div>
                        <div className="task-description">
                          Seni en iyi yansıtan fotoğrafını ekleyebilirsin. 👩🏻 👱🏻
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="profile-left-section">
                <div className="resume-title">
                  Özgeçmişini kimler görüntüledi?
                </div>
                <div className="resume-description">
                  Tüm özgeçmişlerinin görüntülenme sayısını ve kimlerin
                  görüntülendiğini inceleyebilirsin.
                </div>
                <div className="resume-view d-flex mt-3">
                  <div className="resume-view-empty">
                    <img
                      src="https://aday-spage.mncdn.com/Knet_img_visibility_gray.987b1e0.png?v=69448"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <span className="p-1"> 0 · Son 90 Gün</span>
                  </div>
                  <div className="resume-view-empty">
                    <img
                      src="https://aday-spage.mncdn.com/Knet_img_visibility_gray.987b1e0.png?v=69448"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <span className="p-1"> 0 · Son 7 Gün</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <section className="profile-right-section">
                <div className="d-flex">
                  <div className="task-title">Özgeçmişlerim </div>
                  <button className="task-button">Oluştur </button>
                </div>
                <div className="task-description">
                  İlanlara başvururken özgeçmişlerin arasından seçim
                  yapabilirsin.
                </div>
                <div className="resume-top">
                  <h5>14.03.2024</h5>
                  <span className="red-badge">
                    <p>%0 Özgeçmiş Gücü</p>
                  </span>
                  <div className="resume-top-description">
                    Özgeçmişin boş gözüküyor... 👀 İlanlara başvurmak için
                    özgeçmişine bilgi ekle!
                  </div>
                </div>
                <div className="resume-bottom">
                  <div className="resume-bottom-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHCSURBVHgB7ZsxbsIwFIZ/J2VnZsodYMhW9wRtT9D0BFWP0JM0Y2/RdENKkNwTNBsrYgWFvkggVWBXDkJI9nufZNlyHkT+MLYTJ4DAG4UzmM1muuu67G9dkiRt0zQVrsAlz3+DM9jtdoVS6umorqSswhW45PkTMEcEgDnsBfw7C2itx+v1+oWK/aCTISxMn0aj0dt8Pm9dQU4BeZ5nm83mk4oZwqYlCXcuCc6/QCSN7zn8kFasAqbT6QPiaPyBbN+mE1w9QCM+7m2VrpXg+LiCVlpflJUIgP0qUfvEei+F6Ut/FotFiQCg7q59Y2UhBOaIADBHBIA5Q+4IaZpe3hEGt76BQwRklApEhowBYI4MggNiW7r3XiEAaM9Aw/NyfoiAqq7rZwQAzVYlPAXIGADmiAAwRwSAOSIAzBEBYI4IAHNEAJgjAsAcEQDmiAAwRwSAOSIAzBEBYI4IAHOGbI4WtOlYIDKsPUApZRAZ+2edT7AK2G63JWUrxMOq67rKdsAqwBizImOviATq0W/UptZ2LHV9aLlcmslk8k3FHJbH5wOhpcY/Nk3z4QrwenW2f1WVesS4TwiENE1NXdfRjWXCpfkF22aByR+XlEoAAAAASUVORK5CYII="
                      alt=""
                      width={16}
                      height={16}
                    />{" "}
                    <span>19.03.2024</span> <button>Tarihi Güncelle</button>
                  </div>
                  <div className="resume-bottom-info">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANiSURBVHgB7ZtNbhoxFMcfH9nTJawmN0DAgl2cE6Q3KJygyQkCJ0hzAuAEJSco3SHxoekJOt3AFokdn/1bNRKiHrDBYwaNfxKaie2Z8P7zxs/2M0QOhyPJpMgilUqF4fC03W6L+HipVMoTVTN8fPzt4/gxHA57ZAkrAnDDYfArTpniJQHaN8fjcZsiJlIBGGO5+Xz+ndQNP6R9d3fX7Pf7AUVEZAJUq1VvuVz+wKlHlxFAhMeoRIhEAIPG74hMhCxFwCnj0dn1NpvNB/3r/CidTvO2D3jvWcglXNAWjo9kGOMeUCqVXmFgQ1bHDV+tVnXf9wNZfbFY9DKZzBtOP8vqIdALOsZvZBCjAhxzfRjfRHhrqNwHUaMhosYhs/V6fQ8BZ2SINBlksVgwkrv+u6rxHNH2XVKVy2azNTKIUQHwlL9IigM8NW23xTUNEn3EPvCMJzKIMQHw/uZIEu8hSifsnT8Gd3NcK/MCJv6XEYwJANcsysphRJfOpycrREj0yBDGBIBrSp/KYDDw6UwQMaTXIoR6ZIjIBbiEsN4e44b4vQK3ihOAEk7iBTh7KCzm+mzX+SHcPeBQO2yH+jpdAO7bkhS3cd+fon6GsOifO1PUFkCM9/mXYhQvzlo80RIggnm+abTXDbT6ABjPZ2gexZeddyqj7AHi6f+mGwATqU+qU2ZlD4DxRboRsKjCVNsqL4nx3h497n/lo9HIam7hkHK5vD0s0xkqu4EQJRwnACUcJwAlnMQLEElq7BTIHtXEEjoTRT2MMzo20uGHWPcAGN8SU1y2V8x4GTJCb2QZqwKIvGEtrB5e8MzTYmQRawLwZEZY0nQfiPDVZOLjFNYECEucSMiZTHycwpoAOskMk4mPU1gTAFNU5QwRZnMBWcKaACJFFig0DS5Jp+liNQqgE1RZIX4hi1gVgG+A5NtcSJL352Vw/ToWWC7JJmtjfSTI9/ggzHVhLEO/wHMJfA3vFzq+Now3tvVFlasMhcWGibb4XBU3G6SE4wSghOMEoIRzcRjkqzt0wygLwDcihJRrZWNtgNFmoNpW+RXAaK1H8iFs3Ah0fnOkLMCRrauxgm/N1Wmf0Wk8mUx6hULhHqdxTZV3MJ941rlASwDOdDrt5vP5PyIF7dH14Z7ZF78ya5DD4XBo8Bdd9ldDHU0SfwAAAABJRU5ErkJggg=="
                      alt=""
                      width={16}
                      height={16}
                    />{" "}
                    <span>Tüm Şirketler</span>{" "}
                    <button>Görünürlüğü Ayarla</button>
                  </div>
                </div>
              </section>
              <ProfileItem
                title={"Ön yazılarım"}
                description={
                  "Başvuracağın ilanda seni motive eden nedenleri ön yazı olarak hazırlayabilirsin."
                }
                button={"Oluştur"}
              >
                Henüz bir ön yazı eklemedin.
              </ProfileItem>
              <ProfileItem
                title={"Dosyalarım"}
                description={
                  "Portfolyo ve sertifika gibi özgeçmişini destekleyici dosyaları yükleyebilirsin."
                }
                button={"Yükle"}
              >
                Henüz bir dosya eklemedin.
              </ProfileItem>
              <ProfileItem
                title={"Takip ettiğim şirketler"}
                description={
                  "Takip ettiğin şirketler yeni bir ilan yayınladığında sana bildirim ve e-posta göndereceğiz."
                }
                button={"Ekle"}
              >
                Henüz takip ettiğin şirket bulunmuyor.
              </ProfileItem>
              <div className="profile-right-section">
                <div className="d-flex">
                  <div className="task-title">Engellediğim şirketler </div>
                  <button className="task-button">Ekle </button>
                </div>
                <div className="task-description">
                  İş ilanını görmek istemediğin şirketleri engelleyebilir ve
                  görüntüleyebilirsin.
                </div>
              </div>
              <div className="profile-right-section mb-5">
                <div className="d-flex">
                  <div className="task-title">Sana uygun ilanlar </div>
                  <button className="task-button"> İlanlar </button>
                </div>
                <div className="job-items">
                  <div className="job-cards">
                    <JobCard adress={"İstanbul(Avr.) - Hibrit"} description={"EDS Elektronik Destek San. Ve Tic."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/572/ai_dtk_14572_6022024011515.png"}>Kurumsal Satış Uzmanı</JobCard>
                    <JobCard adress={"İstanbul(Asya) - İş Yerinde"} description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/775/90775_249606.jpg"}>ERP Mühendisi (ıfs)</JobCard>
                    <JobCard adress={"İstanbul(Asya) - İş Yerinde"} description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/350/ai_dtk_206350_6022024005849.png"}>ERP Mühendisi (ıfs)</JobCard>
                    <JobCard adress={"İstanbul(Asya) - İş Yerinde"} description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/172/ai_dtk_168172_6022024011354.png"}>ERP Mühendisi (ıfs)</JobCard>
                    <JobCard adress={"İstanbul(Asya) - İş Yerinde"} description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/350/ai_dtk_206350_6022024005849.png"}>ERP Mühendisi (ıfs)</JobCard>
                    <JobCard adress={"İstanbul(Asya) - İş Yerinde"} description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."} img={"https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/472/ai_dtk_1472_6022024004228.png"}>ERP Mühendisi (ıfs)</JobCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TaskCard({ children, img, description }) {
  return (
    <div className="task-card d-flex">
      <div className="row">
        <div className="col-sm-1">
          <img src={img} width={24} height={24} alt="" />
        </div>
        <div className="col-sm-11">
          <div className="task-title">{children}</div>
          <div className="task-description">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ProfileItem({ children, title, description, button }) {
  return (
    <div className="profile-right-section">
      <div className="d-flex">
        <div className="task-title">{title} </div>
        <button className="task-button">{button} </button>
      </div>
      <div className="task-description">{description}</div>
      <div className="no-profile-result mt-3 mb-1">
        <span>{children}</span>
        <button className="task-button">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  );
}

function JobCard({ children, adress, description, img }) {
  return (
    <div className="job-card">
      <div className="row mb-2">
        <div className="col-sm-2">
          <img
            src={img}
            width={65}
            height={65}
            alt=""
          />
        </div>
        <div className="col-sm-10">
          <div className="card-title">{children}</div>
          <div className="card-text">{description}</div>
          <div className="card-adress">{adress}</div>
        </div>
      </div>
      <div className="c-footer d-flex justify-content-between">
        <div className="d-flex flex-row">
          <span>Tam Zamanlı</span>
        </div>
        <div className="d-flex flex-row-reverse">
          <span>Bugün</span>
        </div>
      </div>
    </div>
  );
}
