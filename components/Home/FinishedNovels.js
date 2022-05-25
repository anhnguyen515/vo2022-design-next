import { Grid } from "@mui/material";
import WorkCard from "components/common/WorkCard";
import CategoryLayout from "components/Layout/CategoryLayout";
import React from "react";

export default function FinishedNovels({ novels }) {
  return (
    <>
      <CategoryLayout title="Truyện Hoàn Thành">
        <Grid container spacing={3}>
          {novels.slice(0, 6).map((novel) => (
            <Grid key={novel.id} item xs={12} lg={6}>
              <WorkCard novel={novel} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
