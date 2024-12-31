// Import
// import { nameHandler } from '../../utils/helpers';
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingName.module.scss";

// C: 기본 정보 편집 - 이름 (BasicInfomationSetting)
const BasicInfomationSettingName = ({ genderCode, nameInfo, onChange, onChange2 }) => {
  return (
    <div className={styles.option__input}>
      <input type="text" 
        id={`BasicInfoLastName${genderCode}`}
        name="lastname"
        value={nameInfo.lastname}
        placeholder="성"
        onChange={onChange}
        required={true}
        maxLength={2}
      />
      <input type="text" 
        id={`BasicInfoFirstName${genderCode}`} 
        name="firstname"
        value={nameInfo.firstname}
        placeholder="이름" 
        onChange={onChange2}
        required={true} 
        maxLength={3}
      />
    </div>
  )
}

export default BasicInfomationSettingName;