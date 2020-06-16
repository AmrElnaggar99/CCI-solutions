from linkedlist import Node, LinkedList


def sumLists_normal_order(list_1, list_2):
    num1 = ""
    num2 = ""
    node_1 = list_1.head
    node_2 = list_2.head

    while(node_1):
        num1 += str(node_1.val)
        node_1 = node_1.next
    while(node_2):
        num2 += str(node_2.val)
        node_2 = node_2.next
    out_num = int(num1) + int(num2)
    out_list = LinkedList()
    for num in str(out_num):
        out_list.append(int(num))

    return out_list


def sumLists_reverse_order(list_1, list_2):
    output_list = LinkedList()
    carry_out = 0
    node_1 = list_1.head
    node_2 = list_2.head

    # we need to go in the loop if we have only a carry (in case of 617+623) or only one of the nodes (in case of 716+32)
    while node_1 or node_2 or carry_out != 0:
        if node_1 == None and node_2:
            output_dig = (carry_out + 0 + node_2.val) % 10
            carry_out = (carry_out + 0 + node_2.val) // 10
        elif node_2 == None and node_1:
            output_dig = (carry_out + node_1.val + 0) % 10
            carry_out = (carry_out + node_1.val + 0) // 10
        elif node_1 and node_2:
            output_dig = (carry_out + node_1.val + node_2.val) % 10
            carry_out = (carry_out + node_2.val + node_1.val) // 10
        else:
            output_dig = (carry_out + 0 + 0) % 10
            carry_out = (carry_out + 0 + 0) // 10

        output_list.append(output_dig)

        # This condition is only needed because in the case of (617+623) node_1 and node_2 will actually be None, so we shouldn't enter these if conditions.
        if node_1:
            node_1 = node_1.next
        if node_2:
            node_2 = node_2.next
    return output_list

# TESTS


print("=== Reverse Order Test")
# 617 + 623 = 1240
list_1 = LinkedList()
for elem in [7, 1, 6]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [3, 2, 6]:
    list_2.append(elem)

sumLists_reverse_order(list_1, list_2).printList()

# 617 + 23 = 640
list_1 = LinkedList()
for elem in [7, 1, 6]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [3, 2]:
    list_2.append(elem)

sumLists_reverse_order(list_1, list_2).printList()

# 617 + 295 = 912
list_1 = LinkedList()
for elem in [7, 1, 6]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [5, 9, 2]:
    list_2.append(elem)

sumLists_reverse_order(list_1, list_2).printList()

print("=== Normal Order Test")

# 617 + 623 = 1240
list_1 = LinkedList()
for elem in [6, 1, 7]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [6, 2, 3]:
    list_2.append(elem)

sumLists_normal_order(list_1, list_2).printList()

# 617 + 23 = 640
list_1 = LinkedList()
for elem in [6, 1, 7]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [2, 3]:
    list_2.append(elem)

sumLists_normal_order(list_1, list_2).printList()

# 617 + 295 = 912
list_1 = LinkedList()
for elem in [6, 1, 7]:
    list_1.append(elem)

list_2 = LinkedList()
for elem in [2, 9, 5]:
    list_2.append(elem)

sumLists_normal_order(list_1, list_2).printList()


# The output should be like this
# === Reverse Order Test
# 0 => 4 => 2 => 1 =>
# 0 => 4 => 6 =>
# 2 => 1 => 9 =>
# === Normal Order Test
# 1 => 2 => 4 => 0 =>
# 6 => 4 => 0 =>
# 9 => 1 => 2 =>

# This solution should be O(n) time and O(n) space
