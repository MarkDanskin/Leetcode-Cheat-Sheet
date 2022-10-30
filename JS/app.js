let operators = [
    {
        name: '-     -=',
        description: ['test'],
        type: ['Operators', 'Set'],
        best: 'asd',
        worst: 'asd',
        examples: ['test'],
        link: '',
        freq: 20844,
    },
    {
        name: '[:]',
        description: ['Slice operator, used to access values from within iterable objects'],
        type: ['Counter', 'Default-Dict', 'Dict', 'String', 'Tuple', 'List', 'Operators'],
        best: '',
        worst: '',
        examples: ['list[:]', 'string[start:stop:step]', 'tuple[]'],
        link: '',
        freq: 11765,
    },
    {
        name: '@     @=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 481,
    },
    {
        name: '*     *=',
        description: ['Multiplication','Splat operator is used to unpack a list into arguments'],
        type: ['String', 'List', 'Operators', 'Tuple'],
        best: '',
        worst: '',
        examples: [{ example: 'lst(*[1, 2, 3]) is equal to lst(1, 2, 3)', name:'Splat Operator' }],
        link: '',
        freq: 5555,
    },
    {
        name: '**     **=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 541,
    },
    {
        name: '/     /=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 3381,
    },
    {
        name: '//     //=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1143,
    },
    {
        name: '&     &=',
        description: [],
        type: ['Operators', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 366,
    },
    {
        name: '%     %=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1694,
    },
    {
        name: '^     =^',
        description: [],
        type: ['Operators', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1258,
    },
    {
        name: '+     +=',
        description: [],
        type: ['String', 'List', 'Operators', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 12089,
    },
    {
        name: '<    <=',
        description: [],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 3743,
    },
    {
        name: '<<     <<=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 213,
    },
    {
        name: '==    !=',
        description: [],
        type: ['Counter', 'Default-Dict', 'Dict', 'List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 4727,
    },
    {
        name: '=',
        description: [''],
        type: ['Counter', 'Default-Dict', 'Dict', 'List', 'Operators', 'Set', 'Tuple', 'Deque', 'Heapq', 'String'],
        best: '',
        worst: '',
        examples: [''],
        link: '',
        freq: 19388,
    },
    {
        name: '>    >=',
        description: [],
        type: ['List', 'Operators', 'Set', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 2808,
    },
    {
        name: '>>     >>=',
        description: [],
        type: ['Operators'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 88,
    },
    {
        name: '|     |=',
        description: [],
        type: ['Operators', 'Counter', 'Default-Dict', 'Dict', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 797,
    },
    {
        name: '~     ~=',
        description: [],
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
        examples: [],
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
        best: '',
        worst: '',
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
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 2116,
    },
    {
        name: 'appendleft()',
        description: ['Adds an element to the left side of a deque'],
        type: ['Deque'],
        best: '',
        worst: '',
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
        best: '',
        worst: '',
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
        description: [],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 62,
    },
    {
        name: 'get()',
        description: [],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 81,
    },
    {
        name: 'heapify()',
        description: [],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 28,
    },
    {
        name: 'heappop()',
        description: [],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 165,
    },
    {
        name: 'heappush()',
        description: [],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 203,
    },
    {
        name: 'heappushpop()',
        description: [],
        type: ['Heapq'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 10,
    },

    {
        name: 'index()',
        description: [],
        type: ['Deque', 'List', 'String', 'Tuple'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 105,
    },
    {
        name: 'insert()',
        description: [],
        type: ['Deque', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 86,
    },
    {
        name: 'int()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 530,
    },
    {
        name: 'isdigit()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 76,
    },
    {
        name: 'items()',
        description: [],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 229,
    },
    {
        name: 'iter()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 31,
    },
    {
        name: 'join()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 322,
    },
    {
        name: 'keys()',
        description: [],
        type: ['Counter', 'Default-Dict', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },

    {
        name: 'len()',
        description: [],
        type: ['Counter', 'Default-Dict', 'Default-Functions', 'Dict', 'List', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 5838,
    },
    {
        name: 'list()',
        description: [],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 172,
    },
    {
        name: 'log()',
        description: [],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 92,
    },
    {
        name: 'lower()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },
    {
        name: 'map()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 170,
    },
    {
        name: 'max()',
        description: [],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 1251,
    },
    {
        name: 'min()',
        description: [],
        type: ['Default-Functions', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 876,
    },
    {
        name: 'most_common()',
        description: [],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 14,
    },
    {
        name: 'next()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 110,
    },
    {
        name: 'ord()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 549,
    },
    {
        name: 'partition()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 43,
    },
    {
        name: 'pop()',
        description: [],
        type: ['Dict', 'Deque', 'List', 'Default-Dict', 'Counter', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 655,
    },
    {
        name: 'popleft()',
        description: [],
        type: ['Deque'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 110,
    },
    {
        name: 'pow()',
        description: [],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 31,
    },
    {
        name: 'print()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 7,
    },
    {
        name: 'range()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 857,
    },
    {
        name: 'reduce()',
        description: [],
        type: ['List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 80,
    },
    {
        name: 'remove()',
        description: [],
        type: ['Deque', 'List', 'Set'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 98,
    },

    {
        name: 'reverse()',
        description: [],
        type: ['Deque', 'List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 70,
    },
    {
        name: 'reversed()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 360,
    },
    {
        name: 'set()',
        description: [],
        type: ['Set', 'Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 726,
    },
    {
        name: 'setdefault()',
        description: [],
        type: ['Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 22,
    },
    {
        name: 'sort()',
        description: [],
        type: ['List'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 342,
    },
    {
        name: 'sorted()',
        description: [],
        type: ['Default-Functions', 'Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 257,
    },
    {
        name: 'split()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 103,
    },
    {
        name: 'sqrt()',
        description: [],
        type: ['Math-Methods'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 73,
    },
    {
        name: 'str()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 306,
    },
    {
        name: 'sum()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 557,
    },
    {
        name: 'total()',
        description: [],
        type: ['Counter'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 16,
    },

    {
        name: 'tuple()',
        description: [],
        type: ['Default-Functions'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 88,
    },
    {
        name: 'update()',
        description: [],
        type: ['Set', 'Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 72,
    },
    {
        name: 'upper()',
        description: [],
        type: ['String'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 17,
    },
    {
        name: 'values()',
        description: [],
        type: ['Default-Dict', 'Counter', 'Dict'],
        best: '',
        worst: '',
        examples: [],
        link: '',
        freq: 56,
    },
    {
        name: 'zip()',
        description: [],
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
        description: [],
        examples: ['import collections'],
    },
    {
        name: 'Default-Dict',
        description: [],
        examples: ['import defaultdict'],
    },
    {
        name: 'Default-Functions',
        description: [],
        examples: [],
    },
    {
        name: 'Deque',
        description: [],
        examples: ['import deque'],
    },
    {
        name: 'Dict',
        description: [],
        examples: ["dict = {'x':y}"],
    },
    {
        name: 'Heapq',
        description: [],
        examples: ['heap = []'],
    },
    {
        name: 'List',
        description: [],
        examples: [],
    },
    {
        name: 'Math-Methods',
        description: [],
        examples: [],
    },
    {
        name: 'Set',
        description: [],
        examples: ['set = {x,y,z}'],
    },
    {
        name: 'String',
        description: [],
        examples: ['string = ""'],
    },
    {
        name: 'Tuple',
        description: [],
        examples: ['tuple = ()'],
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
        description: [],
        examples: [],
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
        description: ["Matrix = A"],
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
        if (x.examples[i].name){
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
        dropDown.appendChild(createHr());
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
