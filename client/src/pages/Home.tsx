import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className=" min-h-screen h-full w-screen bg-[#121212]">
      <div className="h-full flex flex-col max-h-5xl mx-auto w-full gap-10  bg-[#171717] py-20 items-center px-6 sm:px-10">
        <Outlet />
      </div>
    </div>
  );
}
