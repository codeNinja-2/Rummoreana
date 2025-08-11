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

const cardValues = new Map<Rank, number>()
cardValues.set(Rank.Ace, 15)
cardValues.set(Rank.Number2, 15)
cardValues.set(Rank.Number3, 5)
cardValues.set(Rank.Number4, 5)
cardValues.set(Rank.Number5, 5)
cardValues.set(Rank.Number6, 5)
cardValues.set(Rank.Number7, 5)
cardValues.set(Rank.Number8, 5)
cardValues.set(Rank.Number9, 5)
cardValues.set(Rank.Number10, 10)
cardValues.set(Rank.Jack, 15)
cardValues.set(Rank.Queen, 15)
cardValues.set(Rank.King, 15)

class Card {
    constructor(readonly suit: Suit, readonly rank: Rank) {
    }

    getValue(): number {
        return cardValues.get(this.rank)
    }
}