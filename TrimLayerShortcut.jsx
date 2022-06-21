main();

function main() {
    var selectedComp = app.project.activeItem;
    var selectedLayers = selectedComp.selectedLayers;

    var firstSelectedLayer = selectedLayers[0];
    var timeIndicator = selectedComp.time;


    //trim firstSelectedLayer's inPoint to timeIndicator
    var oldOutPoint = firstSelectedLayer.outPoint;

    firstSelectedLayer.inPoint = timeIndicator; 
    firstSelectedLayer.outPoint = oldOutPoint; 

    return;
}
