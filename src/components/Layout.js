import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://cdn.pixabay.com/photo/2017/09/14/22/42/milky-way-2750627__340.jpg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  return (
    <CustomBox>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
