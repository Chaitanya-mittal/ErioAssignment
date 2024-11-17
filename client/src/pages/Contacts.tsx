import { Typography } from "@mui/material";
import BasicTable from "../components/ContactTable";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { IoIosContacts } from "react-icons/io";
import SortBy from "../components/SortBy";
export default function Contacts() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <Typography variant="h1" className="text-white">
          <IoIosContacts />
        </Typography>
        <Typography variant="h4" color="white">
          Contacts
        </Typography>
      </div>
      <div className="flex w-full justify-between items-center">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2563eb " }}
          onClick={() => navigate("/create")}
        >
          Create{" "}
        </Button>
        <div>
          <SortBy />
        </div>
      </div>
      <BasicTable />
    </>
  );
}
