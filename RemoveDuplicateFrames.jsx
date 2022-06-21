// WIP - partially adopted from "NT Productions" coding series: https://github.com/NTProductions/scene-detection-script/blob/main/Scene%20Detection%20Script.jsx
main();

function main() {
    var currComp = app.project.activeItem;
    
    // check if a comp is selected AND if it is a comp
    if (currComp == null || !(currComp instanceof CompItem)) {
        alert("Error: Select a comp");
        return false;
    }
    
    // check if only one layer is selected
    if (currComp.selectedLayers.length != 1) {
        alert("Error: Select only one layer");
        return false;
    }

    /*
    app.beginUndoGroup("Detect Duplicate Frames"); //undo group
    getNonDuplicateFrames(currComp, currComp.selectedLayers[0]);
    app.endUndoGroup(); //end undo group
    */

}

/*
function getNonDuplicateFrames(comp, layer){
    var rText = comp.layers.addText();
    var gText = comp.layers.addText();
    var bText = comp.layers.addText();

    r.bText.property("Source Text").expression = 
    'targetLayer = thisComp.layer("' + layer.name + '");\n' +

}
*/
