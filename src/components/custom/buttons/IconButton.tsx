import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import theme from '../../../core/color/color.theme';

interface CustomIconButtonProps extends IconButtonProps {
  icon: React.ReactNode;
  backgroundColor?: string;
  hoverColor?: string;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  icon,
  backgroundColor = theme.palette.primary.main,
  hoverColor = theme.palette.primary.dark,
  ...props
}) => {
  return (
    <IconButton
      sx={{
        backgroundColor: backgroundColor,
        '&:hover': {
          backgroundColor: hoverColor,
        },
        padding: '10px',
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;