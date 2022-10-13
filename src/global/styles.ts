import { makeStyles } from '@material-ui/core';

import { theme } from './breakPoints';

export const useBtnStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0',
    minWidth: 'fit-content',
    transition: 'all 1s',

    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent'
    }
  },
  edit: {
    color: 'rgba(255,206,28,.7)'
  },
  del: {
    color: 'rgba(235,94,63,.7)'
  }
}));

export const useCardFormStyles = makeStyles(() => ({
  card: {
    padding: '20px',
    width: '50%',

    [theme.breakpoints.down('upperDesktop')]: {
      padding: '30px',
      width: '80%'
    },

    [theme.breakpoints.down('tablet')]: {
      padding: '30px',
      width: '100%'
    }
  }
}));

export const useAlertStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '0',
    zIndex: 1110,
    left: '50%',
    padding: '20px',
    width: '70% !important',
    transform: ' translateX(-50%)',

    [theme.breakpoints.down('tablet')]: {
      width: '90% !important'
    },

    [theme.breakpoints.down('upperMobile')]: {
      width: '100% !important'
    }
  },
  alert: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',

    [theme.breakpoints.down('upperTablet')]: {
      width: '90%'
    },

    [theme.breakpoints.down('tablet')]: {
      width: '100%'
    }
  },
  btn: {
    color: 'rgb(95, 33, 32)',
    borderColor: 'rgb(95, 33, 32)',
    transition: 'all 1s'
  }
}));

export const useContainerStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    padding: '20px 10px',
    width: '80%',
    maxWidth: '1400px',

    [theme.breakpoints.down('upperTablet')]: {
      width: '90%'
    }
  }
}));

export const useMainContainerStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      rowGap: '20px !important'
    }
  },
  subHeadingSection: {
    color: 'rgba(210,134,147, .9)',
    textAlign: 'center'
  },
  heading: {
    '&.MuiTypography-h4': {
      fontWeight: 700,

      [theme.breakpoints.down('tablet')]: {
        fontSize: '28px'
      }
    }
  }
}));

export const useNavBarStyles = makeStyles(() => ({
  nav: {
    width: '35%',
    minWidth: 'fit-content',
    marginLeft: 'auto'
  },
  linksList: {
    [theme.breakpoints.down('mobile')]: {
      flexDirection: 'column'
    }
  }
}));

export const useNoteCardStyles = makeStyles(() => ({
  root: {
    '& .MuiTypography-h5': {
      color: 'rgba(210,134,147, .9)',
      textTransform: 'capitalize',
      fontSize: '28px',
      fontWeight: 700
    }
  },

  noteCard: {
    padding: '10px',
    height: '100%'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    width: '100%',
    justifyContent: 'center'
  }
}));

export const useListStyles = makeStyles(() => ({
  list: {
    [theme.breakpoints.down('upperDesktop')]: {
      justifyContent: 'space-between !important',
      rowGap: '10px !important'
    }
  },
  listItem: {
    alignSelf: 'stretch',
    width: '33%',
    transition: 'all 1s',

    [theme.breakpoints.down('upperDesktop')]: {
      width: '49%'
    },

    [theme.breakpoints.down('upperMobile')]: {
      width: '100%'
    }
  }
}));

export const useTagStyles = makeStyles(() => ({
  tag: {
    position: 'relative',
    borderRadius: '5px',
    '&:hover button': { display: 'block' },
    cursor: 'pointer',

    [theme.breakpoints.down('tablet')]: {
      padding: '5px !important'
    }
  },
  btn: {
    position: 'absolute',
    top: '3px',
    right: '3px',
    display: 'none',
    marginLeft: 'auto',
    padding: '0',
    height: 'fit-content',
    minHeight: 'fit-content',
    width: 'fit-content',
    minWidth: 'fit-content',
    lineHeight: 1,
    transition: 'all 1s'
  },
  closeIcon: {
    '&&': {
      height: '10px',
      width: '10px',
      color: 'red',
      transition: 'all 1s',
      '&:hover': {
        transform: 'rotate(180deg)'
      }
    }
  }
}));

export const useFooterStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#1976d2'
  },
  flex: {
    [theme.breakpoints.down('upperMobile')]: {
      flexDirection: 'column',
      rowGap: '20px !important'
    }
  },
  link: {
    '&.MuiLink-underlineHover': {
      color: 'white',
      fontSize: '18px',
      transition: 'all 1s',
      '&:hover': {
        color: '#FFD67F',
        textDecoration: 'none'
      }
    }
  }
}));

export const useBurgerMenuStyles = makeStyles(() => ({
  root: {
    top: '90px !important',

    '& .MuiPaper-root': {
      top: '90px !important',
      padding: '30px',
      backgroundColor: '#1976d2'
    }
  }
}));

export const useHeaderStyles = makeStyles(() => ({
  appBar: {
    position: 'static',
    backgroundColor: '#1976d2'
  },
  imgLink: {
    position: 'relative',
    marginRight: 'auto',
    height: '50px !important',
    width: '50px !important',
    border: 'none !important',
    backgroundImage: `url(${window.location.origin + '/user-notes-icon.png'})`,
    '&:hover': { transform: 'scale(1.1)' },

    [theme.breakpoints.down('mobile')]: {
      marginLeft: 'auto !important'
    }
  },
  burgerBtn: {
    [theme.breakpoints.up('mobile')]: {
      display: 'none'
    },
    [theme.breakpoints.down('mobile')]: {
      display: 'block',
      position: 'absolute',
      zIndex: 1500
    }
  },
  navLinks: {
    [theme.breakpoints.down('mobile')]: {
      display: 'none'
    }
  }
}));

export const useBtnToolBarStyles = makeStyles(() => ({
  root: {
    color: 'rgba(210,134,147, .9)',
    textTransform: 'capitalize',
    fontSize: '16px',
    transition: 'all 1s',

    '&.MuiButton-root:hover': {
      backgroundColor: 'transparent'
    },

    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
}));

export const useFlexToolBarStyles = makeStyles(() => ({
  flexStyles: {
    [theme.breakpoints.down('upperDesktop')]: {
      columnGap: '1px !important'
    },
    [theme.breakpoints.down('tablet')]: {
      rowGap: '10px !important'
    }
  }
}));

export const useHeadingStyles = makeStyles(() => ({
  heading: {
    width: '100%',
    color: 'rgba(210,134,147, .9)',
    fontWeight: 700,
    textAlign: 'center'
  }
}));

export const useErrorPageStyles = makeStyles(() => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 700
  },
  icon: {
    marginLeft: '10px',
    height: '30px !important',
    width: '30px !important'
  },
  smileIcon: {
    height: '20px !important',
    width: '20px !important',
    color: '#FFD67F'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 1s',
    margin: '50px 0',
    color: 'rgba(210,134,147, .9)',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 700,
    '&:hover': {
      color: '#FFD67F'
    }
  }
}));

export const useUserNotePageStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    marginTop: '30px',
    width: '50%',
    minWidth: '320px',

    [theme.breakpoints.down('upperDesktop')]: {
      padding: '30px',
      width: '80%'
    },

    [theme.breakpoints.down('tablet')]: {
      padding: '30px',
      width: '100%'
    }
  }
}));

export const useToolBarStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      order: 3,
      width: '45% !important'
    }
  },
  text: {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  list: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    marginTop: '10px',
    minWidth: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: 'rgba(25, 118, 210, .7)'
  },
  link: {
    height: '100%',
    width: '100%',
    color: 'white',
    transition: 'all 1s',
    '&:hover': {
      color: '#FFD67F'
    }
  },
  inputField: {
    [theme.breakpoints.down('upperTablet')]: {
      width: '100% !important'
    }
  },
  searchBtn: {
    [theme.breakpoints.down('upperTablet')]: {
      margin: '0 auto !important'
    }
  }
}));

export const useSortFlexStyles = makeStyles(() => ({
  flexStyle: {
    [theme.breakpoints.down('tablet')]: {
      order: 2,
      width: '45% !important'
    }
  }
}));
