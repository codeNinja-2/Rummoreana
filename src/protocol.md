This is a description of messages passed between the Arena and Bots.

* Messages consist of space-separated components.
* Cards are specified with a rank (A, 2, …, 9, J, Q, K) and suit (H, C, D, S), e.g. 8H.

The Arena first tells each Bot about the starting state of the game:

**start [# of players] [# players preceding this Bot] [initial discard] [Bot's hand]**

For example, this start message:

**start 3 1 9D 8H 2S 5S JD AS 2C 3C**

means:

* There are 3 players in the game.
* 1 player precedes this Bot in the order of play.
* The discard pile initially contains the 9 of diamonds.
* This Bot's hand consists of the 8 of hearts, 2 of spades, 5 of spades, etc.
* All other players get an equal number of cards, which are unknown to this Bot.

The Arena then cycles through Bots.  At the beginning of one Bot's turn, the Arena sends
this message to every Bot:

**turn [player number]**

The specified Bot responds by giving the number of cards taken from the discard pile.

**take [number of cards from discard pile]**

If this number is zero ("take 0"), then the Bot wants one face-down card from the draw
pile instead.  In this case, the Arena responds to the Bot with the drawn card, e.g. QS.

Next, the Bot lays down scoring cards with zero or more messages of two forms:

**run [card]...**

**set [card]...**

A run may be a standalone sequence of three or more cards (e.g. 4H 5H 6H 7H) or a sequence
of one or more cards appended to a previously-played sequence.  A lone ace played as
a sequence is always "high" if possible; in other words, if an ace could be prepended
to a 2 and 3 (giving 5 points) or appended to a queen and king (giving 15 points),
then the latter is assumed.

Similarly, a set may consist of 3 or 4 standalone cards (e.g. 4H 4D 4S) or one
card appened to a previously played set of three.

Finally, the Bot discards (unless the game is over):

**discard [card]**

Every command sent from a Bot to the Arena is forwarded verbatim to every other Bot.

When the game ends (whether due to victory or for some other reason), the Arena notifies
all Bots, causing them to shut down:

**gameover**