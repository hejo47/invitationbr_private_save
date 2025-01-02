/* import */
import { Children, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/layout/Card.module.scss";
/* Component */

// Context
import { SetContext } from "../../store/option-set-context.js";

const Card = ({ children }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.card}>
      <div className={styles.card__wrap}>
        {children}
      </div>
    </div>
  )
}

export default Card;