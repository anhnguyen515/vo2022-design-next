import { AppBar, Container, Toolbar } from "@mui/material";
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
        <Container maxWidth="2xl">
          <Toolbar sx={{ gap: 1 }}>
            <Link href="/">
              <a>
                <Image
                  src="/origin-logo-black.svg"
                  alt="Vietnovel logo"
                  width={100}
                  height={50}
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
