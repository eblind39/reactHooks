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
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import AllOutIcon from '@mui/icons-material/AllOut';
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
                <MenuItem>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/usememo">
                        <Typography variant="inherit">useMemo</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ReduceCapacityIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/usereducer">
                        <Typography variant="inherit">useReducer</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <BorderClearIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/usecontext">
                        <Typography variant="inherit">useContext</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AllOutIcon fontSize="small" />
                    </ListItemIcon>
                    <Link to="/useref">
                        <Typography variant="inherit">useRef</Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default NavBar
