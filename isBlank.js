function isBlank(x){return x?(x.length>=0?(isNaN(x)?0:1):0):(x!==0 && x!==false && x!==null)};
function isBlank(x){return x?(x.length>=0?(isNaN(x)?0:1):0):(x!==0&&x!==false&&x!==null)};

function isBlank(x){return x?x.length>=0?isNaN(x)?0:1:0:x!==0&&x!==false&&x!==null};



/*
["  \n\t",
"",," ","\t","\t\n","a hftr",Math, 1,true,0,false,[],[""," "],[1,2],{},{a:'b'},null,
undefined].forEach(function(x,i){var zz=isBlank(x);console.log(zz?"\u221A":"\u263B",x)});

function isBlankText(x){return x===''||((x!=null && (x.length>0))?whiteRe.test(x):0)};
*/
