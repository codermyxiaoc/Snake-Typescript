class Snake{
    head: HTMLElement
    body: HTMLCollection
    elemet: HTMLElement
    constructor() {
        this.elemet = document.getElementById("snake")!
        this.head = this.elemet.querySelector("div")!
        this.body = this.elemet.getElementsByTagName("div")
        
    }
    get Y() {
        return this.head.offsetLeft
    }
    get X() {
        return this.head.offsetTop
    }
    set X(value: number) {
        if(this.X === value) {
            return
        }
        if(value > 300 || value < 0) {
            throw new Error("游戏结束")
        }
        if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            if(value > this.X) {
                value = this.X - 10
            }else 
            {
                value = this.X + 10
            }
        }
        this.movebody()
        this.head.style.top= value + 'px'
        this.movehead()
    }
    set Y(value: number) {
        if(this.Y === value) { 
            return 
        }
        if (value > 300 || value < 0) {
            throw new Error("游戏结束")
        }
        if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.movebody()
        this.head.style.left = value + 'px'
        this.movehead()
        
    }
    addBody() {
        this.elemet.insertAdjacentHTML("beforeend","<div></div>")
    }
    movebody() {      
        for (let i = this.body.length-1; i > 0; i--){  
            let X = (this.body[i - 1] as HTMLHRElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLHRElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px'
        }
    }
    movehead() {
        for(let i = 1; i < this.body.length; i++){
            if (this.Y === (this.body[i] as HTMLElement).offsetLeft 
            && this.X === (this.body[i] as HTMLElement).offsetTop) {
                throw new Error("游戏结束")             
            }   
        }
    }
}
export default Snake