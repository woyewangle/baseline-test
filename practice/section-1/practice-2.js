'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
   var c=collectionB.toString();
   for(var i=0;i<collectionA.length;i++){
      if(c.indexOf(collectionA[i].toString())>-1)
       {
          result.push(collectionA[i]);
       }      
    }
    return result;

}
