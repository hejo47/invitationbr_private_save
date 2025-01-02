/* import */
import { Children, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/layout/Card.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import ButtonWrapper from "./ButtonWrapper.js"
import Button from "./Button.js"
// Context
import { SetContext } from "../../store/option-set-context.js";

const CardTitle = ({ content, essential }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.card__title}>
      <h4>{content}{essential ? <span>*</span> : null}</h4>
    </div>
  )
}

export default CardTitle;