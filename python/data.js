const topics = {
python_fundamentals: {
    title: "Python Variables, Expressions, and Statements",
    sections: [
        {
            title: "Constants",
            content: `Constants refer to values that remain unchanged throughout the execution of a program. These can include numbers, text strings, and more.

Examples:
\`\`\`python
print(45)  # Outputs: 45
print(3.1415)  # Outputs: 3.1415
print('Welcome to Python!')  # Outputs: Welcome to Python
\`\`\``
        },
        {
            title: "Reserved Words",
            content: `Reserved words are predefined keywords in Python that have specific functions. They cannot be used as variable names.

Examples:
\`\`\`python
False, True, None
for, if, else, while
try, except, finally
\`\`\``
        },
        {
            title: "Variables",
            content: `Variables are names assigned to data stored in memory. They can hold various types of data, and their value can change during program execution.

Example:
\`\`\`python
length = 5  # Assign 5 to variable length
width = 10  # Assign 10 to variable width
area = length * width  # Calculate area by multiplying length and width
\`\`\``
        },
        {
            title: "Variable Naming Rules",
            content: `When naming variables in Python:
- Names must begin with a letter or underscore.
- They can include letters, numbers, and underscores.
- Variable names are case-sensitive.

Good examples:
\`\`\`python
speed_limit = 65
student_count = 30
_active = True
\`\`\`

Bad examples:
\`\`\`python
123score = 100  # Invalid: starts with a number
%profit = 0.15  # Invalid: contains special character
price&cost = 50  # Invalid: contains special character
\`\`\``
        },
        {
            title: "Mnemonic Variable Names",
            content: `A good practice in programming is to use mnemonic variable names, which are descriptive and make it easier to remember what the variable stores.

Example:
\`\`\`python
hours_worked = 40
hourly_rate = 25
total_pay = hours_worked * hourly_rate  # Clearly expresses what the code is doing
\`\`\``
        },
        {
            title: "Assignment Statements",
            content: `An assignment statement in Python is used to assign a value to a variable. The expression on the right-hand side is evaluated, and the result is stored in the variable on the left.

Example:
\`\`\`python
score = 50 + 30  # The result of 50 + 30 is assigned to score
\`\`\``
        },
        {
            title: "Numeric Expressions",
            content: `Python uses various operators to perform arithmetic operations in numeric expressions.

Examples:
\`\`\`python
# Addition
result = 5 + 3  # Outputs: 8

# Subtraction
result = 10 - 4  # Outputs: 6

# Multiplication
result = 6 * 7  # Outputs: 42

# Division
result = 16 / 2  # Outputs: 8.0
\`\`\``
        },
        {
            title: "Operator Precedence",
            content: `When multiple operators are used in an expression, Python follows a set of precedence rules to determine the order of operations.

Example:
\`\`\`python
result = 3 + 4 * 2  # Multiplication happens first, so result is 11, not 14
\`\`\``
        },
        {
            title: "Type Conversions",
            content: `Python can convert between data types using built-in functions like int(), float(), and str().

Example:
\`\`\`python
age = "30"
age_as_int = int(age)  # Convert string "30" to integer 30
print(age_as_int)  # Outputs: 30

height = 5.7
height_as_str = str(height)  # Convert float 5.7 to string "5.7"
print(height_as_str)  # Outputs: "5.7"
\`\`\``
        },
        {
            title: "User Input",
            content: `The input() function allows you to take input from the user. The input is always returned as a string, so it often needs to be converted to other types.

Example:
\`\`\`python
name = input("Enter your name: ")
print("Hello, " + name + "!")  # Greets the user with their input
\`\`\``
        },
        {
            title: "Comments in Python",
            content: `In Python, comments are lines of text ignored by the interpreter. They are useful for documenting code and leaving notes for yourself or other programmers.

Example:
\`\`\`python
# This is a comment
# The line below assigns 100 to the variable score
score = 100
\`\`\``
        },
        {
            title: "Integer Division",
            content: `In Python, division between two integers will result in a floating-point value.

Example:
\`\`\`python
result = 9 / 2  # Outputs: 4.5

# If you want an integer result, you can use integer division with the // operator:
result = 9 // 2  # Outputs: 4
\`\`\``
        },
        {
            title: "String Conversions",
            content: `You can convert between strings and other data types using functions like int() and float(). If the string doesn't contain numeric characters, it will raise an error.

Example:
\`\`\`python
num_str = '123'
num = int(num_str)  # Converts the string '123' to the integer 123
print(num)  # Outputs: 123

# This will raise an error:
# error_num = int('abc')
\`\`\``
        },
        {
            title: "Type Conversions",
            content: `Python can implicitly convert between types when needed, but you can also explicitly convert types using built-in functions like int(), float(), and str().

Example:
\`\`\`python
float_num = 10.5
int_num = int(float_num)  # Converts float 10.5 to integer 10
print(int_num)  # Outputs: 10

int_num = 42
float_num = float(int_num)  # Converts integer 42 to float 42.0
print(float_num)  # Outputs: 42.0
\`\`\``
        },
        {
            title: "Order of Operations",
            content: `Python follows specific rules for the order of operations, also known as operator precedence. This means certain operations will be performed before others in complex expressions.

Precedence Order:
1. Parentheses
2. Exponentiation (**)
3. Multiplication, Division, and Modulus (*, /, %)
4. Addition and Subtraction (+, -)

Example:
\`\`\`python
result = 2 + 3 * 4  # Outputs 14, not 20, because multiplication is performed first
print(result)  # Outputs: 14

result = (2 + 3) * 4  # Parentheses change the order of operations
print(result)  # Outputs: 20
\`\`\``
        },
        {
            title: "User Input and Conversion",
            content: `The input() function captures user input as a string. To use it as a number, you must convert it to the appropriate type using int() or float().

Example:
\`\`\`python
user_input = input("Enter a number: ")
num = int(user_input)  # Converts input to an integer
result = num * 2
print(f"Twice your number is: {result}")
\`\`\``
        },
        {
            title: "Type Matters",
            content: `In Python, every value has a specific type, such as integers, strings, or floats. The type determines what operations you can perform on that value.

Example:
\`\`\`python
name = "Alice"
age = 30

print(type(name))  # Outputs: <class 'str'>
print(type(age))   # Outputs: <class 'int'>

# You can perform string operations on name
print(name.upper())  # Outputs: ALICE

# You can perform mathematical operations on age
print(age + 5)  # Outputs: 35
\`\`\``
        },
        {
            title: "Numeric Expressions with Examples",
            content: `Python supports various mathematical operations like addition, subtraction, multiplication, and division. You can also use other operators like modulus (%) and exponentiation (**).

Examples:
\`\`\`python
# Addition
print(5 + 3)  # Outputs: 8

# Subtraction
print(9 - 4)  # Outputs: 5

# Multiplication
print(7 * 6)  # Outputs: 42

# Division
print(10 / 2)  # Outputs: 5.0

# Modulus (remainder)
print(10 % 3)  # Outputs: 1

# Exponentiation
print(2 ** 3)  # Outputs: 8
\`\`\``
        },
{
    title: "Type Matters",
    content: `In Python, every value has a specific type, such as integers, strings, or floats. The type determines what operations you can perform on that value.

Example:
\`\`\`python
name = "Alice"
age = 30

print(type(name))  # Outputs: <class 'str'>
print(type(age))   # Outputs: <class 'int'>

# You can perform string operations on name
print(name.upper())  # Outputs: ALICE

# You can perform mathematical operations on age
print(age + 5)  # Outputs: 35
\`\`\`

You can use the type() function to check the type of any value.

Example:
\`\`\`python
print(type(3.14))  # Outputs: <class 'float'>
print(type(True))  # Outputs: <class 'bool'>
print(type([1, 2, 3]))  # Outputs: <class 'list'>
\`\`\``
},
{
    title: "Numeric Expressions with Examples",
    content: `Python supports various mathematical operations like addition, subtraction, multiplication, and division. You can also use other operators like modulus (%) and exponentiation (**).

Examples:
\`\`\`python
# Addition
print(5 + 3)  # Outputs: 8

# Subtraction
print(9 - 4)  # Outputs: 5

# Multiplication
print(7 * 6)  # Outputs: 42

# Division
print(10 / 2)  # Outputs: 5.0

# Modulus (remainder)
print(10 % 3)  # Outputs: 1

# Exponentiation
print(2 ** 3)  # Outputs: 8

# Complex expression
result = (5 + 3) * 2 - 4 / 2
print(result)  # Outputs: 14.0
\`\`\`

These operators can be combined to form more complex expressions. Remember to use parentheses to control the order of operations when needed.`
}

    
    ]
},
python_strings: {
    title: "Python Strings Study Guide",
    sections: [
        {
            title: "What is a String in Python?",
            content: `A string in Python is a sequence of characters enclosed in single quotes ('') or double quotes (""). Strings are immutable, which means once created, their contents cannot be changed.

Example:
\`\`\`python
# Creating strings
single_quoted = 'Hello, World!'
double_quoted = "Python Strings"

# Multi-line string
multi_line = '''This is a
multi-line
string'''

print(single_quoted)
print(double_quoted)
print(multi_line)
\`\`\``
        },
        {
            title: "Create a String in Python",
            content: `Strings in Python can be created using single quotes, double quotes, or triple quotes for multi-line strings.

Examples:
\`\`\`python
# Single quotes
str1 = 'Hello'

# Double quotes
str2 = "World"

# Triple quotes for multi-line strings
str3 = '''This is a
multi-line string'''

# String with quotes inside
str4 = "He said, 'Python is awesome!'"

print(str1, str2)
print(str3)
print(str4)
\`\`\``
        },
        {
            title: "Accessing characters in Python String",
            content: `Characters in a string can be accessed using indexing. Python uses zero-based indexing, meaning the first character is at index 0.

Examples:
\`\`\`python
my_string = "Python"

# Accessing individual characters
print(my_string[0])  # Output: P
print(my_string[1])  # Output: y

# Negative indexing (counting from the end)
print(my_string[-1])  # Output: n
print(my_string[-2])  # Output: o

# Trying to access an index out of range will raise an IndexError
# print(my_string[10])  # This would raise an IndexError
\`\`\``
        },
        {
            title: "String Slicing Python",
            content: `String slicing allows you to extract a portion of a string. The syntax is [start:end:step], where start is inclusive and end is exclusive.

Examples:
\`\`\`python
my_string = "Hello, World!"

# Basic slicing
print(my_string[0:5])   # Output: Hello
print(my_string[:5])    # Output: Hello (omitting start index defaults to 0)
print(my_string[7:])    # Output: World! (omitting end index goes to the end)

# Slicing with step
print(my_string[::2])   # Output: Hlo ol! (every second character)
print(my_string[::-1])  # Output: !dlroW ,olleH (reverse the string)

# Negative indexing in slicing
print(my_string[-6:-1])  # Output: World
\`\`\``
        },
        {
            title: "Python String Reversed",
            content: `There are multiple ways to reverse a string in Python.

Examples:
\`\`\`python
my_string = "Python"

# Using slicing
reversed_string = my_string[::-1]
print(reversed_string)  # Output: nohtyP

# Using reversed() function and join()
reversed_string = ''.join(reversed(my_string))
print(reversed_string)  # Output: nohtyP

# Using a loop (less efficient for large strings)
reversed_string = ''
for char in my_string:
    reversed_string = char + reversed_string
print(reversed_string)  # Output: nohtyP
\`\`\``
        },
        {
            title: "Deleting/Updating from a String",
            content: `Strings in Python are immutable, which means you cannot delete or update individual characters. However, you can create new strings based on modifications of existing ones.

Examples:
\`\`\`python
original = "Hello, World!"

# 'Updating' by creating a new string
new_string = original.replace('Hello', 'Hi')
print(new_string)  # Output: Hi, World!

# 'Deleting' by slicing
without_comma = original[:5] + original[6:]
print(without_comma)  # Output: HelloWorld!

# Attempting to modify the string directly will raise an error
# original[0] = 'h'  # This would raise a TypeError
\`\`\``
        },
        {
            title: "Escape Sequencing in Python",
            content: `Escape sequences in Python strings are used to represent certain special characters.

Examples:
\`\`\`python
# Newline
print("Hello\\nWorld")  # Output: Hello
                        #         World

# Tab
print("Hello\\tWorld")  # Output: Hello    World

# Backslash
print("This is a backslash: \\\\")  # Output: This is a backslash: \\

# Single and double quotes
print('It\\'s a beautiful day')  # Output: It's a beautiful day
print("She said, \\"Hello!\\"")  # Output: She said, "Hello!"

# Unicode characters
print("\\u03A9")  # Output: Ω (Greek capital letter Omega)

# Raw string (ignores escape sequences)
print(r"This is a raw string: \\n does not create a new line")
# Output: This is a raw string: \\n does not create a new line
\`\`\``
        },
        {
            title: "Python String Formatting",
            content: `Python offers several ways to format strings, including %-formatting, str.format(), and f-strings (formatted string literals).

Examples:
\`\`\`python
name = "Alice"
age = 30

# %-formatting (old style, less readable)
print("My name is %s and I'm %d years old." % (name, age))

# str.format() method
print("My name is {} and I'm {} years old.".format(name, age))

# f-strings (Python 3.6+, most readable and concise)
print(f"My name is {name} and I'm {age} years old.")

# Formatting with dictionaries
person = {'name': 'Bob', 'age': 25}
print("%(name)s is %(age)d years old." % person)
print("{name} is {age} years old.".format(**person))
print(f"{person['name']} is {person['age']} years old.")

# Number formatting
pi = 3.14159
print(f"Pi is approximately {pi:.2f}")  # Output: Pi is approximately 3.14
\`\`\``
        },
        {
            title: "Useful Python String Operations",
            content: `Python provides many built-in methods for string manipulation.

Examples:
\`\`\`python
s = "  Hello, World!  "

# Basic operations
print(len(s))  # Output: 17 (length of string)
print(s.lower())  # Output:   hello, world!  
print(s.upper())  # Output:   HELLO, WORLD!  
print(s.strip())  # Output: Hello, World! (removes leading/trailing whitespace)

# Splitting and joining
words = s.split(',')  # Split string into list
print(words)  # Output: ['  Hello', ' World!  ']
new_s = '-'.join(words)  # Join list into string
print(new_s)  # Output:   Hello- World!  

# Checking string content
print(s.startswith('  Hello'))  # Output: True
print(s.endswith('World!  '))  # Output: True
print('Hello' in s)  # Output: True

# Finding substrings
print(s.find('World'))  # Output: 9 (index where 'World' starts)
print(s.count('l'))  # Output: 3 (count of 'l' in the string)

# Replacing substrings
print(s.replace('Hello', 'Hi'))  # Output:   Hi, World!  

# Checking string type
print('123'.isdigit())  # Output: True
print('abc'.isalpha())  # Output: True
print('Python3.6'.isalnum())  # Output: True
\`\`\``
        },
        {
            title: "Python String constants",
            content: `The string module in Python provides some useful constants.

Examples:
\`\`\`python
import string

# String constants
print(string.ascii_lowercase)  # Output: abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)  # Output: ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)  # Output: 0123456789
print(string.punctuation)  # Output: !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~
print(string.whitespace)  # Output: space, tab, newline, return, formfeed, vertical tab

# Using constants in operations
s = "Hello123"
print(s.strip(string.digits))  # Output: Hello
\`\`\``
        },
        {
            title: "Deprecated string functions",
            content: `Some string functions have been deprecated in favor of string methods. While they still work in Python 3, it's recommended to use the newer string methods instead.

Examples of deprecated functions and their replacements:
\`\`\`python
# Deprecated: string.lower(s)
# Use instead:
s = "HELLO"
print(s.lower())  # Output: hello

# Deprecated: string.upper(s)
# Use instead:
s = "hello"
print(s.upper())  # Output: HELLO

# Deprecated: string.split(s)
# Use instead:
s = "Hello,World"
print(s.split(','))  # Output: ['Hello', 'World']

# Deprecated: string.join(words)
# Use instead:
words = ['Hello', 'World']
print(' '.join(words))  # Output: Hello World

# Deprecated: string.strip(s)
# Use instead:
s = "  Hello  "
print(s.strip())  # Output: Hello

# Note: These deprecated functions are from the 'string' module.
# Modern Python code typically uses the string methods directly on string objects.
\`\`\``
        }
    ]
},
python_numbers: {
    title: "Python Numbers Study Guide",
    sections: [
        {
            title: "Introduction to Python Numbers",
            content: `In Python, "Numbers" is a category that encompasses different types of numeric data. Python supports various types of numbers, including integers, floating-point numbers, and complex numbers. Each type has its own characteristics and use cases.`
        },
        {
            title: "Python Integer",
            content: `Python integers (int) are whole numbers, including negative numbers but not fractions. In Python, there is no limit to how long an integer value can be.

Example 1: Creating int and checking type
\`\`\`python
num = -8
print(type(num))  # Output: <class 'int'>
\`\`\`

Example 2: Arithmetic Operations with integers
\`\`\`python
a, b = 5, 6
print("Addition:", a + b)       # Output: 11
print("Subtraction:", 9 - 6)    # Output: 3
print("Division:", 8 // 2)      # Output: 4 (integer division)
print("Multiplication:", 3 * 5) # Output: 15
print("Modulus:", 25 % 5)       # Output: 0
print("Exponent:", 6 ** 2)      # Output: 36
\`\`\``
        },
        {
            title: "Python Float",
            content: `A float is a real number with a floating-point representation. It is specified by a decimal point. Optionally, the character e or E followed by a positive or negative integer may be appended to specify scientific notation.

Example 1: Creating float and checking type
\`\`\`python
num = 3/4
print(type(num))  # Output: <class 'float'>

num = 6 * 7.0
print(type(num))  # Output: <class 'float'>
\`\`\`

Example 2: Arithmetic Operations with floats
\`\`\`python
a, b = 5.5, 3.2
print("Addition:", a + b)       # Output: 8.7
print("Subtraction:", a - b)    # Output: 2.3
print("Division:", a / b)       # Output: 1.71875
print("Multiplication:", a * b) # Output: 17.6
\`\`\`

Note: The accuracy of a floating-point number is only up to 15 decimal places, the 16th place can be inaccurate.`
        },
        {
            title: "Python Complex",
            content: `A complex number consists of real and imaginary parts. For example, 2 + 3j is a complex number where 2 is the real component, and 3 multiplied by j is an imaginary part.

Example 1: Creating Complex and checking type
\`\`\`python
num = 6 + 9j
print(type(num))  # Output: <class 'complex'>
\`\`\`

Example 2: Arithmetic Operations with complex numbers
\`\`\`python
a, b = 1 + 5j, 2 + 3j
print("Addition:", a + b)       # Output: (3+8j)
print("Subtraction:", a - (2 - 3j))  # Output: (-1+8j)
print("Division:", a / b)       # Output: (1.3076923076923077+0.5384615384615384j)
print("Multiplication:", a * b) # Output: (-13+13j)
\`\`\``
        },
        {
            title: "Type Conversion in Python",
            content: `We can convert one number type into another using two methods:

1. Using Arithmetic Operations (Implicit Conversion):
\`\`\`python
a, b = 1.6, 5
c = a + b
print(c)  # Output: 6.6
\`\`\`

2. Using built-in functions (Explicit Conversion):
\`\`\`python
print(float(2))         # Output: 2.0
print(int(5.6))         # Output: 5
print(type(int('3')))   # Output: <class 'int'>
print(type(float('5.6')))  # Output: <class 'float'>
print(complex(5))       # Output: (5+0j)
print(complex(6.5))     # Output: (6.5+0j)
\`\`\`

Notes:
- When converting float to int, the decimal part is truncated.
- We can't convert a complex number to int or float.
- We can't apply the complex() function to strings.`
        },
        {
            title: "Decimal Numbers in Python",
            content: `Arithmetic operations on floating-point numbers can sometimes give unexpected results due to the binary representation of decimal numbers.

Example of unexpected results:
\`\`\`python
print(1.1 + 2.2)  # Output: 3.3000000000000003
print(1.2 - 1.0)  # Output: 0.19999999999999996
\`\`\`

To handle these cases, Python provides the decimal module:

\`\`\`python
import decimal

a = decimal.Decimal('1.1')
b = decimal.Decimal('2.2')
c = a + b
print(c)  # Output: 3.3
\`\`\`

Use the decimal module when:
- You want to define the required accuracy on your own
- For financial applications that need precise decimal representations

Note: For more information about decimal numbers in Python and the functions provided by this module, refer to Decimal Functions in Python.`
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

\`\`\`python
def find_max(arr):
    max_value = arr[0]
    for num in arr:
        if num > max_value:
            max_value = num
    return max_value

# Example usage
numbers = [4, 2, 9, 7, 5, 1]
print(find_max(numbers))  # Outputs: 9
\`\`\``
        },
        {
            title: "Introduction to Data Structures",
            content: `Data structures are ways to store and organize data efficiently. Python provides several built-in data structures, including lists, tuples, sets, dictionaries, and more advanced structures like linked lists, stacks, and queues.

Example:
A list is a simple data structure:

\`\`\`python
my_list = [1, 2, 3, 4, 5]
# You can access elements in the list using their index:
print(my_list[0])  # Outputs: 1

# Adding an element to the list
my_list.append(6)
print(my_list)  # Outputs: [1, 2, 3, 4, 5, 6]

# Removing an element from the list
removed_item = my_list.pop()
print(removed_item)  # Outputs: 6
print(my_list)  # Outputs: [1, 2, 3, 4, 5]
\`\`\``
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

\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Example usage
unsorted_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = bubble_sort(unsorted_list)
print(sorted_list)  # Outputs: [11, 12, 22, 25, 34, 64, 90]
\`\`\``
        },
        {
            title: "Searching Algorithms",
            content: `Searching algorithms are used to find specific elements in a dataset. Popular algorithms include:

- Linear Search
- Binary Search

Example:
Binary Search (requires sorted list):

\`\`\`python
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
    return -1

# Example usage
sorted_list = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
result = binary_search(sorted_list, target)
print(f"Element {target} found at index: {result}")  # Outputs: Element 7 found at index: 3
\`\`\``
        },
        {
            title: "Linked Lists",
            content: `A linked list is a linear data structure where each element (node) contains a reference (pointer) to the next node in the sequence.

Example:

\`\`\`python
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
        last_node.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Example usage
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.print_list()  # Outputs: 1 -> 2 -> 3 -> None
\`\`\``
        },
        {
            title: "Stacks and Queues",
            content: `Stacks and queues are linear data structures that follow specific rules for adding and removing elements.

- Stack: Follows Last In, First Out (LIFO) principle.
- Queue: Follows First In, First Out (FIFO) principle.

Example (Stack):

\`\`\`python
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

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Outputs: 3
print(stack.pop())  # Outputs: 2
\`\`\`

Example (Queue):

\`\`\`python
from collections import deque

queue = deque()
queue.append(10)  # Add to queue
queue.append(20)
queue.append(30)
print(queue.popleft())  # Remove from queue, Outputs: 10
print(queue.popleft())  # Outputs: 20
\`\`\``
        },
        {
            title: "Trees",
            content: `A tree is a hierarchical data structure where each node has a value and references to its children. Common tree types include binary trees, binary search trees, and heaps.

Example (Binary Search Tree):

\`\`\`python
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)

# Example usage
root = None
root = insert(root, 50)
insert(root, 30)
insert(root, 20)
insert(root, 40)
insert(root, 70)
insert(root, 60)
insert(root, 80)

print("Inorder traversal of the BST:")
inorder(root)  # Outputs: 20 30 40 50 60 70 80
\`\`\``
        },
        {
            title: "Graph Algorithms",
            content: `Graphs are data structures that consist of nodes (vertices) and edges connecting them. Common graph traversal algorithms include Depth-First Search (DFS) and Breadth-First Search (BFS).

Example (DFS):

\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=' ')
    for next_node in graph[start]:
        if next_node not in visited:
            dfs(graph, next_node, visited)
    return visited

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("DFS traversal:")
dfs(graph, 'A')  # Outputs: A B D E F C
\`\`\``
        },
        {
            title: "Hash Tables",
            content: `A hash table is a data structure that maps keys to values using a hash function. Hash tables provide fast insertion, deletion, and lookup operations.

Example (Using Python dictionary):

\`\`\`python
# Creating a hash table (dictionary in Python)
hash_table = {}

# Inserting key-value pairs
hash_table['name'] = 'Alice'
hash_table['age'] = 25
hash_table['city'] = 'New York'

# Accessing values
print(hash_table['name'])  # Outputs: Alice

# Updating values
hash_table['age'] = 26

# Deleting key-value pairs
del hash_table['city']

# Checking if a key exists
if 'name' in hash_table:
    print("Name exists in the hash table")

# Iterating over key-value pairs
for key, value in hash_table.items():
    print(f"{key}: {value}")
\`\`\``
        },
        {
            title: "Time and Space Complexity",
            content: `Time and space complexity help evaluate the efficiency of an algorithm. Time complexity refers to the amount of time an algorithm takes to run, while space complexity refers to the amount of memory it uses.

Common time complexities include:
- O(1): Constant time
- O(log n): Logarithmic time
- O(n): Linear time
- O(n log n): Linearithmic time
- O(n^2): Quadratic time
- O(2^n): Exponential time

Example:

\`\`\`python
# O(1) - Constant time
def constant_time(n):
    return n * 2

# O(n) - Linear time
def linear_time(n):
    for i in range(n):
        print(i)

# O(n^2) - Quadratic time
def quadratic_time(n):
    for i in range(n):
        for j in range(n):
            print(i, j)

# O(log n) - Logarithmic time (e.g., binary search)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

Understanding time and space complexity is crucial for writing efficient algorithms and choosing appropriate data structures for specific problems.`
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
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Example usage
unsorted_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = bubble_sort(unsorted_list)
print(sorted_list)
\`\`\``,
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
\`\`\`python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Example usage
unsorted_list = [64, 25, 12, 22, 11]
sorted_list = selection_sort(unsorted_list)
print(sorted_list)
\`\`\``,
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
\`\`\`python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Example usage
unsorted_list = [12, 11, 13, 5, 6]
sorted_list = insertion_sort(unsorted_list)
print(sorted_list)
\`\`\``,
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
\`\`\`python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
    return arr

# Example usage
unsorted_list = [38, 27, 43, 3, 9, 82, 10]
sorted_list = merge_sort(unsorted_list)
print(sorted_list)
\`\`\``,
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
\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
unsorted_list = [1, 7, 4, 1, 10, 9, -2]
sorted_list = quick_sort(unsorted_list)
print(sorted_list)
\`\`\``,
            mediaUrl: "https://www.youtube.com/watch?v=pM-6r5xsNEY"
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
\`\`\`python
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[i] < arr[left]:
        largest = left

    if right < n and arr[largest] < arr[right]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

# Example usage
unsorted_list = [12, 11, 13, 5, 6, 7]
sorted_list = heap_sort(unsorted_list)
print(sorted_list)
\`\`\``
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
\`\`\`python
def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2
    return arr

# Example usage
unsorted_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = shell_sort(unsorted_list)
print(sorted_list)
\`\`\``
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
\`\`\`python
def counting_sort_for_radix(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10
    return arr

# Example usage
unsorted_list = [170, 45, 75, 90, 802, 24, 2, 66]
sorted_list = radix_sort(unsorted_list)
print(sorted_list)
\`\`\``
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
\`\`\`python
def bucket_sort(arr):
    bucket = []
    for i in range(len(arr)):
        bucket.append([])

    for num in arr:
        index = int(10 * num)
        bucket[index].append(num)

    for i in range(len(arr)):
        bucket[i].sort()

    result = []
    for i in range(len(bucket)):
        result += bucket[i]
    return result

# Example usage
unsorted_list = [0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]
sorted_list = bucket_sort(unsorted_list)
print(sorted_list)
\`\`\``
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
\`\`\`python
def counting_sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    output = [0] * len(arr)

    for num in arr:
        count[num] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1

    return output

# Example usage
unsorted_list = [4, 2, 2, 8, 3, 3, 1]
sorted_list = counting_sort(unsorted_list)
print(sorted_list)
\`\`\``
        },
        {
            title: "Summary",
            content: `1. Bubble Sort: Simple but inefficient, O(n²), useful for small datasets.
2. Selection Sort: Simple but inefficient, O(n²), good for small datasets where swaps are inexpensive.
3. Insertion Sort: Efficient for small or nearly sorted datasets, O(n) in the best case.
4. Merge Sort: Efficient for large datasets, O(n log n), good for stable sorting.
5. Quick Sort: Highly efficient, O(n log n) on average, preferred for large datasets.
6. Heap Sort: Efficient for large datasets, guaranteed O(n log n) complexity.
7. Shell Sort: Improvement over insertion sort, good for medium-sized datasets.
8. Radix Sort: Efficient for fixed-length integer or string sorting, O(nk) complexity.
9. Bucket Sort: Efficient for uniformly distributed data, average case O(n + k).
10. Counting Sort: Efficient for sorting integers with a known range, O(n + k) complexity.`
        }
    ]
}



};