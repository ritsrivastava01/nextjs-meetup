import React from "react";
import style from "./Layout.module.scss";
function Layout({ children }) {
  return <div className={style.main}>{children}</div>;
}

export default Layout;
