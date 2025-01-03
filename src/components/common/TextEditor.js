/* Import */
import { useState, useRef } from "react";
import ReactDOM from 'react-dom';
/* Component */
import Button from "../layout/Button.js"
import BasicModalLetter from "../layout/modal/BasicModalLetter.js"
import InputBasicDeleteButton from "../layout/InputBasicDeleteButton";
/* CSS Module */
import styles from "../../css/module/common/TextEditor.module.scss";
/* Image */
import {ReactComponent as IconToolImgBold} from "../../img/icon/icon_editor_tool_bold.svg"
import {ReactComponent as IconImgItalic} from "../../img/icon/icon_editor_tool_italic.svg"
import {ReactComponent as IconImgUnderline} from "../../img/icon/icon_editor_tool_underline.svg"
import {ReactComponent as IconImgLeft} from "../../img/icon/icon_editor_tool_left.svg"
import {ReactComponent as IconImgRight} from "../../img/icon/icon_editor_tool_right.svg"
import {ReactComponent as IconImgCenter} from "../../img/icon/icon_editor_tool_center.svg"

// C: TEXTAREA
const TextEditor = ({ type, dataName, textValue, onChange, setLetterList, maxLength, onClear }) => {
  const textareaRef = useRef(null);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsActiveTab(0);
  };
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }
  // const handleTextareaChange = (e) => {
  //   const { value, selectionStart } = e.target;
  //   const cursorPosition = selectionStart;
  //   onChange(e);
  //   setTimeout(() => {
  //     if (textareaRef.current) {
  //       textareaRef.current.selectionStart = cursorPosition;
  //       textareaRef.current.selectionEnd = cursorPosition;
  //     }
  //   }, 0);
  // };
  return (
    <>
      <div className={`${styles.editor__content} ${type === "letter" ? styles["letter"] : null}`}>
        { // 241209 주석 추가: 에디터 기능 삭제
        /* <div className={styles.tool__list}>
          <ul className={styles.tool__list_deco}>
            <button><IconToolImgBold /></button>
            <button><IconImgItalic /></button>
            <button><IconImgUnderline /></button>
          </ul>
          <ul className={styles.tool__list_align}>
            <button className={`${styles.active}`}><IconImgLeft /></button>
            <button><IconImgCenter /></button>
            <button><IconImgRight /></button>
          </ul>
        </div> */}
        <textarea 
          ref={textareaRef}
          name={dataName} 
          id={"textarea" + dataName + Math.random(1)}
          className={styles.editor__content_wrap} 
          value={textValue} 
          placeholder="내용을 입력하세요."
          onChange={onChange}
          maxLength={maxLength}
        />
        {/* {
          textValue !== "" ? 
          <InputBasicDeleteButton
            inputName={dataName}
            onClear={onClear}
          /> : null
        } */}
        {
          type === "letter" ?
          <div className={styles.button__wrapper}>
            <Button type="button" content="샘플 문구 보기" styleType="sample__view" onClick={handleOpen}></Button>
          </div>
          : null
        }
      </div>
      {
        type === "letter" ?
        ReactDOM.createPortal(<BasicModalLetter setLetterList={setLetterList} isActiveTab={isActiveTab} setActiveTabHandler={setActiveTabHandler} openvar={open} onClose={handleClose} />, document.body)
        : null
      }
    </>
  )
}

export default TextEditor;