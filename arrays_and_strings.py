from collections import defaultdict
import re

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

print('is_unique Test 1: ', assert_equals(is_unique('a;sdklfj'), True))
print('is_unique Test 2: ', assert_equals(is_unique('asdf;lkja'), False))


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

print("check_permutation Test 1: ", assert_equals(check_permutation('a;sdklfj', 'jkl;asdf'), True));
print("check_permutation Test 2: ", assert_equals(check_permutation('asdf;lkja', 'a;sdkfajd'), False));

# URLify:
# Write a method to replace all spaces in a string with '%20'.
# You may assume that the string has sufficient space at the end to hold the additional characters,
# and that you are given the "true" length of the string.
# (Note: If implementing in Java, please use a character array so that you can perform this operation in place.
def URLify(ss):
    return ss.strip().replace(" ", "%20")

print("URLify Test 1: ", assert_equals(URLify(' asdf fdsa df   '), 'asdf%20fdsa%20df'))


# Palindrome Permutation:
# Given a string, write a function to check if it is a permutation of a palindrome.
# The palindrome does not need to be limited to just dictionary words.
def palindrome_permutation(ss):
    ss_chars = re.sub(r'\s+', '', ss.lower())
    counts = defaultdict(int)
    for char in ss_chars:
        counts[char] += 1
    odd_counts = 0
    for key in counts:
        if counts[key]%2 != 0:
            odd_counts += 1
    if odd_counts > 1:
        return False
    else:
        return True

print("palindrome_permutation Test 1: ", assert_equals(palindrome_permutation("Tact coa"), True))
print("palindrome_permutation Test 2: ", assert_equals(palindrome_permutation("Tact   coa"), True))
print("palindrome_permutation Test 3: ", assert_equals(palindrome_permutation("Tactt coa"), False))
print("palindrome_permutation Test 4: ", assert_equals(palindrome_permutation("Tactt dddcoa"), False))
