import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { defaultTheme, website } from "../";

function Copyright() {
  return (
    <Typography variant="body2" color={defaultTheme.footer.textColor}>
      {"Copyright © "}
      <Link color="inherit" href={ website }>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "72vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 1,
          mt: "auto",
          backgroundColor: defaultTheme.footer.background,
          color: defaultTheme.footer.textColor,
          textAlign: defaultTheme.footer.align,
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
}
