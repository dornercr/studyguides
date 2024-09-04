const topics = {
    imperativeProgramming: {
        title: "Introduction to Imperative Programming",
        sections: [
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

Remember: Compile to translate, run to execute.`
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
    cLanguageIntroduction: {
        title: "C Language Introduction",
        lastUpdated: "03 Sep, 2024",
        sections: [
            {
                title: "Overview of C Language",
                content: `C is a procedural programming language initially developed by Dennis Ritchie in 1972 at Bell Laboratories of AT&T Labs. It was mainly created as a system programming language to write the UNIX operating system.

Key Features:
• General Purpose and Portable
• Low-level Memory Access
• Fast Speed
• Clean Syntax

These features make C suitable for system programming like an operating system or compiler development.`
            },
            {
                title: "Why Should We Learn C?",
                content: `Many modern languages have borrowed syntax or features directly or indirectly from C, including Java, PHP, and JavaScript. C++ is nearly a superset of C, so learning C helps in learning modern programming languages.

Learning C also helps you understand the underlying architecture of the operating system, such as pointers and memory locations.

Benefits of Learning C:
• Easier transition to other languages
• Understanding low-level operations and memory management`
            },
            {
                title: "Difference Between C and C++",
                content: `C++ was created to introduce the Object-Oriented Programming (OOP) paradigm into C, and they share very similar syntax. Here are some key differences:

• C++ supports OOP, while C only has procedural programming.
• C++ has exception handling capabilities, while in C, exceptions need to be handled manually.
• C++ includes references, while C does not.

For more information, check out: Difference between C and C++.`
            },
            {
                title: "First Program in C",
                content: `The following code demonstrates a simple C program:

Example:

\`\`\`c
#include <stdio.h>

int main() {
  int a = 10;
  printf("%d", a);
  
  return 0;
}
\`\`\`

Output: 10

Structure of a C program:
1. Header files (e.g., \`#include <stdio.h>\`)
2. Main function (\`int main()\`)
3. Variable declarations and logic
4. Return statement (\`return 0;\`)`
            },
            {
                title: "Components of a C Program",
                content: `Key components of a C program include:

1. **Header Files Inclusion**: Include C function declarations and macro definitions (e.g., \`#include <stdio.h>\`).
2. **Main Method Declaration**: This is the entry point of the program, denoted by \`int main()\`.
3. **Body of Main Method**: Contains the program logic enclosed in curly braces.
4. **Statements**: Instructions to the compiler (e.g., \`printf("Hello World");\`).
5. **Return Statement**: Indicates the termination status of the program. \`return 0;\` usually means successful termination.`
            },
            {
                title: "How to Execute a C Program",
                content: `To execute a C program, follow these steps:

1. **Compile the Program**: Use a C compiler (e.g., GCC) to compile the program:
   - Windows: Use IDEs like Code Blocks or Dev-CPP.
   - Linux: Use the GCC compiler.
   - macOS: Use the built-in text editor and GCC.
2. **Run the Program**: After compilation, run the executable file to see the output.

Online IDEs, like GeeksforGeeksIDE, can also be used for C development without installation.`
            },
            {
                title: "Applications of C",
                content: `C is widely used in various fields:

1. **Operating Systems**: C is used for developing Unix, Linux, and Windows.
2. **Embedded Systems**: C is a popular choice for microcontrollers and electronic devices.
3. **System Software**: C is used to develop device drivers, compilers, and assemblers.
4. **Networking**: Used in network applications like web servers and network drivers.
5. **Database Systems**: C is used in MySQL, Oracle, and PostgreSQL.
6. **Gaming**: C is used for developing games due to its low-level hardware interaction.
7. **Artificial Intelligence**: C is used in AI and machine learning applications.
8. **Scientific Applications**: Used for simulation software and numerical analysis tools.
9. **Financial Applications**: C is used for stock market analysis and trading systems.`
            }
        ]
    }
};