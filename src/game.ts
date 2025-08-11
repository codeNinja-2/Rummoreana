import readline from 'readline/promises';
import { Card, Rank, Suit } from './card';

const inter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Game {
    drawPile: Card[] = [];
    discard: Card[] = [];
    readonly players: Player[];
    constructor(...players: Player[]) { // This will be resolved when merged so that player class is available
        this.players;

        Object.keys(Suit).forEach((suit) => {
            Object.keys(Rank).forEach((rank) => {
                console.log("Creating New Card " + rank + " of " + suit);
                
            })
        })
    }

    async gameStart() {
        while (true) {
            const answer = await inter.question("what art thine move? > ");

            console.log("You answered: " + answer);
        }
    }

    drawFromDrawPile() {
        return
    }
}