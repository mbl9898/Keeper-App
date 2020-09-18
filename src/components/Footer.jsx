import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Keeper App By MBL ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
