import React from 'react';
import Head from 'next/head';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core';
import useStyles from '../utils/styles';

function Layout({children}) {
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>Next Ecommerce</title>
        </Head>
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <Typography>Amazona</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>
                All Rights Reserved. Akash Tripathi
            </Typography>
        </footer>
    </div>
  )
}

export default Layout