/* Import */
import { useCallback, useContext, useEffect } from "react";
// Component
import Button from "./Button"
// CSS
import styles from "../../css/module/layout/MobileSettingDragTop.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingDragTop = ({ onTouchStart, onMouseDown }) => {
  return (
    <div className={styles.drag__top} onTouchStart={onTouchStart} onMouseDown={onMouseDown}>
      <div className={styles.drag__divide}></div>
    </div>
  )
}

export default MobileSettingDragTop;