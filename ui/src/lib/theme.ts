import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material'
import {
  PaletteColorOptions,
  CommonColors
} from '@mui/material/styles/createPalette'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Shadows } from '@mui/material/styles/shadows'
import '@fontsource/inter'

export const PRIMARY_MAIN = '#0162c4'

const primary: PaletteColorOptions = {
  main: '#0162c4',
  light: '#016ad4',
  dark: '#0158b0',
  contrastText: '#ffffff'
}

const secondary: PaletteColorOptions = {
  main: '#54708c',
  light: '#d4dbe0',
  dark: '#00274d',
  contrastText: '#ffffff'
}

const common: CommonColors = {
  black: '#000000',
  white: '#ffffff'
}

const grey = {
  50: '#fbfbfc', // grey-99
  100: '#f5f6f7', // grey-97
  200: '#eaedf0', // grey-94
  300: '#d4dbe0', // grey-88
  400: '#bdc4c9',
  500: '#9ea5aa',
  600: '#54708c', // grey-55
  700: '#435a70', // grey-44
  800: '#324354', // grey-33
  900: '#171f26', // grey-15
  A100: '#f5f6f7',
  A200: '#eaedf0',
  A400: '#bdc4c9',
  A700: '#435a70'
}

const hpPaletteOptions: PaletteOptions = {
  primary,
  secondary,
  error: {
    main: '#cc0801',
    light: '#da0901',
    dark: '#bf0801',
    contrastText: '#ffffff'
  },
  warning: {
    main: '#d67d00',
    light: '#ee8b00',
    dark: '#be6f00',
    contrastText: '#00274d'
  },
  success: {
    main: '#009a48',
    light: '#00ab50',
    dark: '#008940',
    contrastText: '#ffffff'
  },
  grey,
  text: {
    primary: '#00274d',
    secondary: '#54708c',
    disabled: '#00274d99'
  },
  common,
  divider: grey[200],
  background: {
    paper: '#ffffff',
    default: '#00274d'
  }
}

// elevation levels from the Figma design system, mapped to MUI elevation levels 1, 8 and 16 respectively
const elevation1 = '0px 0px 6px rgba(0, 0, 0, 0.05)'
const elevation8 =
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.12)'
const elevation16 =
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 8px 24px rgba(0, 0, 0, 0.16)'

const shadows: Shadows = [
  // 0-4
  'none',
  elevation1, // 1 is the paper's default elevation
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 4px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.12)',
  // 5-9
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 7px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 3px 8px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.12)',
  elevation8, // 8 is the popover's default elevation
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 14px rgba(0, 0, 0, 0.12)',
  // 10-14
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 17px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 6px 18px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.12)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 7px 21px rgba(0, 0, 0, 0.12)',
  // 15-19
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 7px 23px rgba(0, 0, 0, 0.12)',
  elevation16, // 16 is the drawer's default elevation
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 9px 27px rgba(0, 0, 0, 0.16)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 10px 30px rgba(0, 0, 0, 0.16)',
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 11px 33px rgba(0, 0, 0, 0.16)',
  // 20-24
  '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 12px 36px rgba(0, 0, 0, 0.16)',
  '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 13px 39px rgba(0, 0, 0, 0.16)',
  '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 14px 42px rgba(0, 0, 0, 0.16)',
  '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 15px 45px rgba(0, 0, 0, 0.16)',
  '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 16px 48px rgba(0, 0, 0, 0.16)'
]

const hpAdditionalThemeColors = {
  backgroundGradient:
    'radial-gradient(70.49% 70.49% at 50% 10.41%, #18699f 0%, #0f4b73 100%)',
  primaryBackgroundColor: '#0162c40a',
  contentSelected: 'rgba(1, 106, 212, 0.08)',
  contentHover: 'rgba(1, 106, 212, 0.04)',
  contentSelectedHover: 'rgba(1, 106, 212, 0.12)',
  // success colour with 0.15 opacity
  successBackgroundColor: '#d5efe2',
  errorBackgroundColor: '#cc08010a',
  disabledBackgroundColor: '#00274d0a',
  mediumInputBorder: 'rgba(255, 255, 255, 0.4)',
  mediumButtonBorder: 'rgba(255, 255, 255, 0.15)',
  mediumButtonBackground: 'rgba(255, 255, 255, 0.05)',
  mediumButtonBackgroundHover: 'rgba(255, 255, 255, 0.03)',
  mediumButtonBackgroundDown: 'rgba(255, 255, 255, 0.05)'
}

export const customThemeConstants = () => ({
  palette: { ...hpAdditionalThemeColors },
  labelOpacity: 0.6,
  labelOpacityHover: 0.8,
  defaultGridSpacing: { xs: 2, md: 3 }
})

const typography: TypographyOptions = {
  fontFamily: ['"Inter"', 'sans-serif'].join(','),
  h1: {
    // page title
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '34px'
  },
  h2: {
    // section title
    fontSize: '22px',
    fontWeight: 600,
    lineHeight: '24px'
  },
  h3: {
    // card title
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '24px'
  },
  h4: {
    // card section
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px'
  },
  h5: {
    // card section
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22px'
  },
  h6: {
    // card section
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '22px'
  },
  subtitle1: {
    // in the Figma design docs referred to as Value
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22px'
  },
  subtitle2: {
    // in the Figma design docs referred to as Label Highlight
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px'
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22px'
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px'
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px'
  },
  button: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '22px',
    textTransform: 'none'
  }
}

export const hpThemeOptions: ThemeOptions = {
  palette: hpPaletteOptions,
  shadows,
  shape: {
    borderRadius: 8
  },
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          min-height: 100vh;
          height: 100%;
          background: ${hpAdditionalThemeColors.backgroundGradient};
        }
        @font-face {
          font-family: 'Inter';
          font-style: oblique 0deg 10deg;
          font-weight: 100 900;
          font-display: swap;
        }
      }`
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          backgroundColor: theme.palette.grey[100],
          border: `1px solid ${theme.palette.grey[300]}`,
          '&:hover': {
            backgroundColor: theme.palette.grey[100]
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.primary.main}`,
            '& .MuiSelect-select:focus': {
              background: 'none'
            }
          },
          '& .MuiOutlinedInput-notchedOutline': {
            display: 'none'
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[300],
            '&:hover': {
              backgroundColor: theme.palette.grey[300]
            }
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          '&.Mui-disabled': {
            background: 'none',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            },
            '& .MuiSvgIcon-root': {
              opacity: 0
            }
          }
        }),
        input: ({ theme }) => ({
          '&.Mui-disabled': {
            color: theme.palette.text.primary,
            ...theme.typography.h4,
            WebkitTextFillColor: 'unset'
          }
        })
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          '.MuiFilledInput-root': {
            paddingTop: theme.spacing(2.125)
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          '&.Mui-focused': {
            color: theme.palette.text.secondary
          }
        })
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-disabled .MuiSvgIcon-root ': {
            color: theme.palette.text.disabled
          }
        })
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined'
      },
      styleOverrides: {
        root: {
          padding: '10px 16px'
        },
        outlinedSecondary: ({ theme }) => ({
          color: theme.palette.secondary.dark
        })
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          color: theme.palette.text.primary,
          '&.Mui-selected.MuiToggleButton-primary': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main
          }
        })
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: ({ theme }) => ({
          backgroundColor: 'transparent',
          margin: 4,
          border: 0,
          '&:not(.Mui-selected)': {
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.common.white
            }
          },
          '&.Mui-disabled': {
            border: 0
          },
          '&:not(:first-of-type)': {
            borderRadius: 8
          },
          '&:first-of-type': {
            borderRadius: 8
          }
        })
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small'
      }
    },
    MuiTable: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottomColor: theme.palette.grey[200]
        }),
        sizeSmall: {
          paddingTop: 8,
          paddingBottom: 8
        },
        head: ({ theme }) => ({
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '16px',
          color: theme.palette.grey[600],
          backgroundColor: theme.palette.grey[100],
          border: 0,
          '&:nth-of-type(1)': {
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4
          },
          '&:nth-last-of-type(1)': {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4
          }
        })
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3)
        })
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          paddingBottom: theme.spacing(2),
          overflow: 'visible'
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3),
          paddingTop: theme.spacing(2),
          '&>:not(:first-of-type)': {
            marginLeft: theme.spacing(1.5)
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        caption: ({ theme }) => ({
          color: theme.palette.text.secondary
        })
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0
          },
          '&:before': {
            display: 'none'
          },
          '&.Mui-expanded': {
            backgroundColor: theme.palette.grey[50]
          },
          '&:hover .MuiAccordionSummary-root': {
            backgroundColor: theme.palette.grey[100]
          }
        }),
        gutters: {
          '&.Mui-expanded': {
            margin: 0
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          flexDirection: 'row-reverse',
          minHeight: 56,
          padding: theme.spacing(0, 3),
          '&.Mui-expanded': {
            minHeight: 56
          }
        }),
        content: {
          position: 'relative',
          width: '-webkit-fill-available',
          display: 'block'
        },
        expandIconWrapper: ({ theme }) => ({
          marginRight: theme.spacing(3),
          '& svg': {
            transform: 'rotate(-90deg)'
          },
          '&.Mui-expanded': {
            '& svg': {
              transform: 'rotate(180deg)'
            }
          }
        })
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: 'block',
          padding: theme.spacing(3),
          backgroundColor: theme.palette.grey[50],
          '& > *:not(:last-of-type)': {
            paddingBottom: theme.spacing(2),
            borderBottom: `1px solid ${theme.palette.grey[200]} !important`
          },
          '& > *:not(:first-of-type)': {
            paddingTop: theme.spacing(2)
          },
          '&:hover': {
            backgroundColor: theme.palette.grey[100]
          }
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'bottom'
      },
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.secondary,
          ...typography.body1,
          boxShadow: theme.shadows[8],
          padding: theme.spacing(2)
        }),
        arrow: ({ theme }) => ({ color: theme.palette.background.paper })
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 60,
          padding: theme.spacing(1) // 8px
        }),
        switchBase: {
          padding: '10px',
          '&.Mui-checked': {
            transform: 'translateX(22px)',
            '& + .MuiSwitch-track': {
              opacity: 1
            }
          }
        },
        thumb: ({ theme }) => ({
          color: theme.palette.common.white,
          width: 18,
          height: 18
        }),
        track: {
          borderRadius: '11px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: () => ({
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        })
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'absolute',
          bottom: `-${theme.spacing(2)}`
        })
      }
    }
  }
}

export const hpTheme = createTheme(hpThemeOptions)

// Dark theme
const hpDarkThemeOptions: ThemeOptions = {
  ...hpThemeOptions,
  palette: {
    ...hpThemeOptions.palette,
    mode: 'dark',
    primary: hpTheme.palette.info,
    info: hpTheme.palette.primary,
    secondary: {
      main: '#f5f6f7',
      light: '#fbfbfc',
      dark: '#f5f6f7',
      contrastText: hpTheme.palette.info.main
    },
    text: {
      primary: '#fbfbfc',
      secondary: '#f5f6f7',
      disabled: '#54708c'
    },
    background: {
      paper: '#00274d',
      default: '#ffffff'
    }
  }
}
export const theme = createTheme(hpDarkThemeOptions)
