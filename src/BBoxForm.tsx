import * as React from "react";

// min_lon,min_lat,max_lon,max_lat.

export const BBoxForm = ({ submit }: { submit: (array: number[]) => void }) => {
  const [minLon, setMinLon] = React.useState<number>(-0.14379);
  const [minLat, setMinLat] = React.useState<number>(51.50008);
  const [maxLon, setMaxLon] = React.useState<number>(-0.14235);
  const [maxLat, setMaxLat] = React.useState<number>(51.50152);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit([minLon, minLat, maxLon, maxLat]);
      }}
    >
      <input
        type="text"
        value={minLon}
        onChange={(e) => setMinLon(parseFloat(e.target.value))}
      />
      <input
        type="text"
        value={minLat}
        onChange={(e) => setMinLat(parseFloat(e.target.value))}
      />
      <input
        type="text"
        value={maxLon}
        onChange={(e) => setMaxLon(parseFloat(e.target.value))}
      />
      <input
        type="text"
        value={maxLat}
        onChange={(e) => setMaxLat(parseFloat(e.target.value))}
      />
      <button>Search</button>
    </form>
  );
};
