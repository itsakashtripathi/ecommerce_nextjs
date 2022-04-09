import React from 'react';
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container} from '@mui/material';

function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Next Ecommerce</title>
        </Head>
        <AppBar position="static">
            <Toolbar>
                <Typography>Amazona</Typography>
            </Toolbar>
        </AppBar>
        <Container>
            {children}
        </Container>
        <footer>
            <Typography>
                All Rights Reserved. Akash Tripathi
            </Typography>
        </footer>
    </div>
  )
}

export default Layout