import { Typography } from "@mui/material";
import React from "react";

export default function EmptyTable() {
  return (
    <div className="max-w-5xl w-full border-stone-50/10 rounded-lg border p-4 text-white">
      <Typography variant="subtitle1" align="center">
        Add Contacts to see them here !
      </Typography>
    </div>
  );
}
