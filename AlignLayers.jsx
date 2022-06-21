main();

function MoveLayerToEndPoint(sourceLayer, layerToBeMoved) {
    var offset = layerToBeMoved.inPoint - sourceLayer.outPoint;
    if (offset < 0 ) offset *= -1;
    //layerToBeMoved.inPoint += offset;
    //layerToBeMoved.outPoint += offset;
    layerToBeMoved.startTime += offset;
}

function main() {
    var comp = app.project.activeItem; //get selected comp
    if (comp == null || !(comp instanceof CompItem)) {
        alert("No Comp selected");
        return;
    }
    
    var layers = comp.selectedLayers;  //get selected layers
    if (layers.length < 2) {
        alert("More than one layer has to be selected");
        return;
    }

    //alert(layers[1].outPoint + '\n' + layers[0].inPoint);
    //MoveLayerToEndPoint(layers[1], layers[0]);

    //create undo group
    app.beginUndoGroup("Align Layers to End Point");
    for (var i = layers.length-1; i >= 0+1; i--) {
        //if ((i-1) < 0) break;
        MoveLayerToEndPoint(layers[i], layers[i-1]);
    }
    //end undo group
    app.endUndoGroup();
    
    return;
}
