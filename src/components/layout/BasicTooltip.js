/* Import */
import Tooltip from '@mui/material/Tooltip';

const BasicTooltip = ({ title, placement, open, onClose, onOpen, children }) => {
  return (
    <Tooltip 
      title={title}
      placement={placement} 
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      arrow 
    >{children}</Tooltip>
  );
}

export default BasicTooltip;