import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
  padding: '5px 10px',
  backgroundColor: '#101820',
  color: "#0f80b5",
  border: '1px solid #0f80b5',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight:600,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#d3c5e5',
    color: '#101820',
  },
});

export default CustomButton;