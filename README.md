# GetMiddlePoint

Geometrically, this function tells us whether a point belongs a segment using the easiest way through distances.
- The function is written in JavaScript.
- It works fine using cartesian coordinates. I tried it in EPSG: 3857 and other projected systems as well.

All what you need is to pass these arguments: xEnd, yEnd, xOri, yOri
- xEnd: _second point which defines the line. Coordinate X_
- yEnd: _second point which defines the line. Coordinate Y_
- xOri: _first point which defines the line. Coordinate X_
- yOri: _first point which defines the line. Coordinate Y_

you'll get an **array**, your middle point, just with one element {x:'x', y:'y'}.

See an exmaple in [fiddle](http://jsfiddle.net/rafaelfernandezgis/1Lgxqp01/2/)
