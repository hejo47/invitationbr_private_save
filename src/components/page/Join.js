/* import */
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/Join.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import ButtonWrapper from "../layout/ButtonWrapper.js"
import Button from "../layout/Button.js"
// Context
import { SetContext } from "../../store/option-set-context.js";

const Join = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      <SubTitle 
        type="mng"
        subTitle="회원가입"
        subContent="간편하게 가입하고 무료 모바일청첩장 서비스를 이용하세요."
      />
      {/* <ManageList></ManageList> */}
      <SubWrapper column>
        <div className={styles.card}>
          <div className={styles.card__wrap}>
            <div className={styles.card__title}>
              <h4>약관동의<span>*</span></h4>
            </div>
            <div className={styles.card__content}>

              <div className={styles.card__item}>
                <div className={styles.card__chkbox}>
                  <input type="checkbox" />
                  <label htmlFor="">모두 동의</label>
                </div>
              </div>

              <div className={styles.card__item}>
                <div className={styles.card__chkbox}>
                  <input type="checkbox" />
                  <label htmlFor="">회원가입약관 동의(필수)</label>
                </div>
                <Link to="/">약관보기</Link>
              </div>
              <div className={styles.card__item}>
                <div className={styles.card__chkbox}>
                  <input type="checkbox" />
                  <label htmlFor="">개인정보처리방침안내의 내용(필수)</label>
                </div>
                <Link to="/">약관보기</Link>
              </div>
              
            </div>
            <ButtonWrapper styleType="center">
              <Button content="휴대폰 본인 인증" styleType="point"></Button>
            </ButtonWrapper>

            <small>휴대폰을 이용하여 본인인증을 진행합니다.</small>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__wrap}>
            <div className={styles.card__title}>
              <h4>회원정보<span>*</span></h4>
            </div>
            <div className={styles.card__content}>

              <div className={styles.card__item}>
                <div className={styles.card__text}>
                  <input type="text" />
                  <label htmlFor="">이름</label>
                </div>
              </div>

              <div className={styles.card__item}>
                <div className={styles.card__text}>
                  <input type="checkbox" />
                  <label htmlFor="">회원가입약관 동의(필수)</label>
                </div>
                <Link to="/">약관보기</Link>
              </div>
              <div className={styles.card__item}>
                <div className={styles.card__text}>
                  <input type="checkbox" />
                  <label htmlFor="">개인정보처리방침안내의 내용(필수)</label>
                </div>
                <Link to="/">약관보기</Link>
              </div>
              
            </div>
            <ButtonWrapper styleType="center">
              <Button content="휴대폰 본인 인증" styleType="point"></Button>
            </ButtonWrapper>

            <small>휴대폰을 이용하여 본인인증을 진행합니다.</small>
          </div>
        </div>
      </SubWrapper>

    </div>
  )
}

export default Join;