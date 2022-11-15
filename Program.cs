// The default code.
using System;

namespace blackjack {

    class Program {

        static void Main(string[] args) {

            // Initializing the random object.
            Random rnd = new Random();

            int hand = rnd.Next(1, 22);
            int dealer = rnd.Next(1, 22);

            Console.WriteLine($"\nDealer hand:     Your hand:\n\n{dealer}               {hand}\n\n");

            while (hand < 21 && dealer < 21) {

                Console.Write("Enter your move (stand/hit)\n\n>");
                string move = Console.ReadLine();
                move.ToLower();

                if (move == "hit") hand += rnd.Next(1, 13);

                else if (move == "stand") dealer += rnd.Next(1, 13);

                else Console.WriteLine("Unkown command.");

                Console.WriteLine($"\nDelaer hand:     Your hand:\n\n{dealer}               {hand}");

            }

            // Conclusion.
            if (hand > 21) Console.WriteLine("\nBust! You lost.");

            else if (dealer > 21) Console.WriteLine($"\nDealer bust! Victory.");

            else if (hand == dealer) Console.WriteLine($"\nPush! Noone won.");

            else if (hand == 21) Console.WriteLine($"\nBlackjack! Victory.");

            else Console.WriteLine($"\nDealer blackjack! You lost.");

            // Stopping the window from instantly closing.
            Console.Write("\nPress enter to exit...");
            Console.ReadLine();

        }

    }

}