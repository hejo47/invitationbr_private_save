/* Import */
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
// import { nameHandler } from '../../utils/helpers';
/* Component */
import InvitationModalLetter from "../layout/modal/InvitationModalLetter.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Letter.module.scss";
/* Image */
import IconFlower  from "../../img/icon/icon_deceased_flower.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Letter = ({ aos }) => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Produce/Preview";

  const { basicInfoList } = useContext(InfoContext);
  const { isMobile, letterList, selectOptionList } = useContext(SetContext);
  const [ deceasedIcon, setDeceasedIcon ] = useState("故");
  const [ isInitialRender, setIsInitialRender ] = useState(true);
  const { letterRef } = useContext(RefContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const detailInitHandler = () => {
    return (
      <div className={styles.detail}>
        <p>
          {basicInfoList.groomParentInfo.dadDeceased ? deceasedIcon : null}이길현 · {basicInfoList.groomParentInfo.momDeceased ? deceasedIcon : null}김윤희
          <span>의 {basicInfoList.groomInfo.relation}</span>
          {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
        </p>
        <p>
          {basicInfoList.brideParentInfo.dadDeceased ? deceasedIcon : null}김영수 · {basicInfoList.brideParentInfo.momDeceased ? deceasedIcon : null}이영은
          <span>의 {basicInfoList.brideInfo.relation}</span>
          {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
        </p>
      </div>
    )
  }
  const detailEditHandler = (type) => {
    let parents, children, initName = null;
    if(type === "groom") {
      parents = basicInfoList.groomParentInfo;
      children = basicInfoList.groomInfo;
      initName = "보람"
    } else if(type === "bride") {
      parents = basicInfoList.brideParentInfo;
      children = basicInfoList.brideInfo;
      initName = "신우"
    }
    return (
      <p>
        {parents.dadDeceased ? deceasedIcon : null}{parents.dadName ? parents.dadName : ""}{parents.dadName && parents.momName ? " · " : ""}{parents.momDeceased ? deceasedIcon : null}{parents.momName ? parents.momName : ""}
        <span>의 {children.relation}</span>
        {children.firstname ? children.firstname : initName}
      </p>
    )
  }
  useEffect(() => {
    if (
      basicInfoList.groomParentInfo.dadName ||
      basicInfoList.groomParentInfo.momName ||
      basicInfoList.brideParentInfo.dadName ||
      basicInfoList.brideParentInfo.momName
    ) {
      setIsInitialRender(false);
    }
  }, [
    basicInfoList.groomParentInfo.dadName,
    basicInfoList.groomParentInfo.momName,
    basicInfoList.brideParentInfo.dadName,
    basicInfoList.brideParentInfo.momName,
  ]);
  useEffect(() => {
    selectOptionList.deceasedFlower ? 
    setDeceasedIcon(<img src={IconFlower} alt="국화 이미지" />) 
    : setDeceasedIcon("故");
  }, [selectOptionList.deceasedFlower]);
  return (
    <div ref={letterRef} id="Letter" className={`${styles.letter}`} data-aos={aos}>
      <div className={styles.letter__wrap}>
        <HeadLine title={letterList.title ? letterList.title : "초대합니다"} content="invitation" />
        <div className={styles.letter__content}>
          <div className={styles.greet}>
            <p>
              {
                letterList.content ? 
                letterList.content 
                : "두 사람이 사랑으로 만나\n진실과 이해로써 하나를 이루려고 합니다.\n\n이 두 사람을 진심으로 아끼고 돌봐주신\n여러 어른과 친지분들을 모시고 서약을 맺고자 하오니\n오셔서 축복해 주시면 감사하겠습니다." 
              }
            </p>
          </div>
          <div className={styles.detail}>
            {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingCoupleInfomation" position="absolute" /> : null}
            {
              isInitialRender ?
              detailInitHandler() :
              <>
                {
                  basicInfoList.groomParentInfo.dadName === "" && basicInfoList.groomParentInfo.momName === "" ?
                  <p>{basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname : "이보람"}</p>
                  : 
                  <>{detailEditHandler("groom")}</>
                }
                {
                  basicInfoList.brideParentInfo.dadName === "" && basicInfoList.brideParentInfo.momName === "" ?
                  <p>{basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname : "김신우"}</p>
                  : 
                  <>{detailEditHandler("bride")}</>
                }
              </>
            }

          </div>
          <ButtonWrapper styleType="center">
            <Button content="연락하기" styleType="invitation__call" onClick={handleOpen}></Button>
          </ButtonWrapper>
        </div>
      </div>
      {
        ReactDOM.createPortal(<InvitationModalLetter openvar={open} onClose={handleClose} />, document.body)
      }
    </div>
  )
}

export default Letter;