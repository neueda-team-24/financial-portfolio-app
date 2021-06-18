import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NavBarMenu from './NavBarMenu';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import logo from '../pokemonLogo.png';

const styles = theme => ({
  // for navBar
  navBarDefault: {
    background: '#1B1D25',
    color: '#FCFCFC'
  },

  navBarSpecial: {
    background: '#FCFCFC',
    color: '#1B1D25'
  },

  // for buttons
  button: {
    width: '85%',
    marginTop: '4px',
    marginLeft: '20px'
  },

  hoverEffectDefault: {
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        backgroundColor: '#333333'
      }
    }
  },

  hoverEffectSpecial: {
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        backgroundColor: '#DDDDDD'
      }
    }
  },

  logoStyle: {
    paddingLeft: '30px',
    marginBottom: '3px',
    marginTop: '3px'
  },

  // for links
  buttonLinkDefault: {
    color: '#FCFCFC',
    textDecoration: 'none'
  },

  buttonLinkSpecial: {
    color: '#1B1D25',
    textDecoration: 'none'
  }
});

class NavBar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar
        className={this.props.isHome ? `${classes.navBarDefault}` : `${classes.navBarSpecial}`}
        elevation={0}
        position='sticky'
      >
        <Toolbar>
          <Grid container justify='space-around' alignItems='center'>
            <Grid container alignItems='center' xs='10' sm='3'>
              <Grid item xs={4} justify='flex-end'>
                <img
                  src={logo}
                  alt='logo'
                  height='60px'
                  width='90px'
                  className={classes.logoStyle}
                />
              </Grid>
              <Grid
                container
                xs={8}
                justify='flex-start'
                alignContent='flex-start'
                style={{ margin: 0, padding: 0 }}
              >
                <Typography variant='h5'>Pokémon Card Trading</Typography>
              </Grid>
            </Grid>

            <Grid container justify='flex-end' direction='row' xs='2' sm='9'>
              <Hidden smDown>
                <Link
                  className={
                    this.props.isHome
                      ? `${classes.buttonLinkDefault}`
                      : `${classes.buttonLinkSpecial}`
                  }
                  href='https://www.ebay.com.sg/b/Pokemon-TCG/2536/bn_7117595258'
                >
                  <Button
                    className={
                      this.props.isHome
                        ? `${classes.hoverEffectDefault} ${classes.button}`
                        : `${classes.hoverEffectSpecial} ${classes.button}`
                    }
                    color='inherit'
                  >
                    <Typography variant='body1'>Marketplace</Typography>
                  </Button>
                </Link>

                <Link
                  className={
                    this.props.isHome
                      ? `${classes.buttonLinkDefault}`
                      : `${classes.buttonLinkSpecial}`
                  }
                  href='https://pokemontcg.guru/'
                >
                  <Button
                    className={
                      this.props.isHome
                        ? `${classes.hoverEffectDefault} ${classes.button}`
                        : `${classes.hoverEffectSpecial} ${classes.button}`
                    }
                    color='inherit'
                  >
                    <Typography variant='body1'>Explore</Typography>
                  </Button>
                </Link>

                <Link
                  className={
                    this.props.isHome
                      ? `${classes.buttonLinkDefault}`
                      : `${classes.buttonLinkSpecial}`
                  }
                  onClick={this.props.scrollToContact}
                >
                  <Button
                    className={
                      this.props.isHome
                        ? `${classes.hoverEffectDefault} ${classes.button}`
                        : `${classes.hoverEffectSpecial} ${classes.button}`
                    }
                    color='inherit'
                  >
                    <Typography variant='body1'>Logout</Typography>
                  </Button>
                </Link>
              </Hidden>

              <Hidden mdUp>
                <Box align='right'>
                  <NavBarMenu isHome={this.props.isHome} />
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
