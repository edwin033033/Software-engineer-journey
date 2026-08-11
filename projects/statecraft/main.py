#statecraft v0.0.1
#Government & Geopolitics Simulator

import os

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

country_name = "United States of America"

month = 1
year = 2026

months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
    ]

while True:
    clear_screen()
    print("\n" + "=" * 50)
    print("                 STATECRAFT v0.0.1")
    print("               Government & Geopolitics Simulator")
    print("=" * 50)

    print(f"\nCountry: {country_name}")
    print(f"Date: {months[month - 1]} {year}")

    print("\nMAIN MENU")
    print("-" * 50)
    print("1. View National Statistics")
    print("2. Advance to Next Month")
    print("3. Exit Game")

    choice = input("\nPresident, please enter your choice (1-3): ")

    if choice == "1":
        print("\nNational Statistics are coming soon! Stay tuned for updates.")
        input("\nPress Enter to return to the main menu...")

    elif choice == "2":
        month += 1
        if month > 12:
            month = 1
            year += 1
        print(f"\nAdvancing to {months[month - 1]} {year}...")
        input("\nPress Enter to return to the main menu...")
        
    elif choice == "3":
        print("\nThank you for playing Statecraft!")
        break

    else:
        print("\nInvalid choice. Please enter a number between 1 and 3.")