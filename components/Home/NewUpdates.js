import { Grid } from "@mui/material";
import NovelCard from "components/common/NovelCard";
import CategoryLayout from "components/Layout/CategoryLayout";
import * as React from "react";

export default function NewUpdates({ novels }) {
  return (
    <>
      <CategoryLayout title="Truyện Mới Cập Nhật">
        <Grid container spacing={3}>
          {novels.slice(0, 16).map((novel) => (
            <Grid key={novel.id} item xs={12} md={6} lg={4}>
              <NovelCard novel={novel} displayStatus />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
