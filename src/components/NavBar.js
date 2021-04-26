import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavItems = links.map(item => 
     <a key={item} href={"#" + item}>{item}</a>
    )

  return <nav>{NavItems}</nav>;
}

export default NavBar;
