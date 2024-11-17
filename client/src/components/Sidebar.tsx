import { IoIosContacts } from "react-icons/io";
import { Link, Typography } from "@mui/material";

export default function Sidebar({
  toggleDrawer,
}: {
  toggleDrawer: () => void;
}) {
  return (
    <div className="h-full w-[16rem]  bg-[#121212] text-white flex flex-col">
      <button onClick={toggleDrawer}>Close</button>
      <div className="flex flex-col mt-4 p-4 gap-3">
        <div className="flex justify-center">
          <Typography variant="h1" className="text-center">
            <IoIosContacts />
          </Typography>
        </div>
        <Link href="contacts" align="center" underline="none">
          <Typography variant="h5" gutterBottom>
            Contacts
          </Typography>
        </Link>
      </div>
    </div>
  );
}
