import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Link,
  makeStyles,
  Container,
  Box,
  Card,
  CardContent,
  Paper,
  CssBaseline
} from '@material-ui/core';

import WebChat from '../WebChat/WebChat';
import krakenLogo from '../../images/kraken.png';

function MadeWithLove() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by Team Kraken'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  card: {
    height: '500px'
  },
  cardContent: {
    height: '100%',
    paddingBottom: '15px'
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant='button'
            color='textPrimary'
            href='#'
            className={classes.link}
          >
            <img
              style={{ maxHeight: '30px', marginTop: '8px' }}
              src={krakenLogo}
              alt='background'
            />
          </Link>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            Team Kraken
          </Typography>
          <nav>
            <Link
              variant='button'
              color='textPrimary'
              to='/iphone'
              component={RouterLink}
              className={classes.link}
            >
              Mobile Chat
            </Link>
            <Link
              variant='button'
              color='textPrimary'
              to='/web'
              component={RouterLink}
              className={classes.link}
            >
              Web Chat
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth='sm' component='main' className={classes.heroContent}>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Ask C.R.A.I.G.
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          component='p'
        >
          A loosely coupled Chatbot built on Azure serving Costco retail needs.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={6}>
            <Typography paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Placerat orci nulla pellentesque dignissim enim sit. Semper
              feugiat nibh sed pulvinar. Neque sodales ut etiam sit amet. Magnis
              dis parturient montes nascetur ridiculus. Platea dictumst
              vestibulum rhoncus est. Ultrices vitae auctor eu augue ut lectus
              arcu bibendum. Et sollicitudin ac orci phasellus egestas tellus
              rutrum tellus. Condimentum id venenatis a condimentum vitae sapien
              pellentesque habitant. Fames ac turpis egestas maecenas pharetra
              convallis posuere. Nisl condimentum id venenatis a condimentum
              vitae sapien pellentesque habitant.
            </Typography>
            <Typography paragraph={true}>
              Amet volutpat consequat mauris nunc congue nisi vitae suscipit
              tellus. Sociis natoque penatibus et magnis dis parturient. Donec
              ac odio tempor orci dapibus ultrices in iaculis. Accumsan tortor
              posuere ac ut consequat semper. Metus aliquam eleifend mi in nulla
              posuere sollicitudin. Tempor nec feugiat nisl pretium fusce. Vel
              quam elementum pulvinar etiam non. Leo urna molestie at elementum
              eu.
            </Typography>
          </Grid>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <WebChat />
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          {/* End sidebar */}
          {/* Architecture */}
          <Grid item xs={12}>
            <Typography variant='h6'>Under the Hood</Typography>
          </Grid>
          {/* End Architecture */}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth='md' component='footer' className={classes.footer}>
        <Box>
          <MadeWithLove />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
