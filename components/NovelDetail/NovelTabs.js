import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function NovelTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="2xl">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value={1} label="Giới thiệu" />
        <Tab value={2} label="Danh Sách Chương" />
        <Tab value={3} label="Bình Luận" />
        <Tab value={4} label="Đề Cử" />
        <Tab value={5} label="Royal Ticket" />
      </Tabs>
    </Container>
  );
}
