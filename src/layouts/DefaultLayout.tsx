import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
