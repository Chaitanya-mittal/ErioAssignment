import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiTrash, HiPencil } from "react-icons/hi";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useDeleteUser from "../hooks/useDeleteUser";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import Loader from "./Loader";
export default function MenuBox({ id }: { id: string }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { deleteUserFunc, isDeleting } = useDeleteUser();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (action: string) => {
    if (action === "delete") {
      deleteUserFunc(id);
    } else {
      navigate(`/edit/${id}`);
    }
    setAnchorEl(null);
  };
  if (isDeleting) {
    return <Loader />;
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "white",
          backgroundColor: "#171717",
          "&:hover": {
            backgroundColor: "#121212",
          },
        }}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#171717",
            color: "white",
          },
        }}
      >
        <button onClick={() => setAnchorEl(null)} className="p-2">
          <RxCross1 />
        </button>
        <MenuItem
          onClick={() => handleClose("delete")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            "&:hover": {
              backgroundColor: "#121212",
              color: "blue",
            },
          }}
        >
          <HiTrash />
          <span>Delete</span>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("edit")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            "&:hover": {
              backgroundColor: "#121212",
              color: "blue",
            },
          }}
        >
          <HiPencil />
          <span>Edit</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
