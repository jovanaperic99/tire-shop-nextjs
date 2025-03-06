import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface TextInputProps{
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  isFullWidth?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  hoveredBorderColor?: string;
  focusedBorderColor?: string;
  inputProps?: TextFieldProps['slotProps'];
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  isFullWidth,
  backgroundColor,
  borderColor,
  hoveredBorderColor,
  focusedBorderColor,
  inputProps,
  ...props
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={isFullWidth}
      variant="outlined"
      slotProps={{ input: inputProps?.input }}
      sx={{
        backgroundColor: {backgroundColor}, 
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: {borderColor}, 
          },
          '&:hover fieldset': {
            borderColor: {hoveredBorderColor}, 
          },
          '&.Mui-focused fieldset': {
            borderColor: {focusedBorderColor}, 
          },
        },
      }}
      {...props}
    />
  );
};

export default TextInput;