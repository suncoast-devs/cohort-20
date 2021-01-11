﻿using System;
using System.Collections.Generic;

namespace Blackjack
{
    class Program
    {
        class Card
        {
            public string Suit { get; set; }
            public string Face { get; set; }

            // Value as a PROPERTY
            // public int Value { get; set; }

            public int Value()
            {
                switch (Face)
                {
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        return int.Parse(Face);

                    case "10":
                    case "Jack":
                    case "Queen":
                    case "King":
                        return 10;

                    case "Ace":
                        return 11;

                    default:
                        // WTF?
                        return 0;
                }
            }
        }

        static void Main(string[] args)
        {
            // 1.  Create a new deck
            //     PEDAC ^^^^ - Properties: A list of 52 cards
            //     Algorithm for making a list of 52 cards

            //         Make a blank list of cards
            var deck = new List<Card>();

            //         Suits is a list of "Club", "Diamond", "Heart", or "Spade"
            var suits = new List<string>() { "Club", "Diamond", "Heart", "Spade" };
            //         Faces is a list of 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, or Ace
            var faces = new List<string>() { "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace" };

            //         ```
            //         Go through all of the suits one at a time and in order
            foreach (var currentSuit in suits)
            {

                //             Go through all of the faces one a time and in order
                foreach (var currentFace in faces)
                {
                    //                 With the current suit and the current face, make a new card
                    var newCard = new Card();

                    // This line of code uses the *SET* aspect of the Suit property
                    newCard.Suit = currentSuit;

                    // This line of code uses the *SET* aspect of the Face property
                    newCard.Face = currentFace;

                    // This uses the *GET* aspect of the SUIT property
                    // Console.WriteLine($"The {newCard.Face} of {newCard.Suit} is worth {newCard.Value()}");

                    //                 Add that card to the list of cards
                    deck.Add(newCard);
                    //             Go to the card and loop again
                    //         Go to the next suit and loop again
                }
            }
            //         ```

            // 2.  Ask the deck to make a new shuffled 52 cards
            // 3.  Create a player hand
            // 4.  Create a dealer hand
            // 5.  Ask the deck for a card and place it in the player hand
            // 6.  Ask the deck for a card and place it in the player hand
            // 7.  Ask the deck for a card and place it in the dealer hand
            // 8.  Ask the deck for a card and place it in the dealer hand
            // 9.  Show the player the cards in their hand and the TotalValue of their Hand
            // 10. If they have BUSTED, then goto step 15
            // 11. Ask the player if they want to HIT or STAND
            // 12. If HIT
            //     - Ask the deck for a card and place it in the player hand, repeat step 10
            // 13. If STAND continue on
            // 14. If the dealer has busted then goto step 17
            // 15. If the dealer has less than 17
            //     - Add a card to the dealer hand and go back to 14
            // 16. Show the dealer's hand TotalValue
            // 17. If the player busted show "DEALER WINS"
            // 18. If the dealer busted show "PLAYER WINS"
            // 19. If the dealer's hand is more than the player's hand then show "DEALER WINS", else show "PLAYER WINS"
            // 20. If the value of the hands are even, show "DEALER WINS"

        }
    }
}
