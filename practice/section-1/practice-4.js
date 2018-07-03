'use strict';

function collectSameElements(collectionA, objectB) {
   var result = new Array();
   var resultA=new Array();
   var c=objectB.value.toString();
   collectionA.forEach((v,i)=>{                  
            Object.keys(v).forEach(v=>{
                resultA.push(collectionA[i][v]);
            })
        })
    for(var i=0;i<resultA.length;i++){
        if(c.indexOf(resultA[i].toString())>-1){
           for(var j=0;j<c.length;j++){
              if(resultA[i]==c[j]) {
                   result.push(resultA[i]);
                    break;
				}

             }

          }      
        }
            return result;
}
