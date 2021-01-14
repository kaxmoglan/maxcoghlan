import React from "react";
import { useParams } from "react-router-dom";

export const BlogPost: React.FC = () => {
  let { id }: any = useParams();

  return (
    <>
      <h1>THIS IS A BLOG POST</h1>
      <p>THE ID IS {id}</p>
    </>
  );
};
