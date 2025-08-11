enum Suit {
    Spades,
    Diamonds,
    Hearts,
    Clubs
}

enum Rank {
    Ace,
    Number2,
    Number3,
    Number4,
    Number5,
    Number6,
    Number7,
    Number8,
    Number9,
    Number10,
    Jack,
    Queen,
    King

}

class Card {
    constructor(readonly suit: Suit) {
    }
}