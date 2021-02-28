import * as React from "react";
import rc from "randomcolor";
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
        feature.geometry.coordinates.map((coordArray: any, index: any) => (
          <Line
            mapState={mapState!}
            latLngToPixel={latLngToPixel!}
            key={`${feature.id}-${index}`}
            coordsArray={coordArray}
            colour={
              feature.id === activeFeature
                ? rc({
                    seed: feature.id,
                  })
                : "red"
            }
            onClick={() => {
              console.log(feature.id);
              featureClicked(feature.id);
            }}
          />
        ))
      )}
    </svg>
  );
};

const Line = ({
  mapState,
  latLngToPixel,
  coordsArray,
  colour,
  onClick,
}: {
  coordsArray: Point[];
  colour: string;
  onClick: () => void;
} & PigeonMapInjectedProps) => {
  const { center, zoom } = mapState!;
  // set our stroke width based on how zoomed in the user is. Thicker when zoomed out and thinner when zoomed in.
  const lineStrokeScale = React.useMemo(
    // pigeon maps default min/max 1 -> 18
    () => scaleLinear().domain([1, 18]).range([10, 2]),
    []
  );

  let pointsString = ``;
  if (coordsArray.length < 2) return null;
  for (let i = 0; i < coordsArray.length; i++) {
    // GEOJSON is [lng, lat] instead of [lat, lng]
    let pixel = latLngToPixel!(
      [coordsArray[i][1], coordsArray[i][0]],
      center,
      zoom
    );
    pointsString += `${pixel[0]}, ${pixel[1]} `;
  }

  return pointsString ? (
    <polyline
      onClick={() => onClick()}
      points={pointsString}
      stroke={colour}
      fill="none"
      strokeWidth={lineStrokeScale(zoom)}
    />
  ) : null;
};
