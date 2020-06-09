def PalindromePermutation(in_string):
    odd_counter = 0
    letters_dict = {}
    mod_in_string = [x for x in in_string.lower() if x.isalpha()]
    # .isalpha() returns true if you have a character
    for x in mod_in_string:
        letters_dict[x] = 0
    for x in mod_in_string:
        letters_dict[x] += 1

    for count in letters_dict.values():
        # letters_dict.values() returns a list of all values in the dict
        if count % 2:
            odd_counter += 1
    return odd_counter <= 1


# TESTS
print(PalindromePermutation('Mr. owl ate my Metal worm'))  # True
print(PalindromePermutation('Tact Coa'))  # True
print(PalindromePermutation(''))  # True
print(PalindromePermutation('amr'))  # False

# This should be O(n) time and O(n) space
