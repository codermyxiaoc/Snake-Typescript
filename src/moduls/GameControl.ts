import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./scorePanel";
class GameContorl{ 
    snake: Snake
    food: Food
    scorePanel: ScorePanel 
    direction: string = 'ArrowRight'
    isLive = true
    constructor() {
        this.snake = new Snake
        this.food = new Food
        this.scorePanel = new ScorePanel(10,10)
        this.init()
    }
    init(){
        document.addEventListener('keydown', this.keydownHandlenr.bind(this))
        this.run()
    }
    keydownHandlenr(event: KeyboardEvent){

        this.direction = event.key
    }
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "w": 
            X = X -= 10
                break;
            case "ArrowDown":
            case "s":
            X = X += 10
                break;
            case "ArrowLeft":
            case "a":
            Y = Y -= 10
                break;
            case "ArrowRight":
            case "d":
            Y = Y += 10
                break;
        }
        this.checEat(X,Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
         }catch (e: any){
            alert(e.message)
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 30)
    }
    checEat(X:number, Y: number) {
     
        if (this.food.X === Y && this.food.Y === X) {
            this.food.change()
            this.snake.addBody()
            this.scorePanel.addscore()
        }
    }
}
export default GameContorl