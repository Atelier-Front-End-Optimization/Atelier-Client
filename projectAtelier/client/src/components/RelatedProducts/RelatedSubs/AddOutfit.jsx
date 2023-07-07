import Card from '@mui/material/Card';
import { Box } from '@mui/material/';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../../../index.css';

function AddOutfit({ handleClick, currentProduct }) {
  return (
    <Card
      className="outfit-card"
      sx={{
        cursor: 'pointer',
        width: 300,
        m: 2,
        mr: '70px',
        ml: '40px',
        flexBasis: 'auto',
        flexShrink: 0,
      }}
    >
      <Box
        onClick={() => {
          handleClick(currentProduct);
        }}
        className="add-outfit"
        height="100%"
        width="100%"
        position="relative"
        margin="auto"
      >
        <AddCircleOutlineIcon className="add-icon"></AddCircleOutlineIcon>
        <div className="add-text">Add to Outfit</div>
      </Box>
    </Card>
  );
}
export default AddOutfit;
