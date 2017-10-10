// Program searches for a name given a long string. 
// First by finding the first letter of the name, then adding the length of the name to an aaray and inspecting the aaray. 

var text = "Hi, my name is Lucy. How are you doing?";
var myName = "Lucy";
var hits = [];

for(var i=0 ;i < text.length;i++){
    
    if(text[i] === myName[0]){ 
        for (var j=i ;j < myName.length+i ; j++) 
        {
        hits.push(text[j]); 
        }
    }
}

if ( hits.length === 0 ){  
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}

