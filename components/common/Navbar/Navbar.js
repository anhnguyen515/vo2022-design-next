import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import SearchIcon from "@mui/icons-material/Search";
import NavMenuDropdown from "./NavMenuDropdown";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="static"
        color="background"
        elevation={0}
        variant="outlined"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ gap: 1 }}>
            <Link href="/">
              <a>
                <Image
                  src="/origin-logo-black.svg"
                  alt="Vietnovel logo"
                  width={120}
                  height={60}
                  layout="fixed"
                />
              </a>
            </Link>
            <NavLink />
            <SearchIcon sx={{ ml: 2, mr: 1 }} />
            <Button color="primary" variant="contained">
              Đăng nhập
            </Button>
            <NavMenuDropdown>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </NavMenuDropdown>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
