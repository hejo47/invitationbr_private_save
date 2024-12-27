/* import */
// import { useContext } from "react";
/* CSS */
import styles from "../../css/module/page/SubNotice.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import SubSideMenu from "../sub/SubSideMenu.js";
// Context
// import { SetContext } from "../../store/option-set-context.js";

const menuList = [
  {
    src: "/",
    title: "예식 전"
  },
  {
    src: "/",
    title: "예식"
  },
  {
    src: "/",
    title: "예식 후"
  },
]

// const noticeList = [
//   {
//   }
// ]

const SubWedding = () => {
  // const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__notice}>
      <SubTitle 
        subTitle="예식 순서" 
        subContent="결혼식 진행순서에 대해 안내 드립니다."
        subPhoto={"/img/sub/sub_wedding.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>

      </SubWrapper>
    </div>
  )
}

export default SubWedding;