import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '😢',
  1: '🙁',
  1.5: '😑',
  2: '😐',
  2.5: '👍',
  3: '✌',
  3.5: '👌',
  4: '💙',
  4.5: '💖',
  5: '😍',
};

export default function Ratings({value, setValue}) {
  const [hover, setHover] = React.useState(-1);
  React.useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}