import * as React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  z-index: 10;
  top: 10px;
  left: 10px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
`;

const Heading = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  position: relative;
  width: 85px;
  height: 25px;
  font-size: 16px;
  text-align: center;
  border: none;
  transition: 0.3s;
  :hover {
    box-shadow: 0 4px 2px -2px #1b8cc4;
  }
`;
const Box = styled.div`
  height: 50px;
  width: 100px;
  margin: 5px;
  border: 1px solid black;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.div`
  margin: 20px 0px;
  background: #1b8cc4;
  border-radius: 5px;
  padding: 10px;
  color: white;
  transition: 0.3s;
  cursor: default;
  :hover {
    background: #0c4561;
  }
`;

export const BBoxForm = ({
  submit,
}: {
  submit: (bboxCoords: number[]) => void;
}) => {
  const [minLon, setMinLng] = React.useState<number>(-0.14379);
  const [minLat, setMinLat] = React.useState<number>(51.50008);
  const [maxLon, setMaxLng] = React.useState<number>(-0.14235);
  const [maxLat, setMaxLat] = React.useState<number>(51.50152);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit([minLon, minLat, maxLon, maxLat]);
      }}
    >
      <Heading>enter Boundary Box manually</Heading>
      <Input
        type="text"
        value={maxLat}
        onChange={(e) => {
          setMaxLat(parseFloat(e.target.value));
        }}
      />
      <Middle>
        <Input
          type="text"
          value={minLon}
          onChange={(e) => setMinLng(parseFloat(e.target.value))}
        />
        <Box />
        <Input
          type="text"
          value={maxLon}
          onChange={(e) => setMaxLng(parseFloat(e.target.value))}
        />
      </Middle>
      <Input
        type="text"
        value={minLat}
        onChange={(e) => setMinLat(parseFloat(e.target.value))}
      />
      <Button>Search</Button>
      <Heading>...or just click the map!</Heading>
    </Form>
  );
};
