import React from "react";
import styled from "styled-components";

const MyButton = ({ text, type, onClick }) => {
  return (
    <button className={"MyButton"} onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
};

const button = styled.button`
  background-color: white;
  border: 1px solid white;
`;

export default MyButton;
