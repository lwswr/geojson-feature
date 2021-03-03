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
  border: 1px solid #1b8cc4;
  border-radius: 5px;
  transition: 0.3s;
  :hover {
    box-shadow: #1b8cc4 0px 3px 8px;
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

const Button = styled.button`
  margin: 20px 0px;
  background: #1b8cc4;
  border-radius: 5px;
  border: none;
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
  const [minLng, setMinLng] = React.useState<string>("");
  const [minLat, setMinLat] = React.useState<string>("");
  const [maxLng, setMaxLng] = React.useState<string>("");
  const [maxLat, setMaxLat] = React.useState<string>("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit([
          parseFloat(minLng!),
          parseFloat(minLat!),
          parseFloat(maxLng!),
          parseFloat(maxLat!),
        ]);
      }}
    >
      <Heading id="top-text">enter Boundary Box manually</Heading>
      <Input
        data-testid="max-lat"
        placeholder="Max Lat"
        name="max-lat"
        type="text"
        value={maxLat}
        onChange={(e) => {
          setMaxLat(e.target.value);
        }}
      />
      <Middle>
        <Input
          data-testid="min-lng"
          placeholder="Min Lng"
          name="min-lng"
          type="text"
          value={minLng}
          onChange={(e) => setMinLng(e.target.value)}
        />
        <Box />
        <Input
          data-testid="max-lng"
          placeholder="Max Lng"
          name="max-lng"
          type="text"
          value={maxLng}
          onChange={(e) => setMaxLng(e.target.value)}
        />
      </Middle>
      <Input
        data-testid="min-lat"
        placeholder="Min Lat"
        type="text"
        value={minLat}
        onChange={(e) => setMinLat(e.target.value)}
      />
      <Button data-testid="bbox-submit" type="submit">
        Search
      </Button>
      <Heading id="bottom-text">...or just click the map!</Heading>
    </Form>
  );
};
