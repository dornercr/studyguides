const topics = {
python_fundamentals: {
    title: "Python Variables, Expressions, and Statements",
    sections: [
        {
            title: "Constants",
            content: `Constants refer to values that remain unchanged throughout the execution of a program. These can include numbers, text strings, and more.

Examples:
print(45)  # Outputs: 45
print(3.1415)  # Outputs: 3.1415
print('Welcome to Python!')  # Outputs: Welcome to Python`
        },
        {
            title: "Reserved Words",
            content: `Reserved words are predefined keywords in Python that have specific functions. They cannot be used as variable names.

Examples:
- False, True, None
- for, if, else, while
- try, except, finally`
        },
        {
            title: "Variables",
            content: `Variables are names assigned to data stored in memory. They can hold various types of data, and their value can change during program execution.

Example:
length = 5  # Assign 5 to variable length
width = 10  # Assign 10 to variable width
area = length * width  # Calculate area by multiplying length and width`
        },
        {
            title: "Variable Naming Rules",
            content: `When naming variables in Python:
- Names must begin with a letter or underscore.
- They can include letters, numbers, and underscores.
- Variable names are case-sensitive.

Good examples:
speed_limit, student_count, _active

Bad examples:
123score, %profit, price&cost`
        },
        {
            title: "Mnemonic Variable Names",
            content: `A good practice in programming is to use mnemonic variable names, which are descriptive and make it easier to remember what the variable stores.

Example:
hours_worked = 40
hourly_rate = 25
total_pay = hours_worked * hourly_rate  # Clearly expresses what the code is doing`
        },
        {
            title: "Assignment Statements",
            content: `An assignment statement in Python is used to assign a value to a variable. The expression on the right-hand side is evaluated, and the result is stored in the variable on the left.

Example:
score = 50 + 30  # The result of 50 + 30 is assigned to score`
        },
        {
            title: "Numeric Expressions",
            content: `Python uses various operators to perform arithmetic operations in numeric expressions.

Examples:
- Addition: 5 + 3  # Outputs: 8
- Subtraction: 10 - 4  # Outputs: 6
- Multiplication: 6 * 7  # Outputs: 42
- Division: 16 / 2  # Outputs: 8.0`
        },
        {
            title: "Operator Precedence",
            content: `When multiple operators are used in an expression, Python follows a set of precedence rules to determine the order of operations.

Example:
result = 3 + 4 * 2  # Multiplication happens first, so result is 11, not 14`
        },
        {
            title: "Type Conversions",
            content: `Python can convert between data types using built-in functions like int(), float(), and str().

Example:
age = "30"
age_as_int = int(age)  # Convert string "30" to integer 30
height = 5.7
height_as_str = str(height)  # Convert float 5.7 to string "5.7"`
        },
        {
            title: "User Input",
            content: `The input() function allows you to take input from the user. The input is always returned as a string, so it often needs to be converted to other types.

Example:
name = input("Enter your name: ")
print("Hello, " + name + "!")  # Greets the user with their input`
        },
        {
            title: "Comments in Python",
            content: `In Python, comments are lines of text ignored by the interpreter. They are useful for documenting code and leaving notes for yourself or other programmers.

Example:
# This is a comment
# The line below assigns 100 to the variable score
score = 100`
        },
        {
    "title": "Integer Division",
    "content": `In Python, division between two integers will result in a floating-point value.

Example:
result = 9 / 2  # Outputs: 4.5
If you want an integer result, you can use integer division with the // operator:

Example:
result = 9 // 2  # Outputs: 4`
},
{
    "title": "String Conversions",
    "content": `You can convert between strings and other data types using functions like int() and float(). If the string doesn't contain numeric characters, it will raise an error.

Example:
num_str = '123'
num = int(num_str)  # Converts the string '123' to the integer 123`
},
{
    "title": "Type Conversions",
    "content": `Python can implicitly convert between types when needed, but you can also explicitly convert types using built-in functions like int(), float(), and str().

Example:
float_num = 10.5
int_num = int(float_num)  # Converts float 10.5 to integer 10`
},
{
    "title": "Order of Operations",
    "content": `Python follows specific rules for the order of operations, also known as operator precedence. This means certain operations will be performed before others in complex expressions.

Precedence Order:
1. Parentheses
2. Exponentiation (**)
3. Multiplication, Division, and Modulus (*, /, %)
4. Addition and Subtraction (+, -)

Example:
result = 2 + 3 * 4  # Outputs 14, not 20, because multiplication is performed first`
},
{
    "title": "User Input and Conversion",
    "content": `The input() function captures user input as a string. To use it as a number, you must convert it to the appropriate type using int() or float().

Example:
user_input = input("Enter a number: ")
num = int(user_input)  # Converts input to an integer`
},
{
    "title": "Type Matters",
    "content": `In Python, every value has a specific type, such as integers, strings, or floats. The type determines what operations you can perform on that value.

Example:
name = "Alice"
age = 30

You can use the type() function to check the type of any value.

Example:
print(type(name))  # Outputs: <class 'str'>
print(type(age))   # Outputs: <class 'int'>`
},
{
    "title": "Numeric Expressions with Examples",
    "content": `Python supports various mathematical operations like addition, subtraction, multiplication, and division. You can also use other operators like modulus (%) and exponentiation (**).

Examples:
Addition: 5 + 3  # Outputs: 8
Subtraction: 9 - 4  # Outputs: 5
Multiplication: 7 * 6  # Outputs: 42
Division: 10 / 2  # Outputs: 5.0
Modulus: 10 % 3  # Outputs: 1
Exponentiation: 2 ** 3  # Outputs: 8`
},
{
    "title": "Type Matters",
    "content": `In Python, every value has a specific type, such as integers, strings, or floats. The type determines what operations you can perform on that value.

Example:
name = "Alice"
age = 30

You can use the type() function to check the type of any value.

Example:
print(type(name))  # Outputs: <class 'str'>
print(type(age))   # Outputs: <class 'int'>`
},
{
    "title": "Numeric Expressions with Examples",
    "content": `Python supports various mathematical operations like addition, subtraction, multiplication, and division. You can also use other operators like modulus (%) and exponentiation (**).

Examples:
Addition: 5 + 3  # Outputs: 8
Subtraction: 9 - 4  # Outputs: 5
Multiplication: 7 * 6  # Outputs: 42
Division: 10 / 2  # Outputs: 5.0
Modulus: 10 % 3  # Outputs: 1
Exponentiation: 2 ** 3  # Outputs: 8`
}

    
    ]
},
python_algorithms_data_structures: {
    title: "Python Algorithms and Data Structures",
    sections: [
        {
            title: "Introduction to Algorithms",
            content: `Algorithms are step-by-step procedures or formulas for solving a problem. In Python, algorithms can be implemented using functions, loops, conditionals, and recursion. Common algorithm types include sorting, searching, and traversal algorithms.

Example:
A simple algorithm to find the maximum value in a list:
def find_max(arr):
    max_value = arr[0]
    for num in arr:
        if num > max_value:
            max_value = num
    return max_value`
        },
        {
            title: "Introduction to Data Structures",
            content: `Data structures are ways to store and organize data efficiently. Python provides several built-in data structures, including lists, tuples, sets, dictionaries, and more advanced structures like linked lists, stacks, and queues.

Example:
A list is a simple data structure:
my_list = [1, 2, 3, 4, 5]
You can access elements in the list using their index:
print(my_list[0])  # Outputs: 1`
        },
        {
            title: "Sorting Algorithms",
            content: `Sorting algorithms arrange data in a particular order (ascending or descending). Common sorting algorithms include:

- Bubble Sort
- Selection Sort
- Merge Sort
- Quick Sort

Example:
Bubble Sort Implementation:
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`
        },
        {
            title: "Searching Algorithms",
            content: `Searching algorithms are used to find specific elements in a dataset. Popular algorithms include:

- Linear Search
- Binary Search

Example:
Binary Search (requires sorted list):
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`
        },
        {
            title: "Linked Lists",
            content: `A linked list is a linear data structure where each element (node) contains a reference (pointer) to the next node in the sequence.

Example:
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node`
        },
        {
            title: "Stacks and Queues",
            content: `Stacks and queues are linear data structures that follow specific rules for adding and removing elements.

- Stack: Follows Last In, First Out (LIFO) principle.
- Queue: Follows First In, First Out (FIFO) principle.

Example (Stack):
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
    
    def is_empty(self):
        return len(self.stack) == 0

Example (Queue):
from collections import deque
queue = deque()
queue.append(10)  # Add to queue
queue.popleft()  # Remove from queue`
        },
        {
            title: "Trees",
            content: `A tree is a hierarchical data structure where each node has a value and references to its children. Common tree types include binary trees, binary search trees, and heaps.

Example (Binary Search Tree):
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

# Insert a new node in the binary search tree
def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root`
        },
        {
            title: "Graph Algorithms",
            content: `Graphs are data structures that consist of nodes (vertices) and edges connecting them. Common graph traversal algorithms include Depth-First Search (DFS) and Breadth-First Search (BFS).

Example (DFS):
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for next_node in graph[start]:
        if next_node not in visited:
            dfs(graph, next_node, visited)
    return visited`
        },
        {
            title: "Hash Tables",
            content: `A hash table is a data structure that maps keys to values using a hash function. Hash tables provide fast insertion, deletion, and lookup operations.

Example (Using Python dictionary):
hash_table = {}
hash_table['name'] = 'Alice'
hash_table['age'] = 25
print(hash_table['name'])  # Outputs: Alice`
        },
        {
            title: "Time and Space Complexity",
            content: `Time and space complexity help evaluate the efficiency of an algorithm. Time complexity refers to the amount of time an algorithm takes to run, while space complexity refers to the amount of memory it uses.

Common time complexities include:
- O(1): Constant time
- O(log n): Logarithmic time
- O(n): Linear time
- O(n^2): Quadratic time`
        }
    ]
},
    sorting_algorithms: {
        title: "Study Guide for Sorting Algorithms",
        sections: [
            {
                title: "Bubble Sort",
                content: `Definition: A simple comparison-based sorting algorithm where adjacent elements are repeatedly swapped if they are in the wrong order.
    Use Cases: Best for small datasets or when simplicity is required.
    Computational Complexity:
    - Worst: O(n²)
    - Average: O(n²)
    - Best: O(n)

    Python Example:
    def bubble_sort(arr):  # Define the function for bubble sort
        n = len(arr)  # Get the length of the array
        for i in range(n):  # Traverse the array
            for j in range(0, n-i-1):  # Traverse the array up to n-i-1
                if arr[j] > arr[j+1]:  # Compare adjacent elements
                    arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap if out of order`,
                mediaUrl: "https://www.youtube.com/watch?v=2DNItBUngrA"
            },
            {
                title: "Selection Sort",
                content: `Definition: Sorts an array by repeatedly finding the minimum element from the unsorted portion and swapping it with the first unsorted element.
    Use Cases: Useful for small datasets or when the cost of swapping elements is cheap.
    Computational Complexity:
    - Worst: O(n²)
    - Average: O(n²)
    - Best: O(n²)

    Python Example:
    def selection_sort(arr):  # Define the function for selection sort
        n = len(arr)  # Get the length of the array
        for i in range(n):  # Traverse the array
            min_idx = i  # Assume the minimum is the first unsorted element
            for j in range(i+1, n):  # Traverse the unsorted part of the array
                if arr[j] < arr[min_idx]:  # Find the minimum element
                    min_idx = j  # Update the index of the minimum element
            arr[i], arr[min_idx] = arr[min_idx], arr[i]  # Swap the minimum element with the first unsorted element`,
                mediaUrl: "https://www.youtube.com/watch?v=O6qX5xHXWpI"
            },
            {
                title: "Insertion Sort",
                content: `Definition: Builds a sorted array by taking one element at a time and inserting it into its correct position.
    Use Cases: Works well for nearly sorted or small datasets.
    Computational Complexity:
    - Worst: O(n²)
    - Average: O(n²)
    - Best: O(n)

    Python Example:
    def insertion_sort(arr):  # Define the function for insertion sort
        for i in range(1, len(arr)):  # Start with the second element
            key = arr[i]  # Store the current element as key
            j = i - 1  # Set j to the previous index
            while j >= 0 and arr[j] > key:  # Shift elements greater than key to the right
                arr[j + 1] = arr[j]  # Shift the element
                j -= 1  # Move to the next element
            arr[j + 1] = key  # Insert the key in the correct position`,
                mediaUrl: "https://www.youtube.com/watch?v=ZS2ruPQm9QQ"
            },
            {
                title: "Merge Sort",
                content: `Definition: A divide-and-conquer algorithm that splits the array into halves, recursively sorts them, and merges the sorted halves.
    Use Cases: Ideal for large datasets where O(n log n) is required.
    Computational Complexity:
    - Worst: O(n log n)
    - Average: O(n log n)
    - Best: O(n log n)

    Python Example:
    def merge_sort(arr):  # Define the function for merge sort
        if len(arr) > 1:  # Base case: if array contains more than 1 element
            mid = len(arr) // 2  # Find the middle index
            left_half = arr[:mid]  # Divide the array into left half
            right_half = arr[mid:]  # Divide the array into right half

            merge_sort(left_half)  # Recursively sort the left half
            merge_sort(right_half)  # Recursively sort the right half

            i = j = k = 0  # Initialize pointers for left_half, right_half, and arr
            while i < len(left_half) and j < len(right_half):  # Merge the two halves
                if left_half[i] < right_half[j]:  # Compare and insert the smaller element
                    arr[k] = left_half[i]
                    i += 1  # Move the pointer of the left half
                else:
                    arr[k] = right_half[j]
                    j += 1  # Move the pointer of the right half
                k += 1  # Move the pointer of the merged array

            while i < len(left_half):  # Copy the remaining elements of the left half
                arr[k] = left_half[i]
                i += 1
                k += 1

            while j < len(right_half):  # Copy the remaining elements of the right half
                arr[k] = right_half[j]
                j += 1
                k += 1`,
                mediaUrl: "https://www.youtube.com/watch?v=ho05egqcPl4"
            },
            {
                title: "Quick Sort",
                content: `Definition: A divide-and-conquer algorithm that selects a pivot, partitions the array around the pivot, and recursively sorts the subarrays.
    Use Cases: Preferred for large datasets with average-case O(n log n).
    Computational Complexity:
    - Worst: O(n²)
    - Average: O(n log n)
    - Best: O(n log n)

    Python Example:
    def quick_sort(arr):  # Define the function for quick sort
        if len(arr) <= 1:  # Base case: return array if it contains 0 or 1 element
            return arr
        pivot = arr[len(arr) // 2]  # Choose a pivot element
        left = [x for x in arr if x < pivot]  # Elements less than pivot
        middle = [x for x in arr if x == pivot]  # Elements equal to pivot
        right = [x for x in arr if x > pivot]  # Elements greater than pivot
        return quick_sort(left) + middle + quick_sort(right)  # Recursively sort and combine the subarrays`,
                mediaUrl: "https://www.youtube.com/watch?v=pM-6r5xsNEY"
            },
            {
                title: "Summary",
                content: `1. Bubble Sort: Simple but inefficient, O(n²), useful for small datasets.
    2. Selection Sort: Simple but inefficient, O(n²), good for small datasets where swaps are inexpensive.
    3. Insertion Sort: Efficient for small or nearly sorted datasets, O(n) in the best case.
    4. Merge Sort: Efficient for large datasets, O(n log n), good for stable sorting.
    5. Quick Sort: Highly efficient, O(n log n) on average, preferred for large datasets.`
            },
            {
            title: "Heap Sort",
            content: `Definition: A comparison-based sorting algorithm that uses a binary heap data structure to create a sorted array.
Use Cases: Ideal for large datasets, with guaranteed O(n log n) complexity.
Computational Complexity:
- Worst: O(n log n)
- Average: O(n log n)
- Best: O(n log n)

Python Example:
def heapify(arr, n, i):  # Heapify a subtree rooted at index i
    largest = i  # Assume the largest element is the root
    left = 2 * i + 1  # Calculate left child index
    right = 2 * i + 2  # Calculate right child index

    if left < n and arr[i] < arr[left]:  # Check if left child is larger
        largest = left  # Update largest if left child is larger

    if right < n and arr[largest] < arr[right]:  # Check if right child is larger
        largest = right  # Update largest if right child is larger

    if largest != i:  # If the largest is not root, swap with root
        arr[i], arr[largest] = arr[largest], arr[i]  # Swap the values
        heapify(arr, n, largest)  # Recursively heapify the affected subtree

def heap_sort(arr):  # Define the heap sort function
    n = len(arr)  # Get the length of the array
    for i in range(n // 2 - 1, -1, -1):  # Build the heap
        heapify(arr, n, i)  # Heapify each subtree

    for i in range(n-1, 0, -1):  # Extract elements from the heap
        arr[i], arr[0] = arr[0], arr[i]  # Move the current root to the end
        heapify(arr, i, 0)  # Call heapify on the reduced heap`
        },
        {
            title: "Shell Sort",
            content: `Definition: A generalization of insertion sort that allows the exchange of far-apart elements to reduce large inversions.
Use Cases: Useful for medium-sized datasets where an improvement over insertion sort is needed.
Computational Complexity:
- Worst: O(n²)
- Average: O(n log n)
- Best: O(n log n)

Python Example:
def shell_sort(arr):  # Define the shell sort function
    n = len(arr)  # Get the length of the array
    gap = n // 2  # Initialize the gap
    while gap > 0:  # Continue until gap reduces to 0
        for i in range(gap, n):  # Perform insertion sort with current gap
            temp = arr[i]  # Store the current element
            j = i  # Initialize j to the current index
            while j >= gap and arr[j - gap] > temp:  # Shift elements to the right
                arr[j] = arr[j - gap]  # Shift the element
                j -= gap  # Move to the next element
            arr[j] = temp  # Insert temp at its correct position
        gap //= 2  # Reduce the gap`
        },
        {
            title: "Radix Sort",
            content: `Definition: A non-comparison-based sorting algorithm that sorts numbers digit by digit, starting from the least significant digit.
Use Cases: Efficient for sorting large datasets of numbers or strings with fixed digit lengths.
Computational Complexity:
- Worst: O(nk), where k is the number of digits.
- Average: O(nk)
- Best: O(nk)

Python Example:
def counting_sort_for_radix(arr, exp):  # Perform counting sort based on the digit represented by exp
    n = len(arr)  # Get the length of the array
    output = [0] * n  # Initialize output array
    count = [0] * 10  # Initialize count array for digits

    for i in range(n):  # Count occurrences of each digit
        index = (arr[i] // exp) % 10  # Find the digit at exp position
        count[index] += 1  # Increment count for that digit

    for i in range(1, 10):  # Modify count array to store actual positions
        count[i] += count[i - 1]

    i = n - 1  # Build the output array
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1

    for i in range(len(arr)):  # Copy the output array to arr
        arr[i] = output[i]

def radix_sort(arr):  # Define the radix sort function
    max_num = max(arr)  # Find the maximum number to determine the number of digits
    exp = 1  # Start with the least significant digit
    while max_num // exp > 0:  # Process each digit
        counting_sort_for_radix(arr, exp)  # Apply counting sort for the current digit
        exp *= 10  # Move to the next digit`
        },
        {
            title: "Bucket Sort",
            content: `Definition: A sorting algorithm that distributes elements into a number of buckets and then sorts each bucket individually using another sorting algorithm.
Use Cases: Efficient for uniformly distributed data over a range.
Computational Complexity:
- Worst: O(n²)
- Average: O(n + k), where k is the number of buckets.
- Best: O(n + k)

Python Example:
def bucket_sort(arr):  # Define the bucket sort function
    bucket = []  # Initialize buckets
    for i in range(len(arr)):  # Create empty buckets
        bucket.append([])

    for num in arr:  # Put array elements into buckets
        index = int(10 * num)  # Calculate the bucket index
        bucket[index].append(num)  # Append the element to the corresponding bucket

    for i in range(len(arr)):  # Sort each bucket
        bucket[i].sort()

    result = []  # Gather the sorted elements
    for i in range(len(bucket)):
        result += bucket[i]  # Combine all buckets into the result array
    return result`
        },
        {
            title: "Counting Sort",
            content: `Definition: A non-comparison-based sorting algorithm that counts the occurrences of each element and places them in their correct position in the output array.
Use Cases: Best for sorting integers within a specific range.
Computational Complexity:
- Worst: O(n + k), where k is the range of the input.
- Average: O(n + k)
- Best: O(n + k)

Python Example:
def counting_sort(arr):  # Define the counting sort function
    max_val = max(arr)  # Find the maximum value
    count = [0] * (max_val + 1)  # Initialize count array
    output = [0] * len(arr)  # Initialize output array

    for num in arr:  # Count occurrences of each element
        count[num] += 1

    for i in range(1, len(count)):  # Modify count array to store actual positions
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):  # Build the output array
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1

    return output`
        }

        ]
    }



};