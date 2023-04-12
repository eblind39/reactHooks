import React, {useContext} from 'react'
import {
    MenuList,
    Paper,
    ListItemIcon,
    MenuItem,
    Typography,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import StorageIcon from '@mui/icons-material/Storage';
import BoltIcon from '@mui/icons-material/Bolt';
import AdjustIcon from '@mui/icons-material/Adjust';

import CategoryIcon from '@mui/icons-material/Category'
import SourceIcon from '@mui/icons-material/Source'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import GroupIcon from '@mui/icons-material/Group'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import LoginIcon from '@mui/icons-material/Login'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import BadgeIcon from '@mui/icons-material/Badge'
import PhishingIcon from '@mui/icons-material/Phishing'
import {Link} from 'react-router-dom'

const NavBar: React.FC = (): JSX.Element => {
    return (
        <Paper
            sx={{
                width: 230,
                opacity: '80%',
                marginTop: '60px',
                position: 'sticky',
                top: '0',
            }}
        >
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/">
                        <Typography variant="inherit">Home</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <StorageIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/usestate">
                        <Typography variant="inherit">useState</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <BoltIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/useeffect">
                        <Typography variant="inherit">useEffect</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AdjustIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/usecallback">
                        <Typography variant="inherit">useCallback</Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default NavBar
