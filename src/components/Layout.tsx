import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

function Root(props: BoxProps) {

  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
          },
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props: BoxProps) {
  return (
    <Box
      component="header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.body",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav({
  showNav,
  onClose,
  ...props
}: {
  showNav: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
} & BoxProps) {
  return (
    <Box
      component="nav"
      {...props}
      sx={{
        p: 2,
        bgcolor: "#1a1b4b",
        borderRight: "1px solid",
        borderColor: "divider",
        height: "100vh",
        overflow: "auto",
        position: { xs: "fixed", sm: "static" },
        zIndex: { xs: 1200 },
        transform: `translateX(${showNav ? "0" : "-100%"})`,
        transition: "transform 0.3s ease-in-out",
        display: { xs: "none", sm: "initial" },
      }}
    >
      {showNav && (
        <Box
          role="button"
          onClick={onClose}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
          }}
        />
      )}
      <Box
        sx={{
          position: {
            xs: "relative",
            sm: "static",
          },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      {...props}
      sx={[
        {
          p: 2,
          width: "100vw",
          backgroundImage: `url(${'/darkBG.jpg'})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "auto",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

// function SideDrawer({
//   onClose,
//   ...props
// }: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }) {
//   return (
//     <Box
//       {...props}
//       sx={[
//         { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
//         ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//       ]}
//     >
//       <Box
//         role="button"
//         onClick={onClose}
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           bgcolor: (theme) =>
//             `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
//         }}
//       />
//       <Sheet
//         sx={{
//           minWidth: 256,
//           width: 'max-content',
//           height: '100%',
//           p: 2,
//           boxShadow: 'lg',
//           bgcolor: 'background.surface',
//         }}
//       >
//         {props.children}
//       </Sheet>
//     </Box>
//   );
// }

export default {
  Root,
  Header,
  SideNav,
  Main,
};
