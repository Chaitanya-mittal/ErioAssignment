import Skeleton from "@mui/material/Skeleton";

export default function TableSkeleton() {
  return (
    <div className="w-full max-w-3xl  mx-auto flex flex-col gap-2">
      <Skeleton sx={{ backgroundColor: "#393939" }} />
      <Skeleton sx={{ backgroundColor: "#393939" }} animation="wave" />
      <Skeleton sx={{ backgroundColor: "#393939" }} animation={false} />
    </div>
  );
}
