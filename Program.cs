// The default code.
using System;

namespace blackjack {

    class Program {

        static void Main(string[] args) {

            // Initializing the random object.
            Random rnd = new Random();

            int hand = rnd.Next(1, 22);
            int dealer = rnd.Next(1, 22);

            // Asking the user for a move until either the dealer or the player wins or loses.
            while (hand < 21 && dealer < 21) {

                // Showing the current amount on both hands.
                Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\n");

                Console.Write("Enter your move (stand/hit)\n\n>");
                string move = Console.ReadLine();
                move.ToLower();

                // Drawing a card for either the dealer or the player depending on the input.
                if (move == "hit") hand += rnd.Next(1, 13);

                else if (move == "stand") dealer += rnd.Next(1, 13);

                else Console.WriteLine("Unkown command.");

                Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\n");

            }

            // Determining the results according to the hands.
            if (hand > 21) Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\nBust! You lost.");

            else if (dealer > 21) Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\nDealer bust! Victory.");

            else if (hand == dealer) Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\nPush! Noone won.");

            else if (hand == 21) Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\nBlackjack! Victory.");

            else Console.WriteLine("\nDelaer hand:     Your hand:\n\n" + dealer + "               " + hand + "\n\nDealer blackjack! You lost.");

            // Stopping the window from instantly closing.
            Console.Write("\nPress enter to exit...");
            Console.ReadLine();

        }

    }

}