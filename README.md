# Notes

## DEMO

- https://lwswr.github.io/geojson-feature/

## Implemented features

- API call to OpenStreetsMap API and retreiving an array of features.
- Bbox parameters can be used as a query ot API call with user input.
- Clicking the map also fires a coordinate which becomes the center of a bbox as an alternaitve input method.
- pigeon-maps Map component with a mapTiler creates context to the location of the rendered Features.
- Features rendered using svg which is passed a string of coordinates and mapState to adjust size.
- FeatureInfoDisplay Component displaying the name property of the Feature if the feature contains one.
- Basic testing of components and functionailty.

## Possible additional features

- In map marker with pop up showing the location of the feature.
- Create an overlay showing the dimensions of the boundary box.
- Smarter line stroke scaling could make the app display cleaner.
- Could implement a reducer with Redux for state management.
