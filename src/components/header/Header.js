import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

function Header(props) {
  const { sections, title } = props;

  // TODO: Make attributes of the header configurable
  return (
    <React.Fragment>
      {/* Header */}
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#6b7fd7",
        }}
      >
        {/* Subscribe Button */}
        <Button size="small" href="#" sx={{color: "red"}} >
          Subscribe
        </Button>
        {/* Title */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, color: "red" }}
        >
          {title}
        </Typography>
        {/* Search Button */}
        <IconButton>
          <SearchIcon sx={{color: "red"}} />
        </IconButton>
        {/* Sign up Button */}
        <Button variant="outlined" size="small" href="/SignUp" sx={{color: "red"}} >
          Sign up
        </Button>
      </Toolbar>
      {/* Navigation */}
      {/* TODO: Make attributes of the navigation configurable */}
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              underline="none"
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0, color: "red" }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
