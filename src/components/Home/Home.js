import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Container,
  Box,
  Card,
  CardContent,
  Paper,
  CssBaseline
} from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NavigationIcon from '@material-ui/icons/Navigation';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LanguageIcon from '@material-ui/icons/Language';

import WebChat from '../WebChat/WebChat';
import krakenLogo from '../../assets/images/kraken.png';
import chatbotAnatomy from '../../assets/images/chatbot-anatomy.png';

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
  tagline: {
    fontStyle: 'italic'
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
        >
          Ask C.R.A.I.G.
        </Typography>
        <Typography
          align='center'
          color='textSecondary'
          className={classes.tagline}
          gutterBottom
        >
          Conversation Retail Artificial Intelligence Generator
        </Typography>
        <Typography variant='h5' align='center' component='p'>
          A loosely coupled Chatbot built on Azure serving Costco retail needs.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={6}>
            <Typography variant='h4' component='h2'>
              What can a chatbot do for Costco?
            </Typography>
            <Typography paragraph={true}>
              A chatbot can provide a helpful new way to access information.
              Internal facing chatbots can{' '}
              <strong>increase productivity</strong>,{' '}
              <strong>reduce frustration </strong>
              and most importantly <strong>inject delight</strong>. External
              facing chatbots have <strong>driven sales</strong>,&nbsp;
              <strong>reduced errors </strong> and drastically{' '}
              <strong>reduced customer service calls</strong>. This type of
              artificial intelligence has endless applications yet to be
              discovered.
            </Typography>
            <List
              component='nav'
              subheader={
                <ListSubheader
                  disableSticky={true}
                  component='div'
                  id='nested-list-subheader'
                >
                  Available Services
                </ListSubheader>
              }
              aria-label='service demos'
            >
              <ListItem button>
                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary='Find Menu' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NavigationIcon />
                </ListItemIcon>
                <ListItemText primary='Navigation' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <RemoveShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Return Item' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary='Warehouse Hours' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary='Translate' />
              </ListItem>
            </List>
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
            <div>
              <img
                style={{ width: '100%' }}
                src={chatbotAnatomy}
                alt='background'
              />
            </div>
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
