function GetKeyframeTime(layer){
    var time = RecursivePropertyTraverse(layer, Infinity, -Infinity);  // get new min and max time - to trim layer to
    return time;
}

function RecursivePropertyTraverse(property, minTime, maxTime){
    var time = [minTime, maxTime];
    if (property.propertyType == PropertyType.PROPERTY && property.canVaryOverTime && property.numKeys > 0){ // property has keys
        var firstKeyTime = property.keyTime(1);                 // get time of first key
        var lastKeyTime = property.keyTime(property.numKeys);   // get time of last key
        time[0] = Math.min(time[0], firstKeyTime);  // update min
        time[1] = Math.max(time[1], lastKeyTime);   // update max
    }
    if (property.propertyType == PropertyType.INDEXED_GROUP || property.propertyType == PropertyType.NAMED_GROUP){ 
        for (var d = 1; d <= property.numProperties; d++){
            // recursively loop through properties
            time = RecursivePropertyTraverse(property.property(d), time[0], time[1]);  // update time
        }
    }
    return time;
}

function main(){
    var activeItem = app.project.activeItem;
    if (activeItem == null || !(activeItem instanceof CompItem)){  // make sure a comp is selected
        alert("Select a comp");
        return;
    }

    if (activeItem.selectedLayers.length == 0){  // make sure at least one layer is selected     
        alert("Select at least one layer");
        return;
    }

    var firstLayer = activeItem.selectedLayers[0];
    var newLayerTime = GetKeyframeTime(firstLayer);

    //alert("In: " + newLayerTime[0] + '\n' + 
    //      "Out: " + newLayerTime[1]);

    app.beginUndoGroup("Trim Layer");
    firstLayer.inPoint = newLayerTime[0];
    firstLayer.outPoint = newLayerTime[1];
    app.endUndoGroup();
}
main();
