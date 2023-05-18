import React from "react";

const Container = (props: any) => {
  return (
    <div
      className={`container m-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
};

export default Container;
