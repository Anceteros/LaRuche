/**
 * Created by yan on 16/4/26.
 */
var xmin = -10;
var ymin = -10;
var xmax = 10;
var ymax = 10;
// get size of board in pixels for conversions
var width = $('#box').width();
var height = $('#box').height();
var V = [];
var E = [];
var polyPoints = [], polygon;

//initialize boards
JXG.Options.point.snapToGrid = true;
JXG.Options.axis.ticks.majorHeight = -1;
JXG.Options.axis.ticks.insertTicks = false;
JXG.Options.axis.ticks.ticksDistance = 1;
var board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [xmin, ymax,
        xmax, ymin],
    axis: true
});


//styles
var pointStyle = {
    fillColor: 'red',
    strokeColor: 'red'
}
var selectedStyle = {
    fillColor: 'green',
    strokeColor: 'green'
}
var highlightedStyle = {
    fillColor: 'yellow',
    strokeColor: 'black'
}
var rectPointStyle = {
    face: 'o',
    size: 2,
    strokeColor: 'green',
    fillColor: 'green',
    fillOpacity: 0.3,
    strokeOpacity: 0.3
}
var rectStyle = {
    strokeWidth: 1,
    borders: {strokeColor: 'green'},
    strokeOpacity: .3,
    fillOpacity: 0.05
}


for (var i = 0; i < 4; i++) {
    V[i] = {};
}

V[0].pt = board.create('point', [0, 0]);
V[1].pt = board.create('point', [1, 3]);
V[2].pt = board.create('point', [3, 2]);
V[3].pt = board.create('point', [-2, 2]);


for (var i = 0; i < 4; i++) {

    JXG.addEvent(V[i].pt.rendNode, 'mousedown', function(e) {
        isSelectMode = false;

    }, V[i]);

    V[i].pt.on('up', (function() {
        isSelectMode = true;
    }));
}



//selection UI
var isSelectMode = true;
var selecting = false;

function clearSelection() {
    for (var i = 0; i < selectedPts.length; i++) {
        selectedPts[i].pt.setAttribute(pointStyle);
    }
    selectedPts = [];
    polyPoints = [];
    board.removeObject(polygon);

}

function startSelection() {
    isSelectMode = true;
}

var rectStart, rectEnd, rectCorner1, rectCorner2, rect;
var getMouseCoords = function (e) {
        var cPos = board.getCoordsTopLeftCorner(e),
            absPos = JXG.getPosition(e),
            dx = absPos[0] - cPos[0],
            dy = absPos[1] - cPos[1];

        return new JXG.Coords(JXG.COORDS_BY_SCREEN, [dx, dy], board);
    },
    down = function(e) {
        if (!isSelectMode) return;
        var canCreate = true,
            coords = getMouseCoords(e),
            el;


        if (canCreate) {
            rectStart = board.create('point', [coords.usrCoords[1], coords.usrCoords[2]], rectPointStyle);

            rectEnd = board.create('point', [coords.usrCoords[1], coords.usrCoords[2]], rectPointStyle);

            rectCorner1 = board.create('point', [rectStart.X(), function() {
                return rectEnd.Y();}], rectPointStyle);
            rectCorner2 = board.create('point', [function() {
                return rectEnd.X();}, rectStart.Y()], rectPointStyle);

            rect = board.create('polygon', [rectStart, rectCorner1, rectEnd, rectCorner2], rectStyle);
            selecting = true;
        }
    },
    move = function(e) {
        if (!selecting) return;
        var coords = getMouseCoords(e);
        rectEnd.moveTo([coords.usrCoords[1], coords.usrCoords[2]]);
    },
    selectedPts = [],
    up = function(e) {
        if (selecting) {
            var minX, maxX, minY, maxY;
            if (rectStart.X() < rectEnd.X()) {
                minX = rectStart.X();
                maxX = rectEnd.X();
            }
            else {
                maxX = rectStart.X();
                minX = rectEnd.X();
            }
            if (rectStart.Y() < rectEnd.Y()) {
                minY = rectStart.Y();
                maxY = rectEnd.Y();
            }
            else {
                maxY = rectStart.Y();
                minY = rectEnd.Y();
            }
            for (var i = 0; i < V.length; i++) {
                if (V[i].pt.X() >= minX && V[i].pt.X() <= maxX && V[i].pt.Y() >= minY && V[i].pt.Y() <= maxY) {
                    selectedPts.push(V[i]);
                }

            }


            for (var i = 0; i < selectedPts.length; i++) {
                selectedPts[i].pt.setAttribute(selectedStyle);
                polyPoints.push(selectedPts[i].pt)

            }

            polygon = board.create('polygon', polyPoints);

            selecting = false;
            board.removeObject(rect);
            board.removeObject(rectCorner1);
            board.removeObject(rectCorner2);
            board.removeObject(rectStart);
            board.removeObject(rectEnd);
        }
    };

board.addHook(down, 'mousedown');
board.addHook(move, 'mousemove');
board.addHook(up, 'mouseup');

btn = document.getElementById('clearbtn');
btn.addEventListener('click', clearSelection, false);