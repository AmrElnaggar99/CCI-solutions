in_string = "My John Smith   "


def URLify(in_string):
    in_string = "%20".join(in_string.split())
    return in_string


print(URLify(""))

# This solution should be O(n) time and O(1) spaxe
