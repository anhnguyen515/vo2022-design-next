import { Grid } from "@mui/material";
import WorkCard from "components/common/WorkCard";
import CategoryLayout from "components/Layout/CategoryLayout";
import React from "react";

export default function FinishedWorks({ works }) {
  return (
    <>
      <CategoryLayout title="Truyện Hoàn Thành">
        <Grid container spacing={3}>
          {works.slice(0, 6).map((work) => (
            <Grid key={work.id} item xs={12} lg={6}>
              <WorkCard work={work} />
            </Grid>
          ))}
        </Grid>
      </CategoryLayout>
    </>
  );
}
