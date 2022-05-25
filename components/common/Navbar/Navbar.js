import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="sticky"
        color="background"
        elevation={0}
        variant="outlined"
        sx={{ top: 0 }}
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
            <NavDesktop />
            <NavMobile />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
