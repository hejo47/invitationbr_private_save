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

const Find = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      {
        true ?
        <>
          <SubTitle 
            type="mng"
            subTitle="비밀번호 변경"
            subContent={`새로운 비밀번호를 입력해주세요.`}
          />
          <SubWrapper column>
            <Card>
              <CardContent>

                <CardItem type="text">
                  <CardInput type="password" id="text2" content="비밀번호" column />
                </CardItem>

                <CardItem type="text">
                  <CardInput type="password" id="text1" content="비밀번호 재입력" column />
                </CardItem>
                
              </CardContent>

              <ButtonWrapper styleType="center">
                <Button content="비밀번호 변경" styleType="join__disabled"></Button>
              </ButtonWrapper>

            </Card>
          </SubWrapper>
        </> : 
        <>
          <SubTitle 
            type="mng"
            subTitle="비밀번호 찾기"
            subContent={`이름과 휴대폰 번호 입력 후${isMobile ? "\n" : " "}‘인증번호 발송’ 버튼을 클릭하세요.`}
          />
          <SubWrapper column>
            <Card>
              <CardContent>

                <CardItem type="text">
                  <CardInput type="text" id="text2" content="이름" column />
                </CardItem>

                <CardItem type="text">
                  <CardInput type="text" id="text1" content="휴대폰 번호" column />
                </CardItem>
                
              </CardContent>

              <ButtonWrapper styleType="center">
                <Button content="인증번호 발송" styleType="join__disabled"></Button>
              </ButtonWrapper>

            </Card>
          </SubWrapper>
        </>
      }

    </div>
  )
}

export default Find;