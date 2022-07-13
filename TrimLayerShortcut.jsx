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
    for (var i = 0; i < selectedLayers.length; i++){
        selectedLayers[i].outPoint = timeIndicator; // set out point of all layers
    }
})();
