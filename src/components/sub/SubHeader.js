/* import */
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubHeader.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import logoImg from "../../img/main/logo.svg";
import menuImg from "../../img/icon/icon_header_menu.png";
import rightImg from "../../img/icon/icon_arrow_right.png";
import closeImg from "../../img/icon/icon_header_menu_close.png";
import myInfo from "../../img/icon/icon_info.png";

const SubHeader = () => {
  const { isMobile } = useContext(SetContext);
  const [ activeMenu, setActiveMenu ] = useState(false);
  const location = useLocation();
  const moHeaderRef = useRef(null);
  const headerRef = useRef(null);
  const subRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      headerRef.current.classList.add(styles.active);
      moHeaderRef.current.style.display = "flex";
    } else if (currentScroll <= 0) {
      moHeaderRef.current.style.display = "none";
    } else {
      headerRef.current.classList.remove(styles.active);
    }
    if (lastScroll > currentScroll) {
      headerRef.current.style.display = "flex"; 
    } else if (lastScroll < currentScroll) {
      headerRef.current.style.display = "none"; 
      headerRef.current.classList.remove(styles.active);
    }
    setLastScroll(currentScroll);
  };
  useEffect(() => {
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); 
      };
    }
  }, [isMobile, lastScroll]);
  useEffect(() => {
    if (isMobile && activeMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isMobile, activeMenu])
  return (
    <div className={`${styles.sub__header} ${activeMenu && isMobile ? styles["active"] : ""}`}>
      <div className={`${styles.sub__header_wrapper} ${styles.active}`} ref={headerRef}>
        <Link to="/Manager" className={styles.logo}>
          <img src={logoImg} alt="시집가는 날" />
        </Link>
        <div className={styles.sub_ref} ref={subRef}>
          <ul className={`${styles.sub__menu}`}>
            <li>
              <Link 
                to="/Produce">
                청첩장 만들기
                <img src={rightImg} alt="" />
              </Link>
            </li>
            {/* <li>
            <Link 
              to="/">감사장 만들기
            </Link> 
            </li> */}
            <li>
              <Link 
                to="/Manager" 
                className={location.pathname.includes("/Manager") ? styles.active : ""}
                onClick={() => setActiveMenu(false)}
              >
                제작 관리
                <img src={rightImg} alt="" />
              </Link>
            </li>
            <li>
              <Link 
                to="/Wedding" 
                className={location.pathname.includes("/Wedding") ? styles.active : ""}
                onClick={() => setActiveMenu(false)}
              >
                예식순서
                <img src={rightImg} alt="" />
              </Link>
            </li>
            <li>
              <Link 
                to="/Notice" 
                className={location.pathname.includes("/Notice") ? styles.active : ""}
                onClick={() => setActiveMenu(false)}
              >
                공지사항
                <img src={rightImg} alt="" />
              </Link>
            </li>
            <li>
              <Link 
                to="/Qna" 
                className={location.pathname.includes("/Qna") ? styles.active : ""}
                onClick={() => setActiveMenu(false)}
              >
                자주하는 질문
                <img src={rightImg} alt="" />
              </Link>
            </li>
          </ul>
          <ul className={styles.sub__tool}>
            <li><Link to="/"><img src={myInfo} alt="" /><span>정보수정</span></Link></li>
            <li><Link to="/"><span>로그아웃</span></Link></li>
          </ul>
        </div>
        {isMobile && (
          <button
            type="button"
            className={styles.sub__menu_mo}
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            <img src={activeMenu ? closeImg : menuImg} alt={activeMenu ? "Close Menu" : "Open Menu"} />
          </button>
        )}
      </div>
      {
        isMobile ? 
        <div 
          className={`${styles.sub__header_wrapper} ${styles.mo} ${styles.active}`} 
          ref={moHeaderRef}
          style={{display: "none"}}
        >
          <Link to="/Manager" className={styles.logo}>
            <img src={rightImg} alt="시집가는 날" />
          </Link>
          <h2>공지사항</h2>
        </div> : null
      }
    </div>
  )
}

export default SubHeader;