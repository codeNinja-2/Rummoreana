enum Suit {
    Spades,
    Diamonds,
    Hearts,
    Clubs
}

enum Rank {
    Ace = 1,
    Number2 = 2,
    Number3 = 3,
    Number4 = 4,
    Number5 = 5,
    Number6 = 6,
    Number7 = 7,
    Number8 = 8,
    Number9 = 9,
    Number10 = 10,
    Jack = 11,
    Queen = 12,
    King = 13
}

class Card {
    constructor(readonly suit: Suit, readonly rank: Rank) {
    }

    getValue(): number {
        if (this.rank == Rank.Ace) {
            return 15;
        } else if (this.rank >= 11) {
            return 10;
        } else {
            return 5;
        }
    }
}