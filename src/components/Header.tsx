import * as React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Typography,
  List,
  ListItem,
  ListDivider,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import GitHub from "@mui/icons-material/GitHub";
import Home from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ContactPage from "@mui/icons-material/ContactPage";
import DarkModeRounded from "@mui/icons-material/DarkModeRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import { useRouter } from "next/router";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import NavigateNext from "@mui/icons-material/NavigateNext";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? <DarkModeRounded sx={{
        color: "primary.600"
      }}/> : <LightModeRounded sx={{
        color: "warning.100"
      }}/>}
    </IconButton>
  );
}

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          ml: 1,
        }}
      >
        <List
          role="menubar"
          orientation="horizontal"
          component="nav"
          sx={{
            display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
            },
            "--List-radius": "8px",
            "--List-padding": "2px",
            "--List-gap": "3px",
          }}
        >
          <ListItem>
            <ListItemButton
              ref={setAnchorEl}
              variant="outlined"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                px: 1,
                py: 0,
              }}
            >
              <MenuIcon />
            </ListItemButton>
          </ListItem>
          <PopperUnstyled
            id="OS-popper"
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            style={{
              zIndex: 1600,
            }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MenuList
              sx={{
                mt: 0,
                ml: 3.5,
                boxShadow: "md",
                borderRadius: "sm",
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--List-divider-gap": "4px",
                bgcolor: "neutral.plainHoverBg",
              }}
            >
              <MenuItem>Home</MenuItem>
              <MenuItem
              onClick={() => {
                router.push("https://blog.sarahgerrard.me")
              }}
              >Blog</MenuItem>
              <ListItem>
                <ListItemButton
                  ref={(e) => setAnchorEl1(e)}
                  aria-describedby="project-popper"
                  role="menuitem"
                  sx={{
                    paddingRight: 0,
                    display: "flex",
                  }}
                  onMouseOver={() => {
                    setOpen1(true);
                  }}
                  onMouseLeave={() => {
                    setOpen1(false);
                  }}
                >
                  Open Source
                  <ListItemDecorator>
                    <NavigateNext
                      sx={{
                        width: "100%",
                        alignSelf: "flex-end",
                        right: 0,
                      }}
                    />
                  </ListItemDecorator>
                </ListItemButton>
              </ListItem>
              <PopperUnstyled
                id="OS-popper"
                open={open1}
                anchorEl={anchorEl1}
                placement="right-start"
                style={{
                  zIndex: 1600
                }}
                onMouseOver={() => {
                  setOpen1(true);
                }}
                onMouseLeave={() => {
                  setOpen1(false);
                }}
              >
                <MenuList
                  onMouseOver={() => {
                    setOpen1(true);
                  }}
                  onMouseLeave={() => {
                    setOpen1(false);
                  }}
                  sx={{
                    boxShadow: "md",
                    borderRadius: "sm",
                    "--List-radius": "8px",
                    "--List-padding": "4px",
                    "--List-divider-gap": "4px",
                  }}
                >
                  <MenuItem onClick={() => {
                    router.push("/open-source/accessible-for-all")
                  }}
                  >Accessible for All</MenuItem>
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={() =>{
                      router.push("/open-source/global-chem")
                    }}
                  >
                    Global Chem
                  </MenuItem>
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={()=>{
                      router.push("/open-source/material-ui")
                    }}
                  >
                    Material UI
                  </MenuItem>
                </MenuList>
              </PopperUnstyled>
              <ListItem>
                <ListItemButton
                  ref={(e) => setAnchorEl2(e)}
                  aria-describedby="project-popper"
                  role="menuitem"
                  sx={{
                    display: "flex",
                    paddingRight: 0,
                  }}
                  onMouseOver={() => {
                    setOpen2(true);
                  }}
                  onMouseLeave={() => {
                    setOpen2(false);
                  }}
                >
                  Projects
                  <ListItemDecorator>
                    <NavigateNext
                      sx={{
                        width: "100%",
                        alignSelf: "flex-end",
                        right: 0,
                        ml: 3.7
                      }}
                    />
                  </ListItemDecorator>
                </ListItemButton>
              </ListItem>
              <PopperUnstyled
                id="projects-popper"
                open={open2}
                anchorEl={anchorEl2}
                placement="right-start"
                style={{
                  zIndex: 1600,
                }}
                onMouseOver={() => {
                  setOpen2(true);
                }}
                onMouseLeave={() => {
                  setOpen2(false);
                }}
              >
                <MenuList
                  onMouseOver={() => {
                    setOpen2(true);
                  }}
                  onMouseLeave={() => {
                    setOpen2(false);
                  }}
                  sx={{
                    boxShadow: "md",
                    borderRadius: "sm",
                    "--List-radius": "8px",
                    "--List-padding": "4px",
                    "--List-divider-gap": "4px",
                  }}
                >
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={()=>{
                      router.push("/in-progress")
                    }}
                  >In Progress</MenuItem>
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={()=>{
                      router.push("/front-end")
                    }}
                  >
                    Front End
                  </MenuItem>
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={()=>{
                      router.push("/full-stack")
                    }}
                  >
                    Full Stack
                  </MenuItem>
                  <MenuItem
                    role="menuitem"
                    sx={{
                      paddingRight: 0,
                    }}
                    onClick={()=>{
                      router.push("/back-end")
                    }}
                  >
                    Back End
                  </MenuItem>
                </MenuList>
              </PopperUnstyled>
              <MenuItem onClick={() =>{
                router.push("/style-guide")
              }}>Style Guide</MenuItem>
              <MenuItem onClick={() =>{
                router.push("/template")
              }}>Template</MenuItem>
            </MenuList>
          </PopperUnstyled>
        </List>

        <List
          role="menubar"
          orientation="horizontal"
          component="nav"
          sx={{
            display: {
                xs: "none",
                sm:"none",
                md: "flex",
                lg: "flex",
            },
            "--List-radius": "8px",
            "--List-padding": "2px",
            "--List-gap": "3px",
          }}
        >
          <ListItem role="none">
            <ListItemButton role="menuitem" onClick={() => {
              router.push("/");
            }}>
              <ListItemDecorator>
                <Home />
              </ListItemDecorator>
              Home
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              onClick={() => {
                router.push("https://blog.sarahgerrard.me/");
              }}
            >
              Blog
            </ListItemButton>
          </ListItem>
          <ListItem
            role="none"
            sx={{
              paddingRight: 1,
            }}
          >
            <ListItemButton
              ref={(e) => setAnchorEl3(e)}
              aria-describedby="project-popper"
              role="menuitem"
              sx={{
                paddingRight: 0,
              }}
              onMouseOver={() => {
                setOpen3(true);
              }}
              onMouseLeave={() => {
                setOpen3(false);
              }}
            >
              Open Source
              <ListItemDecorator>
                <ExpandMore />
              </ListItemDecorator>
            </ListItemButton>
          </ListItem>
          <PopperUnstyled
            id="OS-popper"
            open={open3}
            anchorEl={anchorEl3}
            placement="bottom"
            style={{
              zIndex: 1600,
            }}
            onMouseOver={() => {
              setOpen3(true);
            }}
            onMouseLeave={() => {
              setOpen3(false);
            }}
          >
            <MenuList
              onMouseOver={() => {
                setOpen3(true);
              }}
              onMouseLeave={() => {
                setOpen3(false);
              }}
              sx={{
                my: 1,
                ml: 2,
                boxShadow: "md",
                borderRadius: "sm",
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--List-divider-gap": "4px",
              }}
            >
              <MenuItem onClick={()=>{
                router.push("/open-source/accessible-for-all");
              }}
              >Accessible for All</MenuItem>
              <MenuItem
                role="menuitem"
                sx={{
                  paddingRight: 0,
                }}
                onClick={() =>{
                  router.push("/open-source/global-chem")
                }}
              >
                Global Chem
              </MenuItem>
              <MenuItem
                role="menuitem"
                sx={{
                  paddingRight: 0,
                }}
                onClick={()=>{
                  router.push("/open-source/material-ui")
                }}
              >
                Material UI
              </MenuItem>
            </MenuList>
          </PopperUnstyled>
          <ListItem
            role="none"
            sx={{
              paddingRight: 1,
            }}
          >
            <ListItemButton
              ref={(e) => setAnchorEl4(e)}
              aria-describedby="project-popper"
              role="menuitem"
              sx={{
                paddingRight: 0,
              }}
              onMouseOver={() => {
                setOpen4(true);
              }}
              onMouseLeave={() => {
                setOpen4(false);
              }}
            >
              Projects
              <ListItemDecorator>
                <ExpandMore />
              </ListItemDecorator>
            </ListItemButton>
          </ListItem>
          <PopperUnstyled
            id="OS-popper"
            open={open4}
            anchorEl={anchorEl4}
            placement="bottom"
            style={{
              zIndex: 1600,
            }}
            onMouseOver={() => {
              setOpen4(true);
            }}
            onMouseLeave={() => {
              setOpen4(false);
            }}
          >
            <MenuList
              sx={{
                my: 1,
                ml: 2,
                boxShadow: "md",
                borderRadius: "sm",
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--List-divider-gap": "4px",
              }}
            >
              <MenuItem
                role="menuitem"
                sx={{
                  paddingRight: 1.5,
                }}
                onClick={()=>{
                  router.push("/in-progress")
                }}
              >In Progress</MenuItem>
              <MenuItem
                role="menuitem"
                sx={{
                  paddingRight: 0,
                }}
                onClick={()=>{
                  router.push("/front-end")
                }}
              >
                Front End
              </MenuItem>
              <MenuItem
                role="menuitem"
                sx={{
                  paddingRight: 0,
                }}
                onClick={()=>{
                  router.push("/full-stack")
                }}
              >
                Full Stack
              </MenuItem>
              <MenuItem
                aria-describedby="back end popper"
                role="menuitem"
                sx={{
                  paddingRight: 0,
                }}
                onClick={()=>{
                  router.push("/back-end")
                }}
              >
                Back End
              </MenuItem>
            </MenuList>
          </PopperUnstyled>
          <ListItem role="none">
            <ListItemButton role="menuitem" onClick={()=>{
                      router.push("/style-guide")
                    }}>
              Style Guide
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton role="menuitem" onClick={()=>{
                      router.push("/template")
                    }}>
              Template
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5, mr: 4,
        "@media (max-width: 600px)": {
          mr: 0,
        },
        "@media (min-width: 601px ) and (max-width: 900px)": {
          mr: 2,
        },
    }}>
        <IconButton
          variant="outlined"
          size="sm"
          onClick={() => {
            router.push("/about");
          }}
        >
          <ContactPage sx={{
            color: "neutral.outlinedHoverColor",
          }}/>
        </IconButton>
        <IconButton
          variant="outlined"
          size="sm"
          onClick={() => {
            router.push("https://github.com/ladybluenotes");
          }}
        >
          <GitHub sx={{
            color: "neutral.outlinedHoverColor",
          }}/>
        </IconButton>
        <ColorSchemeToggle />
      </Box>
    </>
  );
}
