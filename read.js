var browser;
var i;
var b;
var a;
var d;
var e;
var c;
var bing=function(){
  browser="https://www.bing.com/search?q=";
localStorage.clear();
 localStorage.setItem("browser", "https://www.bing.com/search?q=");
}
var wiki=function(){
  browser="https://wikipedia.com/wiki/search?q=";
localStorage.clear();
localStorage.setItem("browser", "https://wikipedia.com/wiki/");
}
var giphy=function(){
	browser="https://giphy.com/search/";
	localStorage.clear();
	localStorage.setItem("browser","https://giphy.com/search/")
}
var yahoo=function(){
  browser="https://search.yahoo.com/search?p=";
localStorage.clear();
localStorage.setItem("browser", "https://search.yahoo.com/search?p=");
}
$(document).ready(function(){
var header = $('body');

var backgrounds = new Array(
    'url(backdrop.jpg)'
  , 'url(backdrop2.jpg)'
  , 'url(backdrop4.jpg)'
);

var current = 0;
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '49'){
wiki();
}});
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '50'){
bing();
}});
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '51'){
yahoo();
}});
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '52'){
giphy();
}});
function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 15000);

header.css('background-image', backgrounds[0]);
});
$(document).keypress(function(event){
var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode == '13'){
     browser=localStorage.getItem("browser");
    i = document.getElementById("input").value;
c="<iframe width='100%' height='100%' src='"+browser+i+"'></iframe>";
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