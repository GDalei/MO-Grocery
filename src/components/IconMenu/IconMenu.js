import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { ProductList } from '../../services/Constant';
export default function IconMenu() {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
                {
                    ProductList.map((value) => {
                        return <>
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>{value.catagory}</ListItemText>
                            </MenuItem>
                            <Divider />

                        </>
                    })
                }

            </MenuList>
        </Paper>
    );
}
