import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  z-index: 10;
  top: 325px;
  left: 10px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
`;

const Name = styled.div`
  font-size: 20px;
`;

export const FeatureInfoDisplay = ({ name }: { name: string }) => {
  return (
    <Container>
      <Name>{name ? name : "No specified name"}</Name>
    </Container>
  );
};
