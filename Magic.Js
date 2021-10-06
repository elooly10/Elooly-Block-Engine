// This Is A Libary Used In Platformer Games. Inspired By Blocklooly

var Magic = {
  set: -1,
  body: "",
  images: [],
  Level: 0,
  levelpile: [],
}
function GameProto() {
this.end = function(next){
  if(next){Magic.level = next;}
  else{Magic.level++;}
  this.start();
}
this.start = function(level){
  if(level){
    Magic.level = level;
  }
  arrayPreformer = Magic.level;
  levelPile = Magic.levelpile[arrayPreformer];
  var Level = {
    Name: levelPile[0],
    Structure: {full:levelPile[1]},
    EndLevel: {full:levelPile[2]}
  }
// Here We Are Calculating X And Y Ends
  Level.Endlevel.X =  Level.EndLevel.full[0]
  Level.Endlevel.Y =  Level.EndLevel.full[1]
// Currently A Dead End
}
}

var Game = new GameProto();
var MagicBlock = [];// Defined For Use Outside Of Libary
function setMagicBlock(usedMagicSet){
  if(usedMagicSet){
    Magic.set = usedMagicSet;
  }
  else{
  Magic.set++;
}
  Magic.images[Magic.set] = MagicBlock;
  MagicBlock = [];
}
function LoadBody(name) {
  Magic.body = document.getElementById(name);
  Magic.body.style.position = "relative";
  console.log("The Game Body Has Loaded... Loading Children Elements...");
}
