import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import CssBaseline from "@mui/material/CssBaseline";
import { useUsers } from "../hooks/useUsers";
import TableSkeleton from "./TableSkeleton";
import MenuBox from "./MenuBox";
import { useSearchParams } from "react-router-dom";
import EmptyTable from "./EmptyTable";

const PAGE_SIZE = 10;
export default function BasicTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { users, count, loadingUsers } = useUsers();
  const currPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const currSortBy = searchParams.get("sortby") || "First_ASC";
  const sortField = currSortBy.split("_")[0];
  const sortDirection = currSortBy.split("_")[1];

  const sortedUsers = users.sort((a: any, b: any) => {
    const fieldA = a[sortField]?.toString().toLowerCase();
    const fieldB = b[sortField]?.toString().toLowerCase();

    if (sortDirection === "ASC") {
      return fieldA.localeCompare(fieldB);
    } else {
      return fieldB.localeCompare(fieldA);
    }
  });

  console.log(sortedUsers);
  function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  }

  if (loadingUsers) return <TableSkeleton />;
  if (users.length === 0) {
    return <EmptyTable />;
  }

  return (
    <>
      <CssBaseline />{" "}
      {/* Ensures Material-UI and Tailwind styles are reset properly */}
      <TableContainer component={Paper}>
        <Table className="min-w-full shadow-lg border border-white/60 shadow-black">
          {/* Table Head */}
          <TableHead className="bg-blue-600">
            <TableRow>
              {["First", "Last", "Email", "Phone", "Company", "Job Title"].map(
                (header) => (
                  <TableCell
                    align="left"
                    sx={{ borderBottom: "none" }}
                    key={header}
                  >
                    <Typography
                      variant="subtitle1"
                      className="text-white font-bold"
                    >
                      {header}
                    </Typography>
                  </TableCell>
                )
              )}
              <TableCell align="left" sx={{ borderBottom: "none" }}></TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody className="bg-[#121212]">
            {sortedUsers.map((row: any) => (
              <TableRow key={row.name}>
                {["First", "Last", "Email", "Phone", "Company", "JobTitle"].map(
                  (field) => (
                    <TableCell
                      align="left"
                      sx={{ borderBottom: "none" }}
                      key={field}
                    >
                      <p className="text-white">{row[field]}</p>
                    </TableCell>
                  )
                )}
                <TableCell align="left" sx={{ borderBottom: "none" }}>
                  <MenuBox id={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {count > PAGE_SIZE && (
          <div className="w-full bg-[#121212] flex justify-center py-4">
            <Pagination
              count={count / PAGE_SIZE} // Adjust based on total pages
              page={currPage}
              onChange={handleChangePage}
              shape="rounded"
              variant="outlined"
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: "bold",
                  color: "white", // Sets pagination text to white
                },
              }}
            />
          </div>
        )}
      </TableContainer>
    </>
  );
}
