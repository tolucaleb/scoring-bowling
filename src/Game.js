// [
//    [,]
// ]


export default class Game {
    _score = 0;

    score() {
        return this._score;
    }

    roll(score) {
        this._score += score;
    }
}

export function newGame (){
    const nineFrames =[...Array(9)].map(() => [0,0]);
    return [
        ...nineFrames,
        [0,0,0]
    ]
}