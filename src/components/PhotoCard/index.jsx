import { Box } from '@mui/material';

const PhotoCard = ({ border, borderColor, borderRadius, marginRight }) => {
  return (
    <>
      <Box
        sx={{
          width: '500px',
          height: '500px',
          overflow: 'hidden',
          border: border,
          borderColor: borderColor,
          borderRadius: borderRadius,
          marginRight: marginRight,
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.04)',
            borderColor: '#162E93',
          },
        }}
      >
        <img
          src='/FotoPrincipal.jpeg'
          alt='Foto Principal da página inicial'
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </Box>
    </>
  );
};

export default PhotoCard;
