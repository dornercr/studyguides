const topics = {
    imperativeProgramming: {
        title: "Introduction to Imperative Programming",
        sections: [
                    {
            title: "Introduction to C",
            content: `Introduction to C programming with a basic program structure example.

Example:
#include <stdio.h>
int main() {
    printf("Welcome to CS 1621!\\n");
}`
        },
        {
            title: "Preprocessor Directives",
            content: `Preprocessor directives are lines that begin with a # and instruct the compiler to process certain transformations before the actual compilation.

Example:
#include <stdio.h>  // Includes the standard I/O library`
        },
        {
            title: "Program Basics",
            content: `The basic skeleton of a C program includes:
- Preprocessor directives
- Global declarations
- Functions
- Local declarations
- Statements`
        },
        {
            title: "Main Function",
            content: `Every C program has a main function, which is the entry point for program execution.

Example:
int main() {
    // Statements
    return 0;
}`
        },
        {
            title: "Comments and Documentation",
            content: `Comments are used to document code for readability and are ignored by the compiler. C supports both single-line and multi-line comments.

Single-line comment:
    // This is a single-line comment

Multi-line comment:
    /* This is a multi-line comment
       that spans multiple lines */`
        },
        {
            title: "Variable Declarations",
            content: `Variables are declared either globally or locally to a function. Atomic types in C include void, int, float, and char.

Example:
int x;  // Declaration
x = 5;  // Assignment`
        },
        {
            title: "Constants",
            content: `Constants are fixed values that do not change during the execution of the program. They can be defined using literal constants, #define, or the const keyword.

Example:
#define MAX_NUMBER 100
const float PI = 3.14159;`
        },
        {
            title: "Formatted Input and Output",
            content: `C provides functions like printf() and scanf() for formatted input and output. Format specifiers determine how variables are displayed or entered.

Example:
printf("%d", sum);   // Outputs the value of sum as an integer
scanf("%d", &x);     // Reads an integer input into the variable x`
        },
        {
            title: "Data Types",
            content: `C provides several fundamental data types such as int, char, float, and double. These define the type and size of data associated with variables.

Type Sizes:
int - 4 bytes
char - 1 byte
float - 4 bytes
double - 8 bytes`
        },
        {
            title: "Integer Types and Limitations",
            content: `Integers can store whole numbers in C. The size of an integer determines the range of values it can store.

- short int: 2 bytes, range: -32,768 to 32,767
- int: 4 bytes, range: -2,147,483,648 to 2,147,483,647
- long int: 4 bytes, similar range as int

Two's Complement is used to represent negative numbers in binary.`
        },
        {
            title: "Floating-Point Types",
            content: `Floating-point types store real numbers in C and include:
- float: 4 bytes
- double: 8 bytes
- long double: 10 bytes

Example:
float salary = 3000.50;
double price = 12345.6789;`
        },
        {
            title: "Literal Constants",
            content: `Literal constants are values like numbers and characters directly written into the code. They initialize variables or define constants.

Examples:
5, -35, 401, 'A', 3.14159`
        },
        {
            title: "Character Type",
            content: `The 'char' type represents single characters in C. Special characters like newline and tab are represented using escape sequences.

Example:
char letter = 'A';
char newline = '\\n';  // Represents a newline`
        },
        {
            title: "Formatted Output",
            content: `Formatted output uses printf. You can format integers, floats, characters, and strings using format specifiers like %d, %f, and %c.

Example:
printf("%d %f\\n", 35, 4.56);`
        },
        {
            title: "Formatted Input with Scanf",
            content: `Formatted input uses scanf, where you specify the format of data to read and store it in variables using the address operator (&).

Example:
scanf("%d %f", &x, &y);`
        },
        {
            title: "Program Execution",
            content: `Global declarations are initialized first, followed by the execution of the main function. Each statement is executed sequentially from top to bottom within the main function.`
        },
        {
            title: "Multiple Variable Declarations",
            content: `You can declare multiple variables of the same type in one statement, though declaring them on separate lines is stylistically preferable.

Example:
int x, y, z;  // Multiple declarations`
        },
            {
                title: "Introduction to Imperative Programming",
                content: `Imperative programming is a programming paradigm where commands are given to the computer in a step-by-step manner, similar to giving orders in human languages.

Key points:
• The program's flow is controlled by explicit instructions.
• The computer is told exactly what to do at each step.
• The C programming language is an example of an imperative language.
• C provides constructs like loops, conditionals, and functions to control program execution.

Remember: Imperative programming is like giving direct commands.`
            },
            {
                title: "Compiling and Running Code",
                content: `Compilation is the process of converting human-readable C code into machine code that the computer can execute. This step is crucial in compiled languages like C.

Steps:
1. Compilation: 'gcc program.c -o program'
   This compiles program.c into an executable named program.
2. Execution: './program'
   This runs the compiled program on the computer.

Remember: Compile to translate, run to execute.`,
                mediaUrl: "https://www.youtube.com/watch?v=p7JREh-W3ZU"
            },
            {
                title: "Understanding a Simple C Program",
                content: `Key components of a C program:

1. Header files:
   #include <stdio.h>
   #include <stdlib.h>
   These are directives that include standard input-output and utility libraries.

2. Main function:
   int main(void) { ... }
   This is the entry point of the program. Execution always starts here.

3. Variable declarations:
   double A[5] = {9.0, 2.9, .00007, 3.E+25};
   This declares and initializes variables.

4. Program logic:
   Usually involves loops, conditionals, and function calls.

Remember: Include headers, declare in main, loop to print.`
            },
            {
                title: "Key Terms and Concepts in C",
                content: `printf: A function call that outputs formatted text to the terminal.

printf function components:
• String literals: The text to be printed
• Format specifiers: Placeholders for variables (e.g., %d, %f, %s)
• Escape characters: Special characters like \\n for new line

Example:
printf("element %zu is %g, its square is %g\\n", i, A[i], A[i]*A[i]);
This prints an element's index, value, and its square.

Remember: Print with format, escape with backslash.`
            },
            {
                title: "Understanding Output",
                content: `When you run a C program, the terminal displays the output based on your printf statements.

Example output:
element 0 is 9, its square is 81
element 1 is 2.9, its square is 8.41
element 2 is 0, its square is 0
element 3 is 7e-05, its square is 4.9e-09
element 4 is 3e+25, its square is 9e+50

Remember: Expect output with elements and squares.`
            },
            {
                title: "Takeaways",
                content: `Key points to remember about C programming:

1. C is an imperative programming language.
2. You explicitly tell the computer what to do.
3. Always compile your C code before running it.
4. Functions like printf are used for user interaction and output.
5. C programs involve a mix of instructions, declarations, and control structures.

Remember: Imperative C: Compile, Function, Print.`
            },
            {
                title: "Conclusion",
                content: `Final thoughts on learning C:

• Be patient: Take your time to understand these concepts.
• Don't panic: If stuck, refer to the index or other resources.
• Practice: The more you write and run C programs, the more comfortable you'll become.
• Review: This guide provides essential topics for getting started with C and imperative programming.
• Reinforce: Memorize the mnemonics and review the examples regularly.

Keep coding and enjoy your journey into C programming!`
            }
        ]
    },
    compilingAndRunningC: {
        title: "Compiling and Running C Programs",
        sections: [
            {
                title: "Introduction to Compilation",
                content: `C is a compiled programming language. This means:

• The program text (source code) must be translated into binary code.
• A special program called a compiler does this translation.
• The resulting binary code is platform-dependent (specific to a particular computer architecture).

Takeaway: C provides a level of abstraction for different machine-specific languages (assembler).`
            },
            {
                title: "Portability in C",
                content: `A key feature of C is its portability:

• A correct C program should be portable between different platforms.
• The compiler ensures that a properly written C program will run correctly on various devices (PCs, phones, set-top boxes, etc.).
• Portability doesn't guarantee identical behavior across all platforms, but it should be functionally equivalent.

Takeaway: Write "correct" C programs to ensure portability across different platforms.`
            },
            {
                title: "Compilation Process",
                content: `Compiling a C program typically involves these steps:

1. Use a command like: c99 -Wall -o program_name source_file.c -lm
   
   Where:
   • c99 is the compiler program (may vary by system)
   • -Wall enables all warnings
   • -o program_name specifies the output file name
   • source_file.c is your C source code file
   • -lm links the math library

2. If successful, this produces an executable file.

3. Run the program with: ./program_name

Takeaway: Familiarize yourself with your system's specific compiler and its options.`
            },
            {
                title: "Compiler Variations",
                content: `Different systems may have different compilers:

• c99: Standard on many POSIX systems (Linux, macOS)
• clang: Another common compiler
• gcc: GNU Compiler Collection
• icc: Intel C Compiler

Example commands:
clang -Wall -lm -o program_name source_file.c
gcc -std=c99 -Wall -lm -o program_name source_file.c

Takeaway: Be aware of different compiler options and standards (e.g., -std=c99 for gcc).`
            },
            {
                title: "Dealing with Compiler Warnings",
                content: `Compiler warnings are important:

• They indicate potential issues in your code.
• Always aim to compile without warnings.
• Pay attention to diagnostic information provided by the compiler.
• Some compilers (like clang) may provide more detailed diagnostics.

Takeaway: A C program should compile cleanly without warnings. Address all warnings to ensure code quality and portability.`
            },
            {
                title: "Compiler Flags and Error Handling",
                content: `Useful compiler flags and practices:

• -Wall: Enables all warnings
• -Werror (gcc): Treats warnings as errors, preventing compilation
• Always read and understand compiler diagnostics
• Fix issues pointed out by the compiler before running the program

Takeaway: Use compiler flags to enforce stricter standards and catch potential issues early in development.`
            }
        ]
    },
    C_fundamentals: {
    title: "C Fundamentals",
    sections: [
        {
            title: "C Variable Values",
            content: `Change Variable Values
If you assign a new value to an existing variable, it will overwrite the previous value:

Example:
int myNum = 15;  // myNum is 15
myNum = 10;  // Now myNum is 10

You can also assign the value of one variable to another:

Example:
int myNum = 15;
int myOtherNum = 23;
myNum = myOtherNum;  // myNum is now 23
printf("%d", myNum);

Or copy values to empty variables:

Example:
// Create a variable and assign the value 15 to it
int myNum = 15;

// Declare a variable without assigning it a value
int myOtherNum;

// Assign the value of myNum to myOtherNum
myOtherNum = myNum;
printf("%d", myOtherNum);`
        },
        {
            title: "Add Variables Together",
            content: `To add a variable to another variable, you can use the + operator:

Example:
int x = 5;
int y = 6;
int sum = x + y;
printf("%d", sum);`
        },
        {
            title: "C Exercises",
            content: `Test Yourself With Exercises:
Exercise:
Display the sum of 5 + 10, using two variables: x and y.

int x = 5;
int y = 10;
printf("%d", x + y);`
        },
        {
            title: "C Data Types",
            content: `In C programming, data types are declarations for variables. This determines the type and size of data associated with variables. For example:

int myVar; // Here, myVar is a variable of int (integer) type.

Basic types include:
int, char, float, double.`
        },
        {
            title: "Basic Data Type Sizes",
            content: `Here's a table containing commonly used types in C programming for quick access:

Type                  Size (bytes)  Format Specifier
int               at least 2, usually 4 %d, %i
char              1             %c
float             4             %f
double        8             %lf
short int         2 usually     %hd
unsigned int    at least 2, usually 4   %u
long int          at least 4, usually 8 %ld, %li
long long int     at least 8    %lld, %lli
unsigned long int   at least 4  %lu
unsigned long long int  at least 8  %llu
signed char     1               %c
unsigned char   1               %c
long double at least 10, usually 12 or 16   %Lf`
        },
        {
            title: "Integers in C",
            content: `Integers are whole numbers that can have both zero, positive and negative values, but no decimal values. For example, 0, -5, 10.

We can use int for declaring an integer variable:

Example:
int id;

You can declare multiple variables at once in C programming. For example:

Example:
int id, age;

The size of int is usually 4 bytes (32 bits) and can take 2^32 distinct states from -2147483648 to 2147483647.`
        },
        {
            title: "Float and Double",
            content: `float and double are used to hold real numbers. For example:

float salary;
double price;

In C, floating-point numbers can also be represented in exponential form:

float normalizationFactor = 22.442e2;

Difference:
The size of float (single precision) is 4 bytes. The size of double (double precision) is 8 bytes.`
        },
        {
            title: "char Type",
            content: `Keyword 'char' is used for declaring character type variables. For example:

Example:
char test = 'h';

The size of a char variable is 1 byte.`
        },
        {
            title: "void Type",
            content: `void is an incomplete type that represents "nothing" or "no type". For example, if a function does not return anything, its return type should be void:

Example:
void myFunction() {
    // no return statement
}

Note: You cannot create variables of void type.`
        },
        {
            title: "short and long",
            content: `If you need to use a large number, you can use the 'long' type specifier:

Example:
long a;
long long b;
long double c;

Variables a and b can store integer values, while c can store a floating-point number.

If you are sure only a small integer will be used, you can use 'short':

Example:
short d;`
        },
        {
            title: "Sizeof Operator",
            content: `You can check the size of a variable using the sizeof() operator. Example:

#include <stdio.h>      
int main() {
  short a;
  long b;
  long long c;
  long double d;

  printf("size of short = %d bytes\\n", sizeof(a));
  printf("size of long = %d bytes\\n", sizeof(b));
  printf("size of long long = %d bytes\\n", sizeof(c));
  printf("size of long double= %d bytes\\n", sizeof(d));
  return 0;
}`
        },
        {
            title: "signed and unsigned",
            content: `In C, signed and unsigned are type modifiers:

- signed: allows storage of both positive and negative numbers.
- unsigned: allows storage of only positive numbers.

Example:

// valid codes
unsigned int x = 35;
int y = -35;  // signed int
int z = 36;  // signed int

// invalid code: unsigned int cannot hold negative integers
unsigned int num = -35;`
        },
        {
            title: "Range of signed and unsigned",
            content: `Considering the size of int is 4 bytes:

- signed int can hold values from -2^31 to 2^31-1
- unsigned int can hold values from 0 to 2^32-1`
        },
        {
            title: "Derived Data Types",
            content: `Data types derived from fundamental data types are derived types. Examples include arrays, pointers, function types, and structures. We will learn about these in later tutorials.`
        }
    ]
}
    
};