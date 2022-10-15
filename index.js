// Your code here
class Polygon{
    constructor(array){
        this.array=array
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        const perimeter = 0
        for (let index = 0; index < array.length; index++) {
          perimeter = perimeter+this.array[index]
        }
        return perimeter
    }
}

class Triangle extends Polygon {


    get isValid () {
        if(this.countSides === 3){
            const sideOne = this.array[0]
            const sideTwo = this.array[1]
            const sideThree = this.array[2]

            if((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne)){
                return true
            }
        }
        return
        
    }
}

class Square extends Polygon{

    get isValid () {
        if(this.countSides === 4){
            const sideOne = this.array[0]
            const sideTwo = this.array[1]
            const sideThree = this.array[2]
            const sideFour = this.array[3]

            if((sideOne === sideTwo) && (sideOne === sideThree) && (sideOne === sideFour))
            return true
        }

        return
    }

    get area (){
        if(this.isValid()){
            return this.array[0] * this.array[0]
        }
        return 
    }
}