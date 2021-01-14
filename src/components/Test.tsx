import React from "react";
import { useParams } from "react-router-dom";

export const Test: React.FC = () => {
  let { id }: any = useParams();

  return (
    <>
      <h1>THIS IS THE TEST</h1>
      <p>THE ID IS {id}</p>
    </>
  );
};
