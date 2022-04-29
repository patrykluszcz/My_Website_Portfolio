import React from "react";
import SectionContactCSS from "./SectionContact.module.scss";
import image from "../../images/277946853_936287893722122_7862833761202753997_n.jpg";

const SectionContact = () => {
  return (
    <section id="contact">
      <div className={SectionContactCSS.container}>
        <h1 className={SectionContactCSS.title}>Contact</h1>

        <div className={SectionContactCSS.contact}>
          <form className={SectionContactCSS.form}>
            <div className={SectionContactCSS.input}>
              <input
                type="text"
                className={SectionContactCSS.form_control}
                placeholder="Name and surname"
              />
            </div>
            <div className={SectionContactCSS.input}>
              <input
                type="text"
                className={SectionContactCSS.form_control}
                placeholder="E-mail adress"
              />
            </div>
            <div className={SectionContactCSS.input}>
              <textarea
                className={SectionContactCSS.form_control}
                placeholder="Text message"
                rows="6"
              ></textarea>
            </div>
            <button className={SectionContactCSS.btn}>Send</button>
          </form>

          <div className={SectionContactCSS.contact_info}>
            <div className={SectionContactCSS.contact_adress}>
              <h3>Adress: </h3>
              <p>
                <i
                  className={`${SectionContactCSS.icon_geo} bi bi-geo-alt`}
                ></i>
                Ul. Lili Wenedy 1 <br /> 30-833 Kraków
              </p>
              <p>
                <i
                  className={`${SectionContactCSS.icon_phone} bi bi-phone`}
                ></i>
                +48 669 093 431
              </p>
              <p>
                <i className={`${SectionContactCSS.icon_email} bi bi-at`}></i>
                Patryk.Luszcz@outlook.com
              </p>
            </div>

            <div className={SectionContactCSS.image}>
              <img src={image} alt="Patryk Łuszcz" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
