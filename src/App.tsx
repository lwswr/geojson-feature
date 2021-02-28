import React from "react";
import { getBBGeoJson } from "./API";
import { Map, Point } from "pigeon-maps";
import { BBoxForm } from "./BBoxForm";
import { FeatureCollection, GeometryObject } from "geojson";
import { LineContainer } from "./LineContainer";

const TILE_KEY: string = "tLsFLpESk6ikup9Az8ia";

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

function App() {
  const defaultCentre: Point = [51.50008, -0.14379];
  const defaultZoom = 12;
  const [bboxCoords, setBBoxCoords] = React.useState<number[]>([
    -0.14379,
    51.50008,
    -0.14235,
    51.50152,
  ]);

  const [data, updateData] = React.useState<
    FeatureCollection<GeometryObject, any> | undefined
  >();
  const [activeFeature, setActiveFeature] = React.useState<
    string | undefined
  >();

  React.useEffect(() => {
    async function getDataSet(bboxCoords: number[]) {
      try {
        const bbGeoJson = await getBBGeoJson(bboxCoords);
        updateData(bbGeoJson);
      } catch (err) {
        console.log(err);
      }
    }
    getDataSet(bboxCoords);
  }, [bboxCoords]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <BBoxForm submit={(bboxCoords) => setBBoxCoords(bboxCoords)} />
      <Map
        defaultCenter={defaultCentre}
        defaultZoom={defaultZoom}
        provider={mapTilerProvider}
      >
        {data ? (
          <LineContainer
            features={data.features.filter(
              (feature) => feature?.properties?.building === "yes"
            )}
            activeFeature={activeFeature}
            featureClicked={setActiveFeature}
          />
        ) : null}
      </Map>
    </div>
  );
}

export default App;
