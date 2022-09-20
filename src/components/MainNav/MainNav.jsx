import { useState } from "react";
import styles from "./index.module.scss";
import MainSidebar from "../MainSidebar";

const MainNav = ({titleContent, titleFont, setIsActive}) => {

    let [sidebarWidth, setSidebarWidth] = useState("0")

    const openSidebar = () => {
        if (sidebarWidth === "0") {
            sidebarWidth = setSidebarWidth("25vw")
            setIsActive((prev) => !prev)
        }
        else {
            sidebarWidth = setSidebarWidth("0")
            setIsActive((prev) => !prev)
        }
    }

    return(
        <nav className={styles.MainNav}>
            
            <a href="./"><h1 className="logoHeader" style={{ fontFamily: titleFont }}>{titleContent}</h1></a>

            <ul>
                    <li><button id='popularBtn'>Popular</button></li>
                    <li><button id='topRateBtn'>Top Rated</button></li>
                    <li><button id='recommendedBtn'>Recommended</button></li>
            </ul>

            <button className="navSidebarOpener" onClick={openSidebar}>☰</button>
            <MainSidebar sWidth={sidebarWidth}/>
      </nav>
    );
}

export default MainNav;