/* import */
// import { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubSideMenu.module.scss";
/* Context */
// import { SetContext } from "../../store/option-set-context.js";
/* Image */

const SubSideMenu = ({ menuList }) => {
  const location = useLocation();
  return (
    <div className={styles.sub__side_menu}>
      <div className={styles.sub__side_menu_wrapper}>
        <ul>
          {menuList.map((item, idx) => (
            <li key={item.src + idx}>
              <Link 
                to={item.src} 
                className={location.pathname === "/Notice/" ? styles.active : ""}
              >
                {item.title}
              </Link>
            </li>
            // 주소 마지막 슬래시 제거
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SubSideMenu;