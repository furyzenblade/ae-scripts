(function(){
    var selectedComp = app.project.activeItem; // get active comp
    if (selectedComp == null || !(selectedComp instanceof CompItem)) {
        alert("Select a composition");
        return;
    }
    var selectedLayers = selectedComp.selectedLayers; // get selected layers
    if (selectedLayers.length == 0){
        alert("Select at least one layer");
        return;
    }

    var timeIndicator = selectedComp.time; // get time indicator
    if (Math.abs(timeIndicator - selectedLayers[0].inPoint) < Math.abs(timeIndicator - selectedLayers[0].outPoint)){
        // set beginning
        var tmpOutPoint = selectedLayers[0].outPoint;
        selectedLayers[0].inPoint = timeIndicator;
        selectedLayers[0].outPoint = tmpOutPoint;
    } else {
        // set end
        var tmpInPoint = selectedLayers[0].inPoint;
        selectedLayers[0].outPoint = timeIndicator;
    }
})();
