ID_FILE = 'Server-Side\id_saver_file.txt'
ID_MAKER = {
    "messeges": 1,
    "chats": 4,
    "users": 7
}


def make_id(line_number_arg: dict) -> int:
    with open(ID_FILE, 'r') as file:
        lines = file.readlines()

    # Get the value from the 5th line and increment it
    line_number = line_number_arg  # Line number is 0-based
    try:
        current_value = int(lines[line_number].strip())  # Convert to integer
        new_value = current_value + 1
    except IndexError:
        print(f"Line {line_number + 1} doesn't exist in the file.")
        exit(1)
    except ValueError:
        print(f"Value on line {line_number + 1} is not an integer.")
        exit(1)

    # Update the 5th line with the new value
    lines[line_number] = str(new_value) + '\n'

    # Write the updated content back to the file
    with open(ID_FILE, 'w') as file:
        file.writelines(lines)

    return current_value
