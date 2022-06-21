//testing();
main();

function CreateTrimmedNull(comp, layer) {
    app.beginUndoGroup("Create New Null Layer"); // create new undo group

    var nullLayer = comp.layers.addNull(); // reate new null
    nullLayer.moveBefore(layer); // move null above layer
    layer.parent = nullLayer; // parent null to layer
    nullLayer.threeDLayer = layer.threeDLayer; //copy 3d attribute

    // copy inPoint and outPoint
    nullLayer.inPoint = layer.inPoint;
    nullLayer.outPoint = layer.outPoint;

	// reopen edited properties
    //app.executeCommand(2065);

    //end the undo group
    app.endUndoGroup();
}

function main() {
    // get selected comp
    var comp = app.project.activeItem;
    if (!isValid(comp)){
        alert("Please select a comp");
        return;
    }

    // get selected layer
    var selectedLayers = comp.selectedLayers;
    if (comp.selectedLayers.length != 1) {
        alert("Please select one layer");
        return;
    }
    var selectedLayer = selectedLayers[0];

    CreateTrimmedNull(comp, selectedLayer);
}

function testing(){
    //var cmd = app.findMenuCommandId("Position...");
    //alert(cmd);
    app.executeCommand(2771);
    return;
}
