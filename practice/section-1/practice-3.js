'use strict';

function collectSameElements(collectionA, objectB){ 
            var result = new Array();
            var c=objectB.value.toString();
            for(var i=0;i<collectionA.length;i++)
            {
              if(c.indexOf(collectionA[i].toString())>-1)
              {

                 for(var j=0;j<c.length;j++)

                 {

                     if(collectionA[i]==c[j]) 

                     {

                        result.push(collectionA[i]);

                        break;

                     }

                 }

              }      
            }
            return result;
        }
