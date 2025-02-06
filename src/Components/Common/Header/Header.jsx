import React, { useState } from "react";
import { LoginButton, Logo, Navbar, NavigationBar } from "./HeaderStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { color1, color2 } from "../../../GlobalConfig/GlobalConfig";
import { NavLink } from "react-router-dom";
import { Button, InputLabel, Menu, MenuItem, Select } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE, setAnchorE] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseEnter2 = (event) => {
   setAnchorE(event.currentTarget);
 };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave2 = () => {
   setAnchorE(null);
 };
  return (
    <>
      <Navbar>
        <Logo>
          <img src="/Images/Sih_logo.png" alt="SIH Logo" />
        </Logo>
        <LoginButton>
          {" "}
          <span>SIH Grand Final Login</span>{" "}
          <AccountCircleIcon style={{ fontSize: "1.5rem", color: color1 }} />
        </LoginButton>
      </Navbar>
      <NavigationBar>
        <NavLink
          to="/"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          Home
        </NavLink>
        <NavLink
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
           <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <Button
              aria-controls={Boolean(anchorE) ? "guidelines-menu" : undefined}
              aria-haspopup="true"
              sx={{ textTransform: "none", color: color2 }}
            >
              About SIH ▼
            </Button>
            <Menu
              id="guidelines-menu"
              anchorEl={anchorE}
              open={Boolean(anchorE)}
              onClose={handleMouseLeave2}
              MenuListProps={{ onMouseLeave2: handleMouseLeave2 }}
            >
              <MenuItem onClick={handleMouseLeave2}>
                SIH Process Flow
              </MenuItem>
              <MenuItem onClick={handleMouseLeave2}>SIH Theme</MenuItem>
              <MenuItem onClick={handleMouseLeave2}>
                Implementation Idea
              </MenuItem>
            </Menu>
          </div>
        </NavLink>
        <NavLink
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button
              aria-controls={Boolean(anchorEl) ? "guidelines-menu" : undefined}
              aria-haspopup="true"
              sx={{ textTransform: "none", color: color2 }}
            >
              GUIDELINES ▼
            </Button>
            <Menu
              id="guidelines-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMouseLeave}
              MenuListProps={{ onMouseLeave: handleMouseLeave }}
            >
              <MenuItem onClick={handleMouseLeave}>
                For Institutes/Universities
              </MenuItem>
              <MenuItem onClick={handleMouseLeave}>Idea PPT</MenuItem>
              <MenuItem onClick={handleMouseLeave}>
                Internal Hackathon Process
              </MenuItem>
            </Menu>
          </div>
        </NavLink>
        <NavLink
          to="/ProblemStatement"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          Problem Statements
        </NavLink>
        <NavLink
          to="/KnowYourSPOC"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          Know Your SPOC
        </NavLink>
        <NavLink
          to="/ProjectImplementaion"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          Project Implementation
        </NavLink>
        <NavLink
          to="/Faqs"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          FAQS
        </NavLink>
        <NavLink
          to="/Contact"
          style={{ color: color2, textDecoration: "none", marginRight: "20px" }}
        >
          Contact Us
        </NavLink>
      </NavigationBar>
    </>
  );
};

export default Header;
