import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton
} from '@mui/material'

/* eslint-disable-next-line */
export interface ButtonProps extends MuiButtonProps {
  children: string | any
  size: 'large' | 'medium' | 'small'
  icon?: boolean
  dropdown?: boolean
  className?: string
}

export function Button({
  type,
  children,
  size,
  icon,
  dropdown,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <MuiButton
      startIcon={icon ? <ArrowForwardIcon /> : null}
      endIcon={dropdown ? <KeyboardArrowDownIcon /> : null}
      variant="contained"
      size={size}
      className={className}
      {...otherProps}
    >
      {children}
    </MuiButton>
  )
}

export default Button
