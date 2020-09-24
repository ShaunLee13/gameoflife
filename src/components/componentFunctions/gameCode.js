/////////////Function for creating Grids////////////
export const createNew = (size, randomize=false) => {
    //Create a new array this will hold our variables
    let newGrid = []
    //Iterate with a nested loop to identify x and y coordinates for the length/width from size.
    for(let y = 0; y < size; y++){
        let row = []
        for(let x = 0; x < size; x++){
            let value = false;
            //if a true value gets passed in for the random generation, it will set the values for active and new at random
            if (randomize){
                value = Math.random() > 0.85;
            }
            //we start with y so we can get our collection of rows.
            row.push({
                active: value,
                new: value
            })
        }
        //once we're done with our inner for loop, push that row onto our new array
        newGrid.push(row)
    }
    return newGrid
}
/////////////End Function for creating Grids////////////

////////Start Function for Operating Game//////////
export const operateGame = (grid = []) => {
    //This helps us determine neighbor positions
    let gridHeight = grid.length;
    let gridWidth = grid.length;

    const checkNeighbors = (x,y) => {
        //Now, we'll start checking our neighbors. If we are at the edge of the grid, our neighbor will be the neighbor on the opposite side of the map.
      let topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
      let bottomRow = (x+1 === gridHeight) ? 0 : x+1;
      let leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
      let rightColumn = (y+1 === gridWidth) ? 0 : y+1;

      //Add up our total of all neighbors around our current cell, to determine its status.
      let total = 0;
      total+= grid[topRow][leftColumn].active;
      total+= grid[topRow][y].active;
      total+= grid[topRow][rightColumn].active;
      total+= grid[x][leftColumn].active;
      total+= grid[x][rightColumn].active;
      total+= grid[bottomRow][leftColumn].active;
      total+= grid[bottomRow][y].active;
      total+= grid[bottomRow][rightColumn].active;

      return total;
    };

    //Create a new array and iterate over each cell from the original, checking what the status of those cells is.
    let nextGen = [];
    for (let i = 0; i < gridHeight; i++) {
      let row = [];
      for (let j = 0; j < gridWidth; j++) {
          //For each cell, we will determine if it's currently active and we will determine the amount of neighbors.
        let cellActive = grid[i][j].active;
        let neighbors = checkNeighbors(i,j);
        // if a cell is active and the total is equal to 2 or 3, return true and it stays active. otherwise false
          if (cellActive) {
               if (neighbors < 2) {
                   row.push({ active: false });
               } else if (neighbors > 3) {
                row.push({ active: false });
               } else {
                   row.push({ active: true });
               }
           }
           //and if a cell is inactive and has 3 neighbors, it comes to life. otherwise it stays dead
           if (!cellActive) {
               if (neighbors === 3) {
               row.push({
                 active: true,
                 newBorn: true
               });
           } else {
               row.push({ active: false });
               }
           }
    }
    nextGen.push(row);
  }
  return nextGen;
};
///////////////End of Game Operation////////////////////