import axios from "axios";
import osmtogeojson from "osmtogeojson";

// min_lon,min_lat,max_lon,max_lat.

export type Member = {
  ref: number;
  role: string;
  type: string;
};

export type Tags = {
  castle_type: string;
  height: string;
  historic: string;
  name: string;
  opening_hours: string;
  phone: string;
  tourism: string;
  type: string;
  wikidata: string;
  wikipedia: string;
};

export type Element = {
  changeset: number;
  id: number;
  members: Member[];
  tags: Tags;
  timestamp: string;
  type: string;
  uid: number;
  user: string;
  version: number;
};

export type OSMDataResponse = {
  attribution: string;
  bounds: {
    maxlat: number;
    maxlon: number;
    minlat: number;
    minlon: number;
  };
  elements: Element[];
  generator: string;
  license: string;
  version: number;
};

const BOUNDS_BOX_BUCKINGHAM_PALACE = "-0.14379,51.50008,-0.14235,51.50152";

export const convertToStringArray = (arr: number[]): string[] => {
  return arr.map(String);
};

export const getBBGeoJson = async (array: number[]) => {
  const response = await axios.get<OSMDataResponse>(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${convertToStringArray(
      array
    )}`
  );
  const json = osmtogeojson(response.data);
  console.log(json);
  return json;
};
