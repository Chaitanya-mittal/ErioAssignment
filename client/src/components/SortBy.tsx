import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Menu,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function SortBy() {
  const [searchParam, setSearchParam] = useSearchParams();
  const currSortby = searchParam.get("sortby") || "First_ASC"; // Default to First Name (A-Z)

  const handleChange = (event: SelectChangeEvent<string | null>) => {
    searchParam.set("sortby", event.target.value as string);
    setSearchParam(searchParam);
  };

  return (
    <FormControl
      fullWidth
      sx={{
        bgcolor: "#121212", // Dark background
        borderRadius: "8px",
        padding: "8px",
      }}
    >
      <InputLabel
        id="sortby-label"
        sx={{
          color: "#FFFFFF", // White text
        }}
      >
        Sort By
      </InputLabel>
      <Select
        labelId="sortby-label"
        id="sortby-select"
        value={currSortby}
        label="Sort By"
        onChange={handleChange}
        sx={{
          color: "#FFFFFF", // White text
          bgcolor: "#121212", // Dark dropdown background
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1E90FF", // Blue outline
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1E90FF", // Blue on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1E90FF", // Blue when focused
          },
          "& .MuiSvgIcon-root": {
            color: "#1E90FF", // Blue dropdown icon
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#121212", // Dark background for dropdown
              color: "#FFFFFF", // White text in dropdown
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Optional: Adding shadow to dropdown
            },
          },
        }}
      >
        <MenuItem value={"First_ASC"}>
          <ListItemText primary="First Name (A-Z)" />
        </MenuItem>
        <MenuItem value={"First_DESC"}>
          <ListItemText primary="First Name (Z-A)" />
        </MenuItem>
        <MenuItem value={"Last_ASC"}>
          <ListItemText primary="Last Name (A-Z)" />
        </MenuItem>
        <MenuItem value={"Last_DESC"}>
          <ListItemText primary="Last Name (Z-A)" />
        </MenuItem>
        <MenuItem value={"Company_ASC"}>
          <ListItemText primary="Company Name (A-Z)" />
        </MenuItem>
        <MenuItem value={"Company_DESC"}>
          <ListItemText primary="Company Name (Z-A)" />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
