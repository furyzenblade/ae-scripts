(function(){
    function BindNullLayer(nullLayer, layer) {
        nullLayer.moveBefore(layer);  // move null above layer
        layer.parent = nullLayer;     // parent null to layer
        nullLayer.threeDLayer = layer.threeDLayer;  //copy 3d attribute

        // copy inPoint and outPoint
        nullLayer.inPoint = layer.inPoint;
        nullLayer.outPoint = layer.outPoint;
    }
    //
    //
    var comp = app.project.activeItem; // get selected comp
    if (comp == null || !(comp instanceof CompItem)) {
        alert("Select a comp");
        return;
    }

    var selectedLayers = comp.selectedLayers; // get selected layers
    if (selectedLayers.length <= 0){
        alert("Select at least one layer");
        return;
    }

    app.beginUndoGroup("Create Trimmed Null Layer");
    for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];
        BindNullLayer(comp.layers.addNull(), layer);
    }
    app.endUndoGroup();
})();
