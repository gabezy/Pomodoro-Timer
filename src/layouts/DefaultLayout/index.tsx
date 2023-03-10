import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
