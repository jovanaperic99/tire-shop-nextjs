import React, { useState } from 'react';
import {
  Box,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import theme from '../../core/color/color.theme';
import Logo from '../../../public/priority-tire-logo.png';
import { TextInputField, IconButton } from '../custom';

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '10px' : '10px 20px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary, 
        gap: isMobile ? '10px' : '0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {isMobile && (
          <IconButton icon={<MenuIcon/>} onClick={toggleSearch} />
        )}
        <Box
          component="img"
          src={Logo.src} 
          alt="Priority Tire Logo"
          sx={{ height: isMobile ? 30 : 40 }}
        />
      </Box>

      {(isSearchVisible || !isMobile) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: isMobile ? '100%' : 'auto',
            gap: '10px',
          }}
        >
          {isMobile && (
            <IconButton icon={<SearchIcon />} onClick={toggleSearch} />
          )}
          <TextInputField
            placeholder="Search Tires & Accessories"
            isFullWidth={true}
            backgroundColor={theme.palette.background.default}
            borderColor={theme.palette.action.active}
            hoveredBorderColor={theme.palette.grey[100]}
            focusedBorderColor={theme.palette.action.active}
            onChange={() => {}}
            inputProps={{
              input: {
                startAdornment: !isMobile && (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '10px' : '20px',
        }}
      >
        <IconButton icon={<AccountCircleIcon />}/>
        <IconButton icon={<FavoriteBorderIcon />}/>
        <IconButton icon={<ShoppingCartIcon />}/>
      </Box>
    </Box>
  );
}