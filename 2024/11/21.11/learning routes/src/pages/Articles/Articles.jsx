import { Outlet } from "react-router-dom";
const Articles = () => {
  return (
    <>
      <h1>This is the articles page</h1>
      <Outlet />
    </>
  );
};

export default Articles;
