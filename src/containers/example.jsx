import React, { useEffect, useState } from "react";
import { getHeroses } from "actions/heros";
import { useAppDispatchContext } from "app-context.jsx";
import HeroList from "components/example/hero-list.jsx";
import "styles/hero-page.scss";

const Example = () => {
  const appDispatch = useAppDispatchContext();

  useEffect(() => {
    getHeroses(appDispatch);
  }, []);

  return (
    <div className="example-page page">
      <h1>Hero page</h1>
      <HeroList />
    </div>
  );
};

export default Example;
