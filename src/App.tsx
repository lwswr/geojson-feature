import React from "react";
import { getBBGeoJson } from "./API";
import { Map, Point } from "pigeon-maps";
import { BBoxForm } from "./BBoxForm";
import { LineContainer } from "./LineContainer";
import { FeatureInfoDisplay } from "./FeatureInfoDisplay";

const TILE_KEY = "tLsFLpESk6ikup9Az8ia";

const mapTilerProvider = (
  x: number,
  y: number,
  z: number,
  dpr: any
): string => {
  return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${TILE_KEY}`;
};

// offsets value for minimum Lat and Lng of Bound Box
const createMinBoundary = (value: number) => {
  return value - 0.05 / 69;
};

// offsets value for minimum Lat and Lng of Bound Box
const createMaxBoundary = (value: number) => {
  return value + 0.05 / 69;
};

// creates a bbox approximately 160 metre diameter
export const createBBoxFromClickedCoords = (coords: Point) => {
  return [
    createMinBoundary(coords[1]),
    createMinBoundary(coords[0]),
    createMaxBoundary(coords[1]),
    createMaxBoundary(coords[0]),
  ];
};

function App() {
  const defaultCentre: Point = [51.50061, -0.14752];
  const defaultZoom = 16.5;
  const [bboxCoords, setBBoxCoords] = React.useState<number[]>([
    -0.14379,
    51.50008,
    -0.14235,
    51.50152,
  ]);

  const [data, updateData] = React.useState<any | undefined>();
  const [activeFeature, setActiveFeature] = React.useState<
    string | undefined
  >();

  React.useEffect(() => {
    async function getDataSet(bboxCoords: number[]) {
      try {
        const bbGeoJson = await getBBGeoJson(bboxCoords);
        updateData(bbGeoJson);
      } catch (error) {
        console.log(error);
      }
    }
    getDataSet(bboxCoords);
  }, [bboxCoords]);

  const selectedFeature = data?.features.find(
    (feature: any) => feature.id === activeFeature
  );

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <BBoxForm submit={(bboxCoords) => setBBoxCoords(bboxCoords)} />
      {activeFeature && selectedFeature ? (
        <FeatureInfoDisplay name={selectedFeature.properties.name} />
      ) : null}

      <Map
        defaultCenter={defaultCentre}
        defaultZoom={defaultZoom}
        provider={mapTilerProvider}
        onClick={({ latLng }) => {
          setBBoxCoords(createBBoxFromClickedCoords(latLng));
          console.log(bboxCoords, data.features);
        }}
      >
        {data ? (
          <LineContainer
            features={data.features}
            activeFeature={activeFeature}
            featureClicked={setActiveFeature}
          />
        ) : null}
      </Map>
    </div>
  );
}

export default App;
