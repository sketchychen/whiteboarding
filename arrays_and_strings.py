from collections import defaultdict

def is_unique(ss):
    counts = defaultdict(int)
    for char in list(ss):
        counts[char] += 1

    for key, value in counts.items():
        if value > 1:
            return False
    return True

is_unique_test_1 = 'a;sdklfj'
is_unique_test_2 = 'asdf;lkja'

print('is_unique_test_1: ', is_unique(is_unique_test_1))
print('is_unique_test_2: ', is_unique(is_unique_test_2))
