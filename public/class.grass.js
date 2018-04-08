class Grass extends living {
    constructor(x, y, index) {
        super(x, y, index);
        mul() 
            this.multiply++;
            var newCell = random(this.yntrelVandak(0));
            if (this.multiply >= 8 && newCell) {
                var newGrass = new Grass(newCell[0], newCell[1], this.index);
                grassArr.push(newGrass);
                matrix[newCell[1]][newCell[0]] = this.index;
                this.multiply = 0;
            }
        }
            yntrelVandak(character) {
        this.getNewCoordinates();
        return super.yntrelVandak(character);
    
    }
    }

