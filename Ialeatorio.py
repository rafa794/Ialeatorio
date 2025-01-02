import random
import tkinter as tk
from tkinter import messagebox


def generate_eurodreams():
    main_numbers = random.sample(range(1, 41), 6)  # 6 numbers from 1 to 40
    dream = random.randint(1, 5)  # Dream number from 1 to 5
    result = f"Eurodreams\nNúmeros: {', '.join(map(str, main_numbers))}\nSueño: {dream}"
    display_result(result)


def generate_primitiva():
    main_numbers = random.sample(range(1, 41), 6)  # 6 numbers from 1 to 40
    reintegro = random.randint(0, 9)  # Reintegro from 0 to 9
    result = f"Primitiva\nNúmeros: {', '.join(map(str, main_numbers))}\nReintegro: {reintegro}"
    display_result(result)


def generate_bonoloto():
    combinations = []
    for _ in range(2):  # Two bets
        main_numbers = random.sample(range(1, 41), 6)  # 6 numbers from 1 to 40
        combinations.append(', '.join(map(str, main_numbers)))
    result = f"Bonoloto\nApuesta 1: {combinations[0]}\nApuesta 2: {combinations[1]}"
    display_result(result)


def generate_euromillon():
    main_numbers = random.sample(range(1, 51), 5)  # 5 numbers from 1 to 50
    lucky_stars = random.sample(range(1, 13), 2)  # 2 lucky stars from 1 to 12
    result = (f"Euromillón\nNúmeros: {', '.join(map(str, main_numbers))}\n"
              f"Estrellas: {', '.join(map(str, lucky_stars))}")
    display_result(result)


def display_result(result):
    result_window = tk.Toplevel(root)
    result_window.title("Resultado")
    result_label = tk.Label(result_window, text=result, font=("Arial", 14), justify="center", pady=10, padx=20)
    result_label.pack()
    close_button = tk.Button(result_window, text="Cerrar", command=result_window.destroy, font=("Arial", 12))
    close_button.pack(pady=10)


# Main UI
root = tk.Tk()
root.title("Generador de Loterías")
root.geometry("400x300")

title_label = tk.Label(root, text="Elige tu juego", font=("Arial", 16), pady=20)
title_label.pack()

button_frame = tk.Frame(root)
button_frame.pack(pady=10)

eurodreams_button = tk.Button(button_frame, text="Eurodreams", command=generate_eurodreams, width=20, font=("Arial", 12))
eurodreams_button.grid(row=0, column=0, pady=5, padx=10)

primitiva_button = tk.Button(button_frame, text="Primitiva", command=generate_primitiva, width=20, font=("Arial", 12))
primitiva_button.grid(row=1, column=0, pady=5, padx=10)

bonoloto_button = tk.Button(button_frame, text="Bonoloto", command=generate_bonoloto, width=20, font=("Arial", 12))
bonoloto_button.grid(row=2, column=0, pady=5, padx=10)

euromillon_button = tk.Button(button_frame, text="Euromillón", command=generate_euromillon, width=20, font=("Arial", 12))
euromillon_button.grid(row=3, column=0, pady=5, padx=10)

root.mainloop()
