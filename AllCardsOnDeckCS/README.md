# AllCardsOnDeckCS

# PEDAC

P

- Model a deck of 52 **shuffled** playing cards that represent combinations of suits and ranks/faces. Only display the top (first?) two cards (position 1 and 2 -- is this index 0 and 1) from the deck.

E

- Ace of Diamonds, 2 of Hearts, 3 of clubs, .... (52 cards)
  - The top two are Ace of Diamonds and 2 of Hearts

D

- Strings that represent the card "Ace of Diamonds", etc.
- List or an array to represent the deck of 52 cards.
- integers to be indexes (we see that in the shuffle)
- Random numbers (how do we do this???)

A

- Make a list of strings called "Deck"
  - Approach 1: Just make a new list and write out all 52 card possibilities
  - Approach 2: Use the list of suits and the list of ranks to **combine** that into a new list (saves a lot of typing)
- Shuffle the list. Hooray, we were given an algorithm for this.
- Get the first card in the deck and display it
- Get the second card in the deck and display it
