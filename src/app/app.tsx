import { Button, ButtonProps } from '@mui-testing/ui'
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button as MuiButton,
  AppBar,
  MenuList,
  MenuItem,
  Link
} from '@mui/material'

const testingGrid: Pick<ButtonProps, 'color' | 'size' | 'icon' | 'dropdown'>[] =
  [
    { color: 'primary', size: 'large' },
    { color: 'primary', size: 'medium' },
    { color: 'primary', size: 'small' },
    { color: 'secondary', size: 'large' },
    { color: 'secondary', size: 'medium' },
    { color: 'secondary', size: 'small' },
    { color: 'success', size: 'large' },
    { color: 'success', size: 'medium' },
    { color: 'success', size: 'small' },
    { color: 'error', size: 'large' },
    { color: 'error', size: 'medium' },
    { color: 'error', size: 'small' },
    { color: 'primary', size: 'large', icon: true },
    { color: 'primary', size: 'large', icon: true },
    { color: 'primary', size: 'small', icon: true },
    { color: 'secondary', size: 'large', icon: true },
    { color: 'secondary', size: 'medium', icon: true },
    { color: 'secondary', size: 'small', icon: true },
    { color: 'success', size: 'large', icon: true },
    { color: 'success', size: 'medium', icon: true },
    { color: 'success', size: 'small', icon: true },
    { color: 'error', size: 'large', icon: true },
    { color: 'error', size: 'medium', icon: true },
    { color: 'error', size: 'small', icon: true },
    { color: 'primary', size: 'large', dropdown: true },
    { color: 'primary', size: 'large', dropdown: true },
    { color: 'primary', size: 'small', dropdown: true },
    { color: 'secondary', size: 'large', dropdown: true },
    { color: 'secondary', size: 'medium', dropdown: true },
    { color: 'secondary', size: 'small', dropdown: true },
    { color: 'success', size: 'large', dropdown: true },
    { color: 'success', size: 'medium', dropdown: true },
    { color: 'success', size: 'small', dropdown: true },
    { color: 'error', size: 'large', dropdown: true },
    { color: 'error', size: 'medium', dropdown: true },
    { color: 'error', size: 'small', dropdown: true },
    { color: 'primary', size: 'large', dropdown: true, icon: true },
    { color: 'primary', size: 'large', dropdown: true, icon: true },
    { color: 'primary', size: 'small', dropdown: true, icon: true },
    { color: 'secondary', size: 'large', dropdown: true, icon: true },
    { color: 'secondary', size: 'medium', dropdown: true, icon: true },
    { color: 'secondary', size: 'small', dropdown: true, icon: true },
    { color: 'success', size: 'large', dropdown: true, icon: true },
    { color: 'success', size: 'medium', dropdown: true, icon: true },
    { color: 'success', size: 'small', dropdown: true, icon: true },
    { color: 'error', size: 'large', dropdown: true, icon: true },
    { color: 'error', size: 'medium', dropdown: true, icon: true },
    { color: 'error', size: 'small', dropdown: true, icon: true }
  ]

type NavItemProps = {
  children: string | React.ReactNode
}

function NavItem({ children, ...props }: NavItemProps) {
  return (
    <MenuItem
      LinkComponent={Link}
      href="/"
      sx={{
        '&:hover': {
          textDecoration: '#0158b0 underline',
          textUnderlineOffset: 4
        }
      }}
    >
      <Typography
        color="primary"
        variant="body1"
        component="a"
        gutterBottom
        sx={{
          '&:hover': {
            color: 'theme.palette.primary.dark'
          }
        }}
      >
        {children}
      </Typography>
    </MenuItem>
  )
}

export function App() {
  return (
    <div>
      <nav>
        <AppBar position="sticky" sx={{ bgcolor: 'white' }}>
          <MenuList
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 2,
              justifyContent: 'space-evenly'
            }}
          >
            {['Home', 'About', 'Services', 'Contact', 'Tests'].map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}
          </MenuList>
        </AppBar>
      </nav>
      <Box sx={{ px: 4, py: 4 }}>
        <Paper elevation={3} sx={{ bgcolor: 'white', px: 4, py: 3 }}>
          <Typography
            color={(theme) => theme.palette.primary.dark}
            variant="h2"
            component="h2"
            gutterBottom
          >
            Buttons
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            component="div"
          >
            {testingGrid.map(({ size, color, icon, dropdown }, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                component="div"
                key={`${size}-${color}-${index}`}
              >
                <Button
                  size={size}
                  color={color}
                  icon={icon}
                  dropdown={dropdown}
                  children={`${color} ${size}`}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}

export default App
