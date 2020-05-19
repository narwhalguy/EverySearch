

var i;
var b;
var a;
var d;
var e;
var c;
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '13'){
    i = document.getElementById("input").value;
b="<iframe width='33%' height='100%' src='https://www.bing.com/search?q="+i+"'></iframe>";
a="<iframe width='33%' height='100%' src='https://en.wikipedia.org/wiki/Special:Search?search="+i+"&go=Go&ns0=1'>;</iframe>"
c="<iframe width='33%' height='100%' src='https://www.wolframalpha.com/input/?i="+i+"'></iframe>";
d="<style>body{background-color:black;}</style>"
e="<head><title>Search Results</title></head>"
document.body.innerHTML = '';
    document.write(e);
    document.write(d);
    document.write(a);
    document.write(b);
    document.write(c);
 }
 });