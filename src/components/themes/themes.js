import { createTheme } from "@mui/material/styles";

const website = "https://mui.com/";

const colors = {
  ashGrey: "#cbd4c2",
  darkSpringGreen: "#04724D",
  ghostWhite: "#F4F4F9",
  rufous: "#A40606",
};

const defaultTheme = createTheme({
  // Header
  header: {
    background: colors.darkSpringGreen,
    textColor: colors.ghostWhite,
    borderColor: colors.rufous,
  },
  // Navbar
  nav: {
    textColor: colors.rufous,
    background: colors.ashGrey,
  },
  // Body
  body: {
    background: colors.ashGrey,
    display: "flex",
    direction: "column",
    justifyContent: "space-between",
    // Screen Left
    screenLeft: {
      display: "flex",
      justifyContent: "center",
      width: "15%",
    },
    // Screen Center
    screenCenter: {
      width: "70%",
    },
    // Screen Right
    screenRight: {
      display: "flex",
      justifyContent: "center",
      width: "15%",
    },
  },
  // Footer
  footer: {
    background: colors.darkSpringGreen,
    textColor: colors.ghostWhite,
    align: "center",
  },
});

export { defaultTheme, website };
