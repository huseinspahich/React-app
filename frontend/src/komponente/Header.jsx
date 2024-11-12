import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useTheme } from './ThemeContext'; 

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Note Keeper</h1>

       <div> <Button onClick={toggleTheme} variant="contained" style={{ marginRight: '20px' }}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>

      <Button onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <LogoutIcon />
      </Button></div>
     

      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Odjavi se</Typography>
      </Popover>
    </header>
  );
}

export default Header;
