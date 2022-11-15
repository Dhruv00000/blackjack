from random import randint

# Dealing hands.
hand = randint(1,22)
dealer = randint(1,22)

while hand < 21 and dealer < 21:

    print(f"\nDealer hand:     Your hand:\n\n{dealer}               {hand}\n\n")

    move = input("Enter your move (stand/hit)\n\n>").lower()
  
    if move == "hit":

        # Drawing.
        hand += randint(1,13)

    elif move == "stand":

        dealer += randint(1,13)

    else:

        print("Unkown command.")

    print(f"\nDelaer hand:     Your hand:\n\n{dealer}            {hand}\n\n")

# Conclusion.
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