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

const RemoveAccount = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.join}>
      <SubTitle 
        type="mng"
        subTitle="회원탈퇴"
        subContent={`탈퇴 사유를 남겨주시면${isMobile ? "\n" : " "}귀 기울여 듣고 부족한 점은 개선하겠습니다.`}
      />
      {/* <ManageList></ManageList> */}
      <SubWrapper column>
        <Card>
          <CardTitle content="사유 선택" essential />
          <CardContent>
            <CardItem style={{borderBottom: "none", paddingBottom: "0", marginBottom: "0"}}>
              <CardInput type="radio" id="" />
            </CardItem>
            
          </CardContent>

          <ButtonWrapper styleType="center">
            <Button content="회원 탈퇴" styleType="join__disabled"></Button>
          </ButtonWrapper>


        </Card>

      </SubWrapper>

    </div>
  )
}

export default RemoveAccount;