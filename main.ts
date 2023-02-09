let gyroY = 0;
let gyroX = 0;
let gyroZ = 0;
let x = 2;
let y = 2;
let z = 2;
basic.forever(function () {
    led.plot(x, y)
    gyroX = input.acceleration(Dimension.X)
    gyroY = input.acceleration(Dimension.Y)
    if (gyroX < -150 && x > 0) {
        x += -1
        
    } else if (gyroX > 150 && x < 4) {
        x += 1
        
        
    }
    if (gyroY < -150 && y > 0) {
        y += -1
        
    } else if (gyroY > 150 && y < 4) {
        y += 1
        
    }
    if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2) || (x == 0 && y == 3) || (x == 0 && y == 4) || (x == 1 && y == 4) || (x == 2 && y == 4) || (x == 3 && y == 4) || (x == 4 && y == 4) || (x == 4 && y == 0) || (x == 4 && y == 1) || (x == 4 && y == 2) || (x == 4 && y == 3) || (x == 4 && y == 4) || (x == 1 && y == 0) || (x == 2 && y == 0) || (x == 3 && y == 0) || (x == 4 && y == 0)
    
    ){

    
        music.playTone(Note.C, music.beat(BeatFraction.Eighth))
        

    }
    if ((x== 2 && y==2)) {

        music.playTone(Note.E, music.beat(BeatFraction.Quarter))
    }
    if ((x == 1 && y == 1) || (x == 1 && y == 2) || (x == 1 && y == 3)) {
        
    }
    
    basic.pause(500)
    basic.clearScreen()


})
console.log(x)
console.log(y)
