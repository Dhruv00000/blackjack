# Importing the essential function from a module.
from random import randint

# Setting the values of both hands to random integers between 1 and 22.
hand = randint(1,22)
dealer = randint(1,22)

# A loop that keeps on executing till either the dealer or player win or lose.
while hand < 21 and dealer < 21:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}               {hand}\n\n")

    move = input("Enter your move (stand/hit)\n\n>").lower()
  
    if move == "hit":

        # Selecting a random card from the deck.
        hand += randint(1,13)

    elif move == "stand":

        dealer += randint(1,13)

    else:

        print("Unkown command.")
        exit

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\n")

# Conditions that cdetermine who won.
if hand > 21:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\nBust! You lost.")

elif dealer > 21:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\nDealer bust! Victory.")

elif hand == dealer:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\nPush! Noone won.")

elif hand == 21:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\nBlackjack! Victory.")

else:

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\nDealer blackjack! You lost.")