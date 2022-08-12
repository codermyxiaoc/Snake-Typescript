class ScorePanel {
    private _score: number
    private _level: number
    private maxlevel: number
    private upgrade: number
    scoreEle: HTMLElement
    levelEle: HTMLElement

    constructor(maxlevel: number = 10, upgrade: number = 10) {
        this._score = 0
        this._level = 1
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxlevel = maxlevel
        this.upgrade = upgrade
    }

    get score() {
        return this._score
    }
    get level() {
        return this._level
    }
    addscore() {
        this._score++
        if (this.score % 2 === this.upgrade) {
            this.addlevel()
        }
        this.update()
    }
    addlevel() {
        if (this._level < this.maxlevel) {
            this._level++
        }
        this.update()
    }
    update() {
        this.scoreEle.innerHTML = this._score + ''
        this.levelEle.innerHTML = this._level + ''
    }
}
export default ScorePanel