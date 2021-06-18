import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import HamburgerIcon from "@material-ui/icons/Dehaze";
import MenuItem from "@material-ui/core/MenuItem";
import WorkIcon from "@material-ui/icons/Work";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import SubjectIcon from '@material-ui/icons/Subject';

const useStyles = makeStyles((theme) => ({
  menuIconStyle: {
    padding: "8px",
  },

  buttonIconColorDefault: {
    color: "#DCDCDC",
  },

  buttonIconColorSpecial: {
    color: "#1B1D25",
  },

  hoverEffectDefault: {
    [theme.breakpoints.down("lg")]: {
      "&:hover": {
        backgroundColor: "#333333",
      },
    },
  },

  hoverEffectSpecial: {
    [theme.breakpoints.down("lg")]: {
      "&:hover": {
        backgroundColor: "#DDDDDD",
      },
    },
  },

  linkStyle: {
    color: "#000000DE",
    textDecoration: "none",
  },

  menuItemsIconStyle: {
    paddingRight: "10px",
    paddingLeft: "0",
    fontSize: "16px",
  },
}));

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        className={
          props.isHome
            ? `${classes.hoverEffectDefault} ${classes.menuIconStyle}`
            : `${classes.hoverEffectSpecial} ${classes.menuIconStyle}`
        }
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {Boolean(anchorEl) ? (
          <CancelIcon
            className={
              props.isHome
                ? `${classes.buttonIconColorDefault}`
                : `${classes.buttonIconColorSpecial}`
            }
          />
        ) : (
          <HamburgerIcon
            className={
              props.isHome
                ? `${classes.buttonIconColorDefault}`
                : `${classes.buttonIconColorSpecial}`
            }
          />
        )}
      </IconButton>
      <Menu
        elevation="2"
        id="menu-appbar"
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          className={classes.linkStyle}
          href="https://www.ebay.com.sg/b/Pokemon-TCG/2536/bn_7117595258"
        >
          <MenuItem onClick={handleClose}>
            <WorkIcon className={classes.menuItemsIconStyle} />
            Marketplace
          </MenuItem>
        </Link>

        <Link className={classes.linkStyle} href="https://pokemontcg.guru/">
          <MenuItem onClick={handleClose}>
            <CodeIcon className={classes.menuItemsIconStyle} />
            Explore
          </MenuItem>
        </Link>

        <Link onClick={props.scrollToContact} className={classes.linkStyle}>
          <MenuItem onClick={handleClose}>
            <ContactMailIcon className={classes.menuItemsIconStyle} />
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </Fragment>
  );
}
