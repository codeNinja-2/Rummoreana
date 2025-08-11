import { Game } from "./game";
import { Card } from "./card";

export class Player {

    game : Game;
    name : string;
    points : number;
    hand : Set<Card>;
    index : number;

    constructor(game : Game, name : string, hand : Card[]) {
        this.game = game;
        this.name = name;
        this.points = 0;
        this.hand = new Set<Card>();
        // Let this.index be the number of players already in the Game.
    }

    addCardToHand(card : Card) {
        this.hand.add(card);
    }

    removeCardFromHand(card : Card) : boolean {
        if (!this.hasCard(card)) {
            return false;
        } else {
            this.hand.delete(card);
            return true;
        }
    }

    hasCard(card : Card) : boolean{
        return this.hand.has(card);
    }

    addPoints(points : number) {
        this.points += points;
    }

    score() {
        let total = this.points;
        for (const card of this.hand) {
            total -= card.getValue();
        }
        return total;
    }
}