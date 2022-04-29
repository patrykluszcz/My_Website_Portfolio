import FooterCSS from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={FooterCSS.footer}>
      Created by Patryk Łuszcz <br /> &copy; Copyright 2022 - All rights
      reserved
    </div>
  );
};

export default Footer;
