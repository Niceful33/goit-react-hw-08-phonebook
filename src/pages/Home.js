import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 42vh;
  left: 35vw;

  @media screen and (max-width: 600px) {
    left: 15vw;
  }
`;

export default function Home() {
  return (
    <CustomBox>
      <Typography
        color="#CF6A24  "
        component="h1"
        variant="h3"
        sx={{ mt: '50px', fontWeight: '700', textTransform: 'uppercase' }}
      >
        phonebook
      </Typography>
    </CustomBox>
  );
}
