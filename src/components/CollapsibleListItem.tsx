import { useState } from 'react';
import { Collapse, ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface CollapsibleListItemProps {
  icon: React.ReactNode;
  primaryText: string;
  nestedItems: {
    icon: React.ReactNode;
    primaryText: string;
    href: string;
  }[];
}

export default function CollapsibleListItem({
  icon,
  primaryText,
  nestedItems,
}: CollapsibleListItemProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primaryText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems.map((nestedItem) => (
            <ListItemButton sx={{ pl: 7 }} onClick={() => (window.location.href = nestedItem.href)}>
              <ListItemIcon>{nestedItem.icon}</ListItemIcon>
              <ListItemText primary={nestedItem.primaryText} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}