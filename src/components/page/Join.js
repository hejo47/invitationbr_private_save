/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
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
      <SubWrapper>
        <div className="card">
          <div className="card__wrap">
            <div className="card__title">
              <h4>약관동의<span>*</span></h4>
            </div>
            <div className="card__content">

              <div>
                <div>
                  <input type="text" />
                  <label htmlFor=""></label>
                </div>
              </div>

              <div>
                <div>
                  <input type="text" />
                  <label htmlFor=""></label>
                </div>
                <span>약관보기</span>
              </div>
              <div>
                <div>
                  <input type="text" />
                  <label htmlFor=""></label>
                </div>
                <span>약관보기</span>
              </div>

              <ButtonWrapper>
                <Button content="휴대폰 본인 인증"></Button>
                <span>휴대폰을 이용하여 본인인증을 진행합니다.</span>
              </ButtonWrapper>
            </div>
          </div>
        </div>
      </SubWrapper>

    </div>
  )
}

export default Join;