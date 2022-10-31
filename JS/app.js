let operators = [
    {
        name: '-',
        description: ['Subtraction', 'Set: Difference'],
        type: ['Operators', 'Set'],
        best: '',
        worst: '',
        examples: [
            { example: 'print(4 - 3)\n' + 'Output: 1', name: 'Subtraction' },
            { example: 'x = {1,2,5}\n' + 'y = {2,3,4}\n' + 'print(x - y)\n' + 'Output: {1,5}', name: 'Set Difference' },
        ],
        link: '',
        freq: 20844,
    },
    {
        name: '[:]',
        description: ['Slice operator, used to access values from within iterable objects'],
        type: ['Counter', 'Default-Dict', 'Dict', 'String', 'Tuple', 'List', 'Operators'],
        best: '',
        worst: '',
        examples: [
            { example: 'string[start:stop:step]', name: 'Format' },
            { example: 'list[index]', name: 'Accessing Index' },
            { example: 'x = [1,2,3]\n' + 'x[:] = x[::-1]\n' + 'Print(x)\n' + 'Output: [3,2,1]', name: 'Reversing a list' },
        ],
        link: '',
        freq: 11765,
    },
    {
        name: '*',
        description: ['Multiplication', 'Splat: Splat operator is used to unpack a list into arguments', 'Multiple concatenation'],
        type: ['String', 'List', 'Operators', 'Tuple'],
        best: '',
        worst: '',
        examples: [
            { example: 'print(3*2)\n' + 'Output: 6', name: 'Multiplication' },
            { example: 'lst(*[1, 2, 3]) is equal to lst(1, 2, 3)', name: 'Splat Operator' },
            { example: 'x = [1,2]\n' + 'print(x*2)\n' + 'Output = [1,2,1,2]', name: 'Multiple Concatenation' },
        ],
        link: '',
        freq: 5555,
    },
    {
        name: '**',
        description: ['Exponentiation'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [{ example: 'print(2 ** 3)\n' + 'Output: 8', name: 'Exponentiation' }],
        link: '',
        freq: 541,
    },
    {
        name: '/',
        description: ['Division'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [{ example: 'print(4 / 2)\n' + 'Output: 2', name: 'Division' }],
        link: '',
        freq: 3381,
    },
    {
        name: '//',
        description: ['Floor division'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [{ example: 'print(5 // 2)\n' + 'Output: 2', name: 'Floor Division' }],
        link: '',
        freq: 1143,
    },
    {
        name: '&',
        description: ['Bitwise and: Sets each bit to 1 if both bits are 1', 'Set: Intersection'],
        type: ['Operators', 'Set'],
        best: '',
        worst: '',
        examples: [{}, { example: 'x = {1,2,3}\n' + 'y = {2,3,4}\n' + 'print(x & y)\n' + 'Output: {2,3}', name: 'Set intersection' }],
        link: '',
        freq: 366,
    },
    {
        name: '%',
        description: ['Modulo operator calculates the remainder'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [{ example: 'print(5 % 2)\n' + 'Output: 1', name: 'Modulo' }],
        link: '',
        freq: 1694,
    },
    {
        name: '^',
        description: ['Bitwise XOR', 'Set: Symmetric difference'],
        type: ['Operators', 'Set'],
        best: '',
        worst: '',
        examples: [{}, { example: 'x = {1,2,5}\n' + 'y = {2,3,4}\n' + 'print(x ^ y)\n' + 'Output: {1,3,4,5}', name: 'Set Symmetric Difference' }],
        link: '',
        freq: 1258,
    },
    {
        name: '+',
        description: ['Addition / Concatenation'],
        type: ['String', 'List', 'Operators', 'Tuple'],
        best: '',
        worst: '',
        examples: [
            { example: 'print(4 + 3)\n' + 'Output: 7', name: 'Addition' },
            { example: 'x = [1,2,3]\n' + 'y = [4,5,6]\n' + 'print(x + y)' + 'Output: [1,2,3,4,5,6]', name: 'Array concatenation' },
            { example: 'x = "abc"\n' + 'y = "def"\n' + 'print(x + y)]\n' + 'Output: "abcdef"', name: 'String concatenation' },
        ],
        link: '',
        freq: 12089,
    },
    {
        name: '<',
        description: [
            'Less than',
            'Is proper subset: x is a proper subset of y if all of the members of set x are inside set y but there is at least one number in set y that is not in set x',
        ],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 3743,
    },
    {
        name: '<=',
        description: ['Less than or equal', 'Is subset: set x is a subset of set y if all the numbers in set x are also in set y'],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 3743,
    },
    {
        name: '<<',
        description: ['Zero fill left shift: Shift left by pushing zeros in from the right and deleting leftmost bits'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 213,
    },
    {
        name: '==',
        description: ['Equals'],
        type: ['Counter', 'Default-Dict', 'Dict', 'List', 'Operators', 'Set', 'Tuple'],
        best: 'O(n)',
        worst: 'O(n)',
        examples: [],
        link: '',
        freq: 4727,
    },
    {
        name: '!=',
        description: ['Not equals'],
        type: ['Counter', 'Default-Dict', 'Dict', 'List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 4727,
    },
    {
        name: '=',
        description: ['Assignment Operator', 'Other Assignment Operators: -= += *= **= /= //= &= %= ^= <<= >>= |= ~='],
        type: ['Counter', 'Default-Dict', 'Dict', 'List', 'Operators', 'Set', 'Tuple', 'Deque', 'Heapq', 'String'],
        best: '',
        worst: '',
        examples: [''],
        link: '',
        freq: 19388,
    },
    {
        name: '>',
        description: [
            'Greater than',
            'Is proper superset: set x is a proper superset of set y if all the numbers in set y are also in set x, there is at least one number in set x that is not in set y',
        ],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 2808,
    },
    {
        name: '>=',
        description: ['Greater than or equal to', 'Is superset: set x is a superset of set y if all the numbers in set y are also in set x'],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 2808,
    },
    {
        name: '>>',
        description: ['Signed right shift: Push copies of the leftmost bit in from the left, and delete the rightmost bits'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 88,
    },
    {
        name: '|',
        description: ['Bitwise OR: Sets each bit to 1 if one of two bits is 1', 'Set: Union'],
        type: ['Operators', 'Counter', 'Default-Dict', 'Dict', 'Set'],
        best: '',
        worst: '',
        examples: [{}, { example: 'x = {1,2,3}\n' + 'y = {4,5,6}\n' + 'print(x | y)\n' + 'Output: {1,2,3,4,5,6}', name: 'Set Union' }],
        link: '',
        freq: 797,
    },
    {
        name: '~',
        description: ['Bitwise NOT: Inverts all bits'],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 137,
    },
];

let keywords = [
    {
        name: 'and',
        description: ['Boolean AND'],
        type: ['Operators', 'Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 2469,
    },
    {
        name: 'break',
        description: ['To break out of a loop'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 396,
    },
    {
        name: 'class',
        description: ['Defines a class'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 4478,
    },
    {
        name: 'continue',
        description: ['Skips to the next iteration of a loop'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 628,
    },
    {
        name: 'def',
        description: ['Defines a function'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 6859,
    },
    {
        name: 'del',
        description: ['Deletes an object'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 93,
    },
    {
        name: 'elif',
        description: ['Conditional else if'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 654,
    },
    {
        name: 'else',
        description: ['Conditional else'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1884,
    },
    {
        name: 'False',
        description: ['Boolean false'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 798,
    },
    {
        name: 'for',
        description: ['Creates a for loop'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [
            { example: 'x = [1,2,3,4]\narr = []\nfor i in x: arr.append(i)\nprint(arr)\nOutput: [1, 2, 3, 4]', name: '1d Loop' },
            { example: 'x = [[1, 2], [2, 3], [3, 4]]\nfor i, j in x: print((i, j))\nOutput:\n(1, 2)\n(2, 3)\n(3, 4)', name: '2d Loop' },
            { example: 'x =  ["a","b","c","d"]\narr = []\nfor i, j in enumerate(x): arr.append([i,j])\nprint(arr)\nOutput:[[0, "a"], [1, "b"], [2, "c"], [3, "d"]]', name: '1d + index' },
        ],
        link: '',
        freq: 7640,
    },
    {
        name: 'from',
        description: ['Used to import a specific part of a module'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 326,
    },

    {
        name: 'if',
        description: ['Conditional if'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 7952,
    },
    {
        name: 'in',
        description: ['Used to check if something is in an object'],
        type: ['String', 'Counter', 'Default-Dict', 'Dict', 'Operators', 'Set', 'Tuple', 'Keywords'],
        best: 'O(1)',
        worst: 'O(n)',
        examples: [],
        link: '',
        freq: 29683,
    },
    {
        name: 'import',
        description: ['Used to import a module'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 991,
    },
    {
        name: 'is',
        description: ['Used to compare variables for equality'],
        type: ['Operators', 'Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 8757,
    },
    {
        name: 'lambda',
        description: ['Creates an anonymous function'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 407,
    },
    {
        name: 'None',
        description: ['Represents null'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1315,
    },
    {
        name: 'not',
        description: ['Boolean NOT'],
        type: ['String', 'Counter', 'Default-Dict', 'Dict', 'Operators', 'Set', 'Tuple', 'Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1955,
    },
    {
        name: 'or',
        description: ['Boolean OR'],
        type: ['Operators', 'Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1026,
    },
    {
        name: 'return',
        description: ['Returns a value from a function, stopping the function in the process'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 7707,
    },
    {
        name: 'True',
        description: ['Boolean true'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 748,
    },
    {
        name: 'while',
        description: ['Used to create a while loop'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1931,
    },
    {
        name: 'yield',
        description: ['Used to return a generator'],
        type: ['Keywords'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 65,
    },
];

let methods = [
    {
        name: 'abs()',
        description: ['Returns the absolute value of a number'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 278,
    },
    {
        name: 'add()',
        description: ['Adds the selected value to a set'],
        type: ['Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 579,
    },
    {
        name: 'all()',
        description: ['Returns true if all the elements in an iterable are true, if not it returns false'],
        type: ['Counter', 'Default-Dict', 'Default-Functions', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 110,
    },
    {
        name: 'any()',
        description: ['Returns True if any item in an iterable object is true'],
        type: ['Counter', 'Default-Dict', 'Default-Functions', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 78,
    },
    {
        name: 'append()',
        description: ['Adds an element to the end of a list'],
        type: ['Deque', 'List'],
        best: 'O(1)',
        worst: 'O(1)',
        examples: [],
        link: '',
        freq: 2116,
    },
    {
        name: 'appendleft()',
        description: ['Adds an element to the left side of a deque'],
        type: ['Deque'],
        best: 'O(1)',
        worst: 'O(1)',
        examples: [],
        link: '',
        freq: 12,
    },

    {
        name: 'ceil()',
        description: ['Returns a number rounded up to the closest integer'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 26,
    },
    {
        name: 'chr()',
        description: ['Returns a character based on the provided Unicode code'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },

    {
        name: 'count()',
        description: ['Returns the number of elements with the specified value'],
        type: ['Deque', 'List', 'String', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 145,
    },
    {
        name: 'Counter()',
        description: ['Counts all the elements in an iterable', 'from collections import counter'],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 332,
    },

    {
        name: 'defaultdict()',
        description: ['Type of dictionary that never raises a key error, also provides a default value for keys that do not exist', 'from collections import defaultdict'],
        type: ['Default-Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 449,
    },

    {
        name: 'deque()',
        description: ['Functions as a double ended queue which allows pop and append operations from both ends in o(1) time', 'from collections import deque'],
        type: ['Deque'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 119,
    },
    {
        name: 'discard()',
        description: ['Removes the specified element from a set'],
        type: ['Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 31,
    },
    {
        name: 'dist()',
        description: ['Returns the distance between one and two dimensional points', 'import math'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 27,
    },
    {
        name: 'divmod()',
        description: ['Accepts two numbers and returns a tuple containing the quotient and the remainder'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 65,
    },
    {
        name: 'elements()',
        description: ['Returns an itertool of all the elements in the counter object', 'from collections import counter'],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 15,
    },

    {
        name: 'enumerate()',
        description: ['Adds a counter to an iterable and returns it as an enumerate object'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 525,
    },
    {
        name: 'extend()',
        description: ['Joins one list to the end of another'],
        type: ['Deque', 'List'],
        best: 'O(k)',
        worst: 'O(k)',
        examples: [],
        link: '',
        freq: 34,
    },

    {
        name: 'filter()',
        description: ['Filters the given iterable with a function that tests each element in the sequence as true or false, commonly used with lambda functions'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 10,
    },
    {
        name: 'find()',
        description: ['Searches the string for a specified element and returns either the index or -1 depending on if the element exists'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 108,
    },
    {
        name: 'float()',
        description: ['Returns a floating point number'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 444,
    },
    {
        name: 'format()',
        description: ['returns a formatted version of the given element controlled by the format specifier'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 46,
    },

    {
        name: 'gcd()',
        description: ['Returns the greatest common divisor between two integers', 'import math'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 62,
    },
    {
        name: 'get()',
        description: ['Return the value for the specified key if it exists'],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 81,
    },
    {
        name: 'heapify()',
        description: ['Transform a list into a heap in place'],
        type: ['Heapq'],
        best: 'O(n)',
        worst: '',
        examples: [],
        link: '',
        freq: 28,
    },
    {
        name: 'heappop()',
        description: ['Pop and return the smallest element found in a heap'],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 165,
    },
    {
        name: 'heappush()',
        description: ['Pushes the element onto a heap'],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 203,
    },
    {
        name: 'heappushpop()',
        description: ['Combines the functionality of heappush() and heappop() and is faster than calling each individually'],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 10,
    },

    {
        name: 'index()',
        description: ['Returns the index of the first element with the specified value'],
        type: ['Deque', 'List', 'String', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 105,
    },
    {
        name: 'insert()',
        description: ['Inserts an element at the specified index'],
        type: ['Deque', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 86,
    },
    {
        name: 'int()',
        description: ['Converts strings or other number formats to an integer and returns that value'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 530,
    },
    {
        name: 'isdigit()',
        description: ['Returns true if all the characters in a string are digits'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 76,
    },
    {
        name: 'items()',
        description: ['Returns the key value pairs of a dictionary in the form of tuples in a list'],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 229,
    },
    {
        name: 'iter()',
        description: ['Converts an iterable into an iterator object and returns it'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 31,
    },
    {
        name: 'join()',
        description: ['Converts the elements of an iterable into a string'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 322,
    },
    {
        name: 'keys()',
        description: ['Returns a list of dictionary keys as a view object'],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },

    {
        name: 'len()',
        description: ['Returns the length of an object'],
        type: ['Counter', 'Default-Dict', 'Default-Functions', 'Dict', 'List', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 5838,
    },
    {
        name: 'list()',
        description: ['Returns a list'],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 172,
    },
    {
        name: 'log()',
        description: ['returns the logarithm of a number', 'import math'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 92,
    },
    {
        name: 'lower()',
        description: ['Converts a string to lowercase and returns it'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },
    {
        name: 'map()',
        description: ['Runs the specified function for every element in an iterable'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 170,
    },
    {
        name: 'max()',
        description: ['Finds the largest item in an iterable and returns it'],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1251,
    },
    {
        name: 'min()',
        description: ['Finds the smallest item in an iterable and returns it'],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 876,
    },
    {
        name: 'most_common()',
        description: ['Return a list of the most common elements and their counts. Returns them in descending order'],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 14,
    },
    {
        name: 'next()',
        description: ['Returns the next item found in an iterable'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 110,
    },
    {
        name: 'ord()',
        description: ['Returns the integer value based on a provided unicode character'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 549,
    },
    {
        name: 'partition()',
        description: ['Splits a string into three parts based on a provided key and returns them as a tuple'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },
    {
        name: 'pop()',
        description: [
            'Returns the last item in an iterable, or a specified item if an argument is provided',
            'Deque: Remove and return an element from the right side of the deque',
        ],
        type: ['Dict', 'Deque', 'List', 'Default-Dict', 'Counter', 'Set'],
        best: 'O(1)',
        worst: 'O(n)',
        examples: [],
        link: '',
        freq: 655,
    },
    {
        name: 'popleft()',
        description: ['Remove and return an element from the left side of the deque'],
        type: ['Deque'],
        best: 'O(1)',
        worst: 'O(1)',
        examples: [],
        link: '',
        freq: 110,
    },
    {
        name: 'pow()',
        description: ['Returns the value of x to the power y'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 31,
    },
    {
        name: 'print()',
        description: ['Prints the specified content to the console or other output device'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 7,
    },
    {
        name: 'range()',
        description: ['Returns a sequence of numbers, starting from 0 and increments by 1 (by default)'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 857,
    },
    {
        name: 'reduce()',
        description: ['Applies a specified function to all the elements in a list', 'import functools'],
        type: ['List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 80,
    },
    {
        name: 'remove()',
        description: ['Removes the first matching element in a set or list'],
        type: ['Deque', 'List', 'Set'],
        best: 'O(n)',
        worst: 'O(n)',
        examples: [],
        link: '',
        freq: 98,
    },

    {
        name: 'reverse()',
        description: ['Reverses the order of a list in place'],
        type: ['Deque', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 70,
    },
    {
        name: 'reversed()',
        description: ['Returns a reversed iterator object'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 360,
    },
    {
        name: 'set()',
        description: ['Creates a set'],
        type: ['Set', 'Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 726,
    },
    {
        name: 'setdefault()',
        description: ['Returns the value of a key in a dictionary, if it doesnt exist the specified value is inserted at the provided key'],
        type: ['Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 22,
    },
    {
        name: 'sort()',
        description: ['Sorts the list in ascending order, or differently based on a provided sort function'],
        type: ['List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 342,
    },
    {
        name: 'sorted()',
        description: ['Sorts the elements of an iterable in a specified order'],
        type: ['Default-Functions', 'Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 257,
    },
    {
        name: 'split()',
        description: ['Splits the string using the specified delimiter, and returns a list'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 103,
    },
    {
        name: 'sqrt()',
        description: ['Returns the square root of a number', 'import math'],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 73,
    },
    {
        name: 'str()',
        description: ['Converts a provided value into a string and returns it'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 306,
    },
    {
        name: 'sum()',
        description: ['Adds the items in an iterable and returns the sum'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 557,
    },
    {
        name: 'total()',
        description: ['Returns the sum of the counts'],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 16,
    },

    {
        name: 'tuple()',
        description: ['Returns a tuple'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 88,
    },
    {
        name: 'update()',
        description: ['Dict: Updates the dictionary with the specified key-value pairs', 'Set: Update the set with another set, or any other iterable'],
        type: ['Set', 'Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 72,
    },
    {
        name: 'upper()',
        description: ['Converts a string to uppercase and returns it'],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 17,
    },
    {
        name: 'values()',
        description: ['Returns a list of all the values in the dictionary'],
        type: ['Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 56,
    },
    {
        name: 'zip()',
        description: ['Returns an iterator of tuples based on the provided iterables'],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 94,
    },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Categories

let categories = [
    {
        name: 'Counter',
        description: ['A subclass of dict that is used to count hashable objects and save them as key value pairs'],
        examples: [
            { example: 'from collections import counter', name: 'importing' },
            { example: 'x = Counter(iterable)', name: 'Creation' },
        ],
    },
    {
        name: 'Default-Dict',
        description: ['A subclass of dict that accepts an argument to define its default factory, such as list, dict, int, etc'],
        examples: [
            { example: 'from collections import defaultdict', name: 'Importing' },
            {
                example: 'l = [1,2,3,4]\nd = defaultdict(list)\nfor x in l: d[x].append(1)\nprint(d)\nOutput: {1: [1], 2: [1], 3: [1], 4: [1]}',
                name: 'list as default factory',
            },
            {
                example: 'l = [1,2,3]\nd = defaultdict(dict)\nfor x in l: d[x][x] = "a"print(d)\nOutput: {1: {1: "a"}, 2: {2: "a"}, 3: {3: "a"}',
                name: 'dict as default factory',
            },
        ],
    },
    {
        name: 'Default-Functions',
        description: ['All the default functions in python that are relevant to leetcode'],
        examples: [{ example: 'FunctionName()', name: 'Syntax' }],
    },
    {
        name: 'Deque',
        description: ['Deques are double ended queues that allow quick access to both ends'],
        examples: [
            { example: 'from collections import deque', name: 'Importing' },
            { example: 'x = deque(iterable)', name: 'Creation' },
        ],
    },
    {
        name: 'Dict',
        description: ['Dicts are ordered and changable collections. Duplicate values not allowed'],
        examples: [{ example: 'x = {"key": val}', name: 'Creation' }],
    },
    {
        name: 'Heapq',
        description: ['Heaps are binary trees for which every parent node has a value less than or equal to any of its children'],
        examples: [
            { example: 'import heapq', name: 'Importing' },
            { example: 'heapq.heapify(list)', name: 'Creation' },
        ],
    },
    {
        name: 'List',
        description: ['Lists are ordered and changable collections. Duplicate values allowed'],
        examples: [
            { example: 'x = []', name: 'Creation' },
            { example: 'x = list(iterable)' },
            { example: 'x = [1,2,3,4]\nprint([i+1 for i in x])\nOutput: [2, 3, 4, 5] ', name: 'List Comprehension' },
            { example: 'print([3*i for i in range(10) if i % 2 == 0])\nOutput: [0, 6, 12, 18, 24]', name: 'List comprehension + conditional' },
            {
                example: 'x = [1, 2, 3, 2]\ny = [[1, 2], [2, 3], [3, 4], [4, 5]]\nprint([sum(i*j+k for i, j in y) for k in x])\nOutput: [44, 48, 52, 48] ',
                name: '2d list comprehension',
            },
        ],
    },
    {
        name: 'Math-Methods',
        description: ['Various math methods that are relevent to leetcode'],
        examples: [{ example: 'import math', name: 'Importing' }],
    },
    {
        name: 'Set',
        description: ['Unordered collection of values. Cannot contain duplicate values'],
        examples: [
            { example: 'x = {x,y,z}', name: 'Creation' },
            { example: 'x = set(iterable)' },
            { example: 'x = [1, 2, 3, 4]\nprint({i+1 for i in x})\nOutput: {2, 3, 4, 5}', name: 'Set comprehension' },
            { example: 'print({3*i for i in range(5) if i != 3})\nOutput: {0, 3, 12, 6}', name: 'Set comprehension + conditional' },
            { example: 'x = [1, 2, 3, 2]\ny = [[1, 2], [2, 3], [3, 4], [4, 5]]\nprint({sum(i*j+k for i, j in y) for k in x})\nOutput: {48, 44, 52}', name: '2d set comprehension' },
        ],
    },
    {
        name: 'String',
        description: ['Strings are collections of unicode characters'],
        examples: [{ example: 'x = ""', name: 'Creation' }],
    },
    {
        name: 'Tuple',
        description: ['Tuples are ordered and unchangable collections. Duplicate values allowed'],
        examples: [{ example: 'x = ()', name: 'Creation' }],
    },
];

////////////////////////////////////////////////////////////////////////////////////////////////////
//DSA

let algorithms = [
    {
        name: 'Dynamic Programming',
        description: [],
        examples: [],
        freq: 383,
    },
    {
        name: 'Quick Sort',
        description: [],
        examples: [],
        freq: 253,
    },
    {
        name: 'Merge Sort',
        description: [],
        examples: [],
        freq: 253,
    },
    {
        name: 'Heap Sort',
        description: ['A heapsort can be implemented by pushing values onto a heap and then popping off the smallest values one at a time'],
        examples: [
            {
                example:
                    'import heapq\n' +
                    'def heapsort(iterable):\n' +
                    '    h = []\n' +
                    '    for val in iterable:\n' +
                    '        heappush(h, val)\n' +
                    '    return [heappop(h) for x in range(len(h))]',
                name: 'Implementation',
            },
        ],
        freq: 253,
    },
    {
        name: 'Tree DFS',
        description: [],
        examples: [],
        freq: 250,
    },
    {
        name: 'Graph DFS',
        description: [],
        examples: [],
        freq: 250,
    },
    {
        name: 'Greedy',
        description: [],
        examples: [],
        freq: 248,
    },
    {
        name: 'Tree BFS',
        description: [],
        examples: [],
        freq: 198,
    },
    {
        name: 'Graph BFS',
        description: [],
        examples: [],
        freq: 198,
    },
    {
        name: 'Binary Search',
        description: [],
        examples: [],
        freq: 186,
    },
    {
        name: 'Two Pointer',
        description: [],
        examples: [],
        freq: 147,
    },
    {
        name: 'Fast and Slow pointers',
        description: [],
        examples: [],
        freq: 147,
    },
    {
        name: 'Backtracking',
        description: [],
        examples: [],
        freq: 91,
    },
    {
        name: 'Sliding Window',
        description: [],
        examples: [],
        freq: 72,
    },
    {
        name: 'Union Find',
        description: [],
        examples: [],
        freq: 63,
    },
    {
        name: 'Recursion',
        description: [],
        examples: [],
        freq: 44,
    },
    {
        name: 'Monotonic Stack',
        description: [],
        examples: [],
        freq: 44,
    },
    {
        name: 'Divide and Conquer',
        description: [],
        examples: [],
        freq: 38,
    },
    {
        name: 'Memoization',
        description: [],
        examples: [],
        freq: 32,
    },
    {
        name: 'Topological sort',
        description: [],
        examples: [],
        freq: 28,
    },
    {
        name: 'Segment Tree',
        description: [],
        examples: [],
        freq: 27,
    },
    {
        name: 'Dijkstras',
        description: [],
        examples: [],
        freq: 20,
    },
];

let dataStructures = [
    {
        name: 'Array',
        description: [],
        examples: [],
        freq: 1142,
    },
    {
        name: 'String',
        description: [],
        examples: [],
        freq: 549,
    },
    {
        name: 'Hash Table',
        description: [],
        examples: [],
        freq: 392,
    },
    {
        name: 'Binary Search Tree',
        description: [],
        examples: [],
        freq: 191,
    },
    {
        name: 'Binary Tree',
        description: [],
        examples: [],
        freq: 191,
    },
    {
        name: 'Matrix',
        description: ['Matrix = A'],
        examples: [
            { example: 'for x in range(len(A)):\n' + '    for y in range(x):\n' + '        A[x][y], A[y][x] = A[y][x], A[x][y]', name: 'Transpose (swap cols and rows)' },
            { example: 'A[:] = A[::-1]', name: 'Reverse (slower)' },
            { example: 'A.reverse()', name: 'Reverse (faster / in Place)' },
            { example: 'A[:] = zip(*A[::-1])', name: 'Rotate right (returns tuples)' },
            { example: 'A[:] = map(list, zip(*A[::-1]))', name: 'Rotate right (returns lists)' },
        ],
        freq: 171,
    },
    {
        name: 'Stack',
        description: [],
        examples: [],
        freq: 128,
    },
    {
        name: 'Heap',
        description: [],
        examples: [],
        freq: 107,
    },
    {
        name: 'Priority Queue',
        description: [],
        examples: [],
        freq: 107,
    },
    {
        name: 'Graph',
        description: [],
        examples: [],
        freq: 102,
    },
    {
        name: 'Linked List (Single)',
        description: [],
        examples: [],
        freq: 69,
    },
    {
        name: 'Linked List (Double)',
        description: [],
        examples: [],
        freq: 69,
    },
    {
        name: 'Trie',
        description: [],
        examples: [],
        freq: 44,
    },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Creators

function createButton(x) {
    let button = document.createElement('button');
    button.innerHTML = x.name;
    button.classList.add('button');

    return button;
}

function createDropdown() {
    let dropdown = document.createElement('div');
    dropdown.classList.add('dropDown');

    return dropdown;
}

function createBigO(x) {
    let bigO = document.createElement('div');
    bigO.classList.add('flexContainer');

    let best = document.createElement('div');
    best.classList.add('best');
    best.innerHTML = x.best;

    let worst = document.createElement('div');
    worst.classList.add('worst');
    worst.innerHTML = x.worst;

    bigO.appendChild(best);
    bigO.appendChild(worst);

    return bigO;
}

function createDescription(x) {
    let description = document.createElement('ul');
    description.classList.add('info');

    for (let i = 0; i < x.description.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = x.description[i];
        description.appendChild(item);
    }

    return description;
}

function createExamples(x) {
    let examples = document.createElement('ul');
    examples.classList.add('info');

    for (let i = 0; i < x.examples.length; i++) {
        let item = document.createElement('li');
        let wrap = document.createElement('pre');
        if (x.examples[i].name) {
            let head = document.createElement('h3');
            head.innerHTML = x.examples[i].name;
            item.appendChild(head);
        }
        wrap.innerHTML = x.examples[i].example;
        item.appendChild(wrap);
        examples.appendChild(item);
    }

    return examples;
}

function createType(x) {
    let type = document.createElement('div');
    type.classList.add('info');

    let types = `(${x.type[0]})`;
    for (let i = 1; i < x.type.length; i++) {
        types += ` - (${x.type[i]})`;
    }

    type.innerHTML = types;

    return type;
}

function createInfo(x) {
    let info = document.createElement('div');
    info.classList.add('flexContainer');

    let freqContainer = document.createElement('div');
    freqContainer.innerHTML = 'Frequency: ';

    let freq = document.createElement('span');
    freq.innerHTML = x.freq;

    if (x.freq > 100) {
        freq.classList.add('best');
    } else if (x.freq > 50) {
        freq.classList.add('average');
    } else if (x.freq > 0) {
        freq.classList.add('worst');
    }

    freqContainer.appendChild(freq);
    info.appendChild(freqContainer);

    return info;
}

function createHr() {
    let hr = document.createElement('hr');
    return hr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create operators/Methods/Keywords

function createTag(x) {
    let container = document.createElement('div');
    container.classList.add('item');

    let button = createButton(x);
    let dropDown = createDropdown(x);

    button.addEventListener('mouseover', function () {
        closeDropDowns();
        dropDown.classList.toggle('show');
        button.classList.toggle('selected');
    });

    for (let i = 0; i < x.type.length; i++) {
        button.classList.add(`${x.type[i]}`);
    }

    container.appendChild(button);

    if (x.best && x.worst) {
        dropDown.appendChild(createBigO(x));
        dropDown.appendChild(createHr());
    }
    if (x.description[0]) {
        dropDown.appendChild(createDescription(x));
        dropDown.appendChild(createHr());
    }
    if (x.examples[0]) {
        dropDown.appendChild(createExamples(x));
        dropDown.appendChild(createHr());
    }
    if (x.freq) {
        dropDown.appendChild(createInfo(x));
    }

    container.appendChild(dropDown);
    return container;
}

function placeTags(container, list) {
    for (let i = 0; i < list.length; i++) {
        container.appendChild(createTag(list[i]));
    }
}

function createTags() {
    let methodsContainer = document.querySelector('.methods');
    placeTags(methodsContainer, methods);
    let keywordsContainer = document.querySelector('.keywords');
    placeTags(keywordsContainer, keywords);
    let operatorsContainer = document.querySelector('.operators');
    placeTags(operatorsContainer, operators);
}

createTags();

///////////////////////////////////////////////////////////////////////////////////////////////////////
//Create Categories

function createCategory(x) {
    let container = document.createElement('div');
    container.classList.add('item');

    let button = createButton(x);
    let dropDown = createDropdown(x);
    button.classList.add(`${x.name}`);

    button.addEventListener('mouseover', function () {
        closeDropDowns();
        dropDown.classList.toggle('show');
        button.classList.toggle('selected');
    });

    button.onclick = function () {
        highlight(`${x.name}`);
    };
    container.appendChild(button);

    if (x.description[0]) {
        dropDown.appendChild(createDescription(x));
        dropDown.appendChild(createHr());
    }
    if (x.examples[0]) {
        dropDown.appendChild(createExamples(x));
    }

    container.appendChild(dropDown);
    return container;
}

function placeCategory(container, list) {
    for (let i = 0; i < list.length; i++) {
        container.appendChild(createCategory(list[i]));
    }
}

function createCategories() {
    let categoriesContainer = document.querySelector('.categories');
    placeCategory(categoriesContainer, categories);
}

createCategories();

////////////////////////////////////////////////////////////////////////////////////////////////////
//Create DSA

function createDSA(x) {
    let container = document.createElement('div');
    container.classList.add('item');

    let button = createButton(x);
    let dropDown = createDropdown(x);

    button.addEventListener('mouseover', function () {
        closeDropDowns();
        dropDown.classList.toggle('show');
        button.classList.toggle('selected');
    });

    container.appendChild(button);

    if (x.description[0]) {
        dropDown.appendChild(createDescription(x));
        dropDown.appendChild(createHr());
    }
    if (x.examples[0]) {
        dropDown.appendChild(createExamples(x));
        dropDown.appendChild(createHr());
    }
    if (x.freq) {
        dropDown.appendChild(createInfo(x));
    }

    container.appendChild(dropDown);
    return container;
}

function placeDSA(container, list) {
    for (let i = 0; i < list.length; i++) {
        container.appendChild(createDSA(list[i]));
    }
}

function createDSAs() {
    let algorithmsContainer = document.querySelector('.algorithms');
    let dataStructuresContainer = document.querySelector('.data-structures');
    placeDSA(algorithmsContainer, algorithms);
    placeDSA(dataStructuresContainer, dataStructures);
}

createDSAs();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Closing Dropdowns

document.querySelector('.container').addEventListener('mouseover', function (event) {
    if (!event.target.matches('.dropDown') && !event.target.matches('.selected')) {
        closeDropDowns();
    }
});

function closeDropDowns() {
    let dropdowns = document.getElementsByClassName('dropDown');
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.toggle('show');
        }
    }
    let button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        let btn = button[i];
        if (btn.classList.contains('selected')) {
            btn.classList.toggle('selected');
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Highlighting Categories

function highlight(x) {
    let old = document.getElementsByTagName('button');
    for (let i = 0; i < old.length; i++) {
        old[i].classList.remove('highlight');
    }

    let element = document.getElementsByClassName(`${x}`);
    for (let i = 0; i < element.length; i++) {
        element[i].classList.toggle('highlight');
    }
}

document.querySelector('.container').addEventListener('click', function (event) {
    if (!event.target.matches('.dropDown') && !event.target.matches('.selected')) {
        highlight('none');
    }
});
