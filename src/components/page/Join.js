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
import Card from "../layout/Card.js"
import CardTitle from "../layout/CardTitle.js";
import CardContent from "../layout/CardContent.js";
import CardItem from "../layout/CardItem.js";
import CardInput from "../layout/CardInput.js";
// Context
import { SetContext } from "../../store/option-set-context.js";

const Join = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      <SubTitle 
        type="mng"
        subTitle="회원가입"
        subContent={`간편하게 가입하고${isMobile ? "\n" : " "}무료 모바일청첩장 서비스를 이용하세요.`}
      />
      {/* <ManageList></ManageList> */}
      <SubWrapper column>
        <Card>
          <CardTitle content="약관동의" essential />
          <CardContent>
            <CardItem>
              <CardInput type="checkbox" id="allChk" content="모두 동의" />
            </CardItem>

            <CardItem>
              <CardInput type="checkbox" id="chk1" content="회원가입약관 동의(필수)" />
              <Link to="/">{isMobile ? "보기" : "약관보기"}</Link>
            </CardItem>

            <CardItem>
              <CardInput type="checkbox" id="chk2" content="개인정보처리방침안내의 내용(필수)" />
              <Link to="/">{isMobile ? "보기" : "약관보기"}</Link>
            </CardItem>
            
          </CardContent>

          <ButtonWrapper styleType="center">
            <Button content="휴대폰 본인 인증" styleType="point"></Button>
          </ButtonWrapper>

          <small>휴대폰을 이용하여 본인인증을 진행합니다.</small>

        </Card>

        <Card>
          <CardTitle content="회원정보" essential />
          <CardContent>

            <CardItem type="text">
              <CardInput type="text" id="text1" content="이름" />
            </CardItem>

            <CardItem type="text">
              <CardInput type="text" id="text2" content="휴대폰 번호" />
            </CardItem>

            <CardItem type="text">
              <CardInput type="password" id="text3" content="비밀번호" column />
            </CardItem>

            <CardItem style={{paddingTop: "28px", borderTop: "1px solid #E5E8EB"}}>
              <CardInput type="checkbox" id="chk3" content="휴대폰 문자메시지를 받겠습니다." />
            </CardItem>
            
          </CardContent>

          <ButtonWrapper styleType="center">
            <Button content="가입 완료" styleType="join__disabled"></Button>
          </ButtonWrapper>
        </Card>
      </SubWrapper>

    </div>
  )
}

export default Join;