/* import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/sub/SubListItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconQuest from "../../img/icon/icon_quest.png";
import iconAnswer from "../../img/icon/icon_answer.png";
import { ReactComponent as IconDownArrowImg } from "../../img/icon/icon_settingItem_arrow.svg";

const SubListItemWd = ({ item, id, idx, activeId }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <li 
      className={`${styles.sub__list_ltem} ${styles.type__wd}`}>
      <div className={styles.sub__list_ltem__wrapper}>
        <div className={styles.info}>
          <div className={styles.badge}><p>{idx + 1}</p></div>
          <div className={styles.title}>
            <p>{item.title}</p>
            <span>{item.content}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SubListItemWd;