# Sambil

Forked Open source webGL game made with three.js

![Logo of Sambil](sambil.png)

Play at [sambil.es](https:/sambil.es) 

# How it works

**Custom physics engine**    
The game works with a simplistic physics engine based on axis-aligned bounding box collision detection. All the physic objects in this game are either boxes or axis-aligned square tiles. 

**Custom map editor**    
The information about the physical map is contained in an JSON called sceneGraph that the game loads on statup. I created this file using a custom map editor, that I coding for the sole purpose of making this game.

**Manual camera positioning**    
Moving the camera to support a 3D platformer game is a challenge, that I had to face on my own since I used a custom physics engine.

**Automatic optimization**    
The game is playable from mid-range mobile to high-range desktop. To support this adaptability, the game adapt itself to the device capability at runtime. 

**Runtime assets loading**    
This game is light, but I still wanted to optimize loading time by loading map tiles at runtime. 