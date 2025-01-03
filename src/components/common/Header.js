/* Import */
import { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
/* Component */
import Container from "../layout/Container";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
import BasicModalHeader from "../layout/modal/BasicModalHeader.js";
import MetaTag from "../../components/common/MetaTag";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/common/Header.module.scss";
/* Image */
import iconHomeArrowImg from "../../img/icon/icon_header_home_arrow.svg"
import iconHomeImg from "../../img/icon/icon_header_home.svg"
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { RefContext } from "../../store/option-ref-context.js";
import { SetContext } from "../../store/option-set-context.js";

const Header = () => {
  const { isMobile } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const { invitationRef } = useContext(RefContext);
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";
  
  const [save, setSave] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSave = () => setSave(true);
  const handleSaveClose = () => setSave(false);
  const warnOpen = () => setOpen(true);
  const headerNav = useNavigate();
  const previewHandler = () => {
    headerNav('/Produce/Preview');
  };
  const saveHandler = () => {
    // Feat: 저장 필수 요소 분기 함수 (주석, 241115)
    // if(basicInfoList.groomInfo.lastname && basicInfoList.groomInfo.firstname && basicInfoList.brideInfo.lastname && basicInfoList.brideInfo.firstname) {
    //   handleSave();
    // } else {
    //   warnOpen();
    // } 
    handleSave();
  }

  const headerRef = useRef(null); 
  // const [lastPos, setLastPos] = useState(0);

  // useEffect(() => {
  //   if(isMobile) {
  //     const handleScroll = () => {
  //       const currentPos = window.scrollY; 
  //       const header = headerRef.current;
  //       if (!header) return;
  //       if(isTargetPage || isMobile) {
  //         if (currentPos > 0) {
  //           header.classList.add(styles["active"]);
  //         } else {
  //           header.classList.remove(styles["active"]);
  //         }
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll); 
  //     };
  //   }
  // }, [lastPos, isMobile]);

  return (
    <>
      <MetaTag title="청첩장 만들기" description="설명" imageUrl="" />
      <header ref={headerRef} className={styles.header}>
        <Container>
          <Link to="/" className={styles.header__home}>
            <img src={iconHomeArrowImg} alt="" />
            <img src={iconHomeImg} alt="" />
          </Link>
          <div className={styles.header__title}>
            <h2>청첩장 만들기</h2>
            <p>선택 항목은 메뉴명 앞에 체크박스 표시가 있습니다.</p>
          </div>
          <ButtonWrapper>
            <Button type="button" styleType="default" content="미리보기" 
              onClick={() => {
                previewHandler();
                window.scrollTo(0, 0);
              }} 
            />
            <Button 
              type="button" 
              styleType="primary" 
              content="저장" 
              onClick={saveHandler} 
            />
          </ButtonWrapper>
        </Container>
        {
          ReactDOM.createPortal(<BasicModalHeader openvar={save} onClose={handleSaveClose} />, document.body)
        }
        <Toast type="warn" open={open} setOpen={setOpen} message="이름은 필수요소입니다." />
      </header>
    </>
  )
}

export default Header;