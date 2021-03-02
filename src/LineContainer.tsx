import * as React from "react";
import { scaleLinear } from "d3-scale";
import { Feature, GeometryObject } from "geojson";
import { Point } from "pigeon-maps/lib/types";

type PigeonMapInjectedProps = Partial<{
  mapState: {
    width: number;
    height: number;
    zoom: number;
    center: number;
  };
  latLngToPixel: (latLang: Point, center: number, zoom: number) => Point;
}>;

export const LineContainer = ({
  // supplied by us
  features,
  activeFeature,
  featureClicked,
  // mapState is injected by the <Map /> (pigeon component)
  mapState,
  // latLngToPixel is injected by the <Map /> (pigeon component)
  latLngToPixel,
}: {
  features: Feature<GeometryObject, any>[];
  activeFeature: string | undefined;
  featureClicked: (featureID: string) => void;
} & PigeonMapInjectedProps) => {
  return (
    <svg
      width={mapState!.width}
      height={mapState!.height}
      style={{ top: 0, left: 0 }}
    >
      {features.map((feature: any) =>
        feature.geometry.coordinates.map(
          (coordArray: Point[], index: string) => (
            <Line
              mapState={mapState!}
              latLngToPixel={latLngToPixel}
              // create a key combining values as some feature share the same id
              key={`${feature.id}-${index}`}
              coordsArray={coordArray}
              colour={feature.id === activeFeature ? "red" : "#1b8cc4"}
              activeFeatureStrokeWidth={feature.id === activeFeature ? 8 : 5}
              onClick={() => {
                featureClicked(feature.id);
              }}
            />
          )
        )
      )}
    </svg>
  );
};

const Line = ({
  coordsArray,
  colour,
  activeFeatureStrokeWidth,
  onClick,
  mapState,
  latLngToPixel,
}: {
  coordsArray: Point[];
  colour: string;
  activeFeatureStrokeWidth: number;
  onClick: () => void;
} & PigeonMapInjectedProps) => {
  // deconstruct mapState props
  const { center, zoom } = mapState!;
  // set our stroke width based on how zoomed in the user is. Thicker when zoomed out and thinner when zoomed in.
  const lineStrokeScale = React.useMemo(
    // pigeon maps zoom values range min/max 1 -> 18
    () => scaleLinear().domain([1, 18]).range([2, 5]),
    []
  );

  let pointsString = ``;
  if (coordsArray.length < 2) return null;
  for (let i = 0; i < coordsArray.length; i++) {
    // GEOJSON is [lng, lat] instead of [lat, lng]
    let pixelCoord = latLngToPixel!(
      [coordsArray[i][1], coordsArray[i][0]],
      center,
      zoom
    );
    // polyline string format style "0,100 50,25 50,75 100,0"
    pointsString += `${pixelCoord[0]},${pixelCoord[1]} `;
  }

  return pointsString ? (
    <polyline
      onClick={() => onClick()}
      points={pointsString}
      stroke={colour}
      fill="none"
      strokeWidth={activeFeatureStrokeWidth}
    />
  ) : null;
};
