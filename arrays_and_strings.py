from collections import defaultdict

def assert_equals(test_result, expected_result):
    if test_result == expected_result:
        return "Test passed."
    else:
        return "Test failed."

# Is Unique:
# Implement an algorithm to determine if a string has all unique characters.
# What if you cannot use additional data structures?
def is_unique(ss):
    counts = defaultdict(int)
    for char in list(ss):
        counts[char] += 1

    for key, value in counts.items():
        if value > 1:
            return False
    return True

print('is_unique_test_1: ', assert_equals(is_unique('a;sdklfj'), True))
print('is_unique_test_2: ', assert_equals(is_unique('asdf;lkja'), False))


# Check Permutation:
# Given two strings, write a method to decide if one is a permutation of the other.

def check_counts(ss):
    counts = defaultdict(int)
    for char in list(ss):
        counts[char] += 1
    return counts

def check_permutation(ss1, ss2):
    if len(ss1) != len(ss2):
        return False

    counts1 = check_counts(ss1)
    counts2 = check_counts(ss2)

    for key, value in counts1.items():
        if key not in counts2:
            return False

    return True

print("check_permutation_test1: ", assert_equals(check_permutation('a;sdklfj', 'jkl;asdf'), True));
print("check_permutation_test2: ", assert_equals(check_permutation('asdf;lkja', 'a;sdkfajd'), False));
