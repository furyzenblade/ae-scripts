(function(){
    function MoveLayerToEndPoint(sourceLayer, layerToBeMoved) {
        var offset = Math.abs(layerToBeMoved.inPoint - sourceLayer.outPoint);
        layerToBeMoved.startTime += offset;
    }
    //
    //
    var comp = app.project.activeItem; //get selected comp
    if (comp == null || !(comp instanceof CompItem)) {
        alert("No Comp selected");
        return;
    }
    
    var layers = comp.selectedLayers; //get selected layers
    if (layers.length < 2) {
        alert("Select at least 2 layers");
        return;
    }

    app.beginUndoGroup("Align Layers to End Point");
    for (var i = 0; i < layers.length - 1; i++) {
        MoveLayerToEndPoint(layers[i], layers[i+1]);
    }
    app.endUndoGroup();
    
    return;
})();
