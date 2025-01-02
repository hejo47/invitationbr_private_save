/* import */
import { Children, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/layout/Card.module.scss";
/* Component */

// Context
import { SetContext } from "../../store/option-set-context.js";

const CardInput = ({ type, id, content, column }) => {
  const { isMobile } = useContext(SetContext);
  {
    if(type === "checkbox") {
      return (
        <div className={styles.card__chkbox}>
          <input type={type} id={id} name={id} />
          <label htmlFor={id}>{content}</label>
        </div>
      )
    }
    else {
      return (
        <div className={`${column ? styles.card__text_column : styles.card__text}`}>
          <input type={type} id={id} name={id} />
          <label htmlFor={id}>{content}</label>
        </div>
      )
    }
  }

}

export default CardInput;