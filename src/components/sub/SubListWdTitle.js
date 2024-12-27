/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubListSearch.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconSearchIcon from "../../img/icon/icon_search.png";
import myInfo from "../../img/icon/icon_info.png";

const SubListWdTitle = ({ type, titlecontent }) => {
  return (
    <div className={`${styles.sub__list_search} ${styles.type__wc}`}>
      <p className={styles.sub__list_small}><span>{type}</span></p>
      <p className={styles.sub__list_large}>{titlecontent}</p>
    </div>
  )
}

export default SubListWdTitle;