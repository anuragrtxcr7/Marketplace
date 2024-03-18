import { Outlet } from "react-router-dom";
import NAVBAR from "./NAVBAR";

function Homepage() {
  return (
    <>
      <main className="dark text-foreground bg-background h-full">
        <NAVBAR />
        <br />
        <Outlet />
      </main>
    </>
  );
}

export default Homepage;
