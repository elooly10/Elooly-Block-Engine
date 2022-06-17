# Elooly Block Engine Notes
Elooly Block Engine Is A Game Engine for platform games that is loosely based of blocklooly. It uses the same tech is blocklooly __(position css based element loading)__

### <code>It is currently IN DEVELOPMENT!</code>

# How to use
Use file magic.js to run the libary
## Functions
### MagicBlock[]
Defines all class styles of ONE Block (Via sources like <code>['block_type_1.svg', 'block_type_2.svg', 'block_type_3.svg']</code>
#### Used like:
 <code>Magicblock = [svg_src, svg_src...];</code>
 
 <code>setMagicBlock(__usedMagicSet__);</code>
 ## setMagicBlock(__usedMagicSet__);
Used to transfer __MagicBlock__ to game storage. __usedMagicSet__ is the location of the block in the set of blocks, and _if ommited_, will go to the next location for a block.
### Used Like:
   <code>Magicblock = [svg_src, svg_src...];</code>
 
  <code>setMagicBlock(__usedMagicSet__);</code>
## Magic{} 
An object used soley within the libary to hold everything relating to the game, excluding __GameProto()__
### Used Like
__Should not be used in code__

  __DEBUG ONLY:__<code>console.log(Magic)</code>
  
## Game
The default __GameProto()__.
## Game.end(next)
A function to change levels. Next can be ommited, and game will go onto the next level.
## Game.start(level)
Used to start levels. level is the level to start at.

# Currently Needed
* Charectars
* Way to load levels
* Way to create levels
* Players
