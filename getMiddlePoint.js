function getMiddlePoint(xEnd, yEnd, xOri, yOri) {
    var middlePoint = [];
    var x = parseFloat((xEnd + xOri) / 2);
    var y = parseFloat((yEnd + yOri) / 2);
    middlePoint.push({ x: x, y: y });
    return middlePoint;
}
