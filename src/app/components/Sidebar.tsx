import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from 'react';


export default function Sidebar({onValueChange}) {

    const [itemValue, setItemValue] = useState(0);

    const handleValue = (value: number) => {
        setItemValue(value);
        onValueChange(value)
    };

    const itemsValues = [
        {
            value: 0, 
            name: "Présentation"
        },
        {
            value: 1, 
            name: "Expérience"
        },
        {
            value: 2, 
            name: "Etudes"
        },
        {
            value: 3, 
            name: "Travaux"
        }
      ];

    return (
        <>
            <div className="border border-white">
                <h2>Sidebar</h2>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleValue(itemsValues[0].value)}>
                                <ListItemText primary={itemsValues[0].name} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleValue(itemsValues[1].value)}>
                                <ListItemText primary={itemsValues[1].name} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleValue(itemsValues[2].value)}>
                                <ListItemText primary={itemsValues[2].name} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleValue(itemsValues[3].value)}>
                                <ListItemText primary={itemsValues[3].name} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </>
  );
}