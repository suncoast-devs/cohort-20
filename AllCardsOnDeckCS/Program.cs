using System;
using System.Collections.Generic;

namespace AllCardsOnDeckCS
{
    class Program
    {
        static void Main(string[] args)
        {
            // - Make a list of strings called "Deck"
            //   - Approach 1: Just make a new list OF STRINGS, CALLED DECK and write out all 52 card possibilities
            var deck = new List<string>() { "Ace of Clubs", "Two of Clubs", "Three of Clubs", "Four of Clubs", "Five of Clubs", "Six of Clubs", "Seven of Clubs", "Eight of Clubs", "Nine of Clubs", "Ten of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs", "Ace of Spades", "Two of Spades", "Three of Spades", "Four of Spades", "Five of Spades", "Six of Spades", "Seven of Spades", "Eight of Spades", "Nine of Spades", "Ten of Spades", "Jack of Spades", "Queen of Spades", "King of Spades", "Ace of Hearts", "Two of Hearts", "Three of Hearts", "Four of Hearts", "Five of Hearts", "Six of Hearts", "Seven of Hearts", "Eight of Hearts", "Nine of Hearts", "Ten of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts", "Ace of Diamonds", "Two of Diamonds", "Three of Diamonds", "Four of Diamonds", "Five of Diamonds", "Six of Diamonds", "Seven of Diamonds", "Eight of Diamonds", "Nine of Diamonds", "Ten of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds" };

            //   - Approach 2: Use the list of suits and the list of ranks to **combine** that into a new list (saves a lot of typing)

            // - Shuffle the list. Hooray, we were given an algorithm for this.

            // numberOfCards = length of our deck
            var numberOfCards = deck.Count;

            // for rightIndex from numberOfCards - 1 down to 1 do:
            for (var rightIndex = deck.Count - 1; rightIndex >= 1; rightIndex--)
            {
                //   leftIndex = random integer that is greater than or equal to 0 and LESS than rightIndex. See the section "How do we get a random integer")
                var randomNumberGenerator = new Random();
                var leftIndex = randomNumberGenerator.Next(rightIndex);

                //   Now swap the values at rightIndex and leftIndex by doing this:
                //     leftCard = the value from deck[leftIndex]
                var leftCard = deck[leftIndex];
                //     rightCard = the value from deck[rightIndex]
                var rightCard = deck[rightIndex];

                //     deck[rightIndex] = leftCard
                deck[rightIndex] = leftCard;
                //     deck[leftIndex] = rightCard
                deck[leftIndex] = rightCard;
            }

            // - Get the first card in the deck and display it
            var firstCard = deck[0];
            Console.WriteLine(firstCard);

            // - Get the second card in the deck and display it
            var secondCard = deck[1];
            Console.WriteLine(secondCard);

        }
    }
}
