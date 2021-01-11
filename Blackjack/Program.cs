﻿using System;
using System.Collections.Generic;

namespace Blackjack
{
    class Hand
    {
        // Property that is a list of cards this hand is holding!
        public List<Card> CardsInHand { get; set; } = new List<Card>();

        // cardToPlaceInHand is the name for the variable that receives
        // whatever we send into the method.
        public void PlaceInHand(Card cardToPlaceInHand)
        {
            CardsInHand.Add(cardToPlaceInHand);
        }

        // Returns the sum of all the values of all the cards currently
        // in the list this object is holding.
        public int TotalValue()
        {
            // Missing PEDAC!
            // How do we total the cards in the hand?
            // A
            //   - Start with a grand total of 0
            var grandTotal = 0;
            //   - For each card in the hand do the following
            foreach (var currentCardInHand in CardsInHand)
            {
                //     - Get the value of the current card
                var currentCardValue = currentCardInHand.Value();

                //     - Add that value to the grand total
                grandTotal = grandTotal + currentCardValue;

            }
            //   - When done, return the grand total
            return grandTotal;
        }
    }

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

    class Program
    {

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

            // for rightIndex from n - 1 down to 1 do:
            for (var rightIndex = deck.Count - 1; rightIndex >= 1; rightIndex--)
            {
                var randomNumberGenerator = new Random();

                //   leftIndex = random integer that is greater than or equal to 0 and LESS than rightIndex
                var leftIndex = randomNumberGenerator.Next(rightIndex);

                //   Now swap the values at rightIndex and leftIndex by doing this:
                //     leftCard = the value from deck[rightIndex]
                var leftCard = deck[rightIndex];
                //     rightCard = the value from deck[leftIndex]
                var rightCard = deck[leftIndex];
                //     deck[rightIndex] = rightCard
                deck[rightIndex] = rightCard;
                //     deck[leftIndex] = leftCard
                deck[leftIndex] = leftCard;
            }

            // 3.  Create a player hand
            var playerHand = new Hand();

            // 4.  Create a dealer hand
            var dealerHand = new Hand();

            // 5.  Ask the deck for a card
            var firstPlayerCard = deck[0];
            deck.Remove(firstPlayerCard);

            // 5b. and place it in the player hand
            //
            // When this is method is run, the variable firstPlayerCard
            // will be sent to the method and inside the method referred
            // to as cardToPlaceInHand
            playerHand.PlaceInHand(firstPlayerCard);

            // 6.  Ask the deck for a card
            var secondPlayerCard = deck[0];
            deck.Remove(secondPlayerCard);

            // 6b. and place it in the player hand
            playerHand.PlaceInHand(secondPlayerCard);

            // 7.  Ask the deck for a card and place it in the dealer hand
            var firstDealerCard = deck[0];
            deck.Remove(firstDealerCard);
            dealerHand.PlaceInHand(firstDealerCard);

            // 8.  Ask the deck for a card and place it in the dealer hand
            var secondDealerCard = deck[0];
            deck.Remove(secondDealerCard);
            dealerHand.PlaceInHand(secondDealerCard);

            // Declare the variable early, and we have to specify
            string hitOrStand;

            // Starts a loop and does the lop AT LEAST *ONCE*
            do
            {
                // 9.  Show the player the cards in their hand
                //
                // Problem: Have a list of cards and I want to print them all
                // Example:    Card with Face="A" Suit="Club" , Card with Face="J" Suit="Diamond", ...
                //             Output:
                //             You have the A of Club
                //             You have the J of Diamond
                // D - List, Card, strings of Face and Suit
                // A - for each card in our list of cards, do the following step
                foreach (var cardInPlayerHand in playerHand.CardsInHand)
                {
                    //     - print a string that looks like   You have the <PUT THE FACE HERE> of <PUT THE SUIT HER>
                    Console.WriteLine($"You have the {cardInPlayerHand.Face} of {cardInPlayerHand.Suit}");
                }

                // 9b. and the TotalValue of their Hand
                // This asks the playerHand OBJECT (of class type Hand) to do it's TotalValue behavior
                // which we expect to to return a number
                var thePlayerTotalValue = playerHand.TotalValue();

                // Print that out!
                Console.WriteLine($"Your hand is worth {thePlayerTotalValue}");

                // 10. If they have BUSTED, then goto step 15
                // 11. Ask the player if they want to HIT or STAND
                Console.Write("What do you want? HIT or STAND? ");
                hitOrStand = Console.ReadLine();

                // 12. If HIT
                if (hitOrStand == "HIT")
                {
                    //     - Ask the deck for a card and place it in the player hand, repeat step 10
                    var cardFromSelectingHitOption = deck[0];
                    deck.Remove(cardFromSelectingHitOption);

                    // 6b. and place it in the player hand
                    playerHand.PlaceInHand(cardFromSelectingHitOption);
                }
            } while (hitOrStand == "HIT" && playerHand.TotalValue() < 21);

            if (playerHand.TotalValue() > 21)
            {
                foreach (var cardInPlayerHand in playerHand.CardsInHand)
                {
                    //     - print a string that looks like   You have the <PUT THE FACE HERE> of <PUT THE SUIT HER>
                    Console.WriteLine($"You have the {cardInPlayerHand.Face} of {cardInPlayerHand.Suit}");
                }
                Console.WriteLine($"Your hand is worth {playerHand.TotalValue()}");
                Console.WriteLine();
                Console.WriteLine("You have busted");

            }
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
