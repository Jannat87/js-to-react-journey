# JavaScript to React Journey

## js basic

- js output
    - console.log() : JavaScript-এর সবচেয়ে বেশি ব্যবহৃত built-in method। এটা দিয়ে Browser-এর Console-এ কোনো value, message বা data দেখানো হয়।
    - document.write() : JavaScript-এর একটি method, যেটা দিয়ে সরাসরি webpage/document-এর মধ্যে কিছু লেখা যায়।
    - alert() : JavaScript-এর একটি built-in function, যেটা ব্যবহার করে browser-এ একটা popup message box দেখানো হয়।
    - innerHTML : JavaScript-এর একটি property, যেটা দিয়ে কোনো HTML element-এর ভেতরের content দেখা বা পরিবর্তন করা যায়।
    - textContent : JavaScript-এর একটি property। এটা দিয়ে কোনো HTML element-এর ভেতরের শুধু text পড়া বা পরিবর্তন করা যায়।
    - console.error() : JavaScript-এর একটি built-in method, যেটা Browser-এর Console-এ error message দেখানোর জন্য ব্যবহার করা হয়। 
    - console.warn() : JavaScript-এর একটি built-in method, যেটা Browser-এর Console-এ warning message দেখানোর জন্য ব্যবহার করা হয়।
    - console.table() : JavaScript-এর একটি built-in method, যেটা data-কে Browser Console-এ table বা ছকের আকারে দেখায়।
    - console.info() : JavaScript-এর একটি built-in method, যেটা Browser-এর Console-এ informational message দেখানোর জন্য ব্যবহার করা হয়।
- js variable
    - variable : Variable হলো এমন একটি নাম/Container যেখানে আমরা কোনো data বা value সংরক্ষণ করতে পারি।
        1. var : যে variable-এর value পরে পরিবর্তন হতে পারে| var holo akti undefined keyword| kono keyword define na kora thakle sekhane auto var keyword kaj kore|
        2. let : যে variable-এর value পরে পরিবর্তন হতে পারে|
        3. const : যে variable-এর value পরে পরিবর্তন করা যাবে না|

    Variable-এ বিভিন্ন ধরনের data রাখা যায়| Jamon : String, Number, Boolean, Array, Object.
     
- js operators
    Operator : Operator হলো এমন একটি symbol, যার মাধ্যমে আমরা কোনো operation বা কাজ করতে পারি।

    জাভাস্ক্রিপ্টে প্রধান অপারেটরগুলো কী কী?

    Arithmetic Operators: গাণিতিক কাজের জন্য (+, -, *, /, %, ** - Exponentiation)।Assignment Operators: মান অ্যাসাইন করার জন্য (=, +=, -=, *=, /=)।Comparison Operators: তুলনা করার জন্য (==, ===, !=, !==, >, <, >=, <=)।Logical Operators: লজিক চেক করার জন্য (&& - AND, || - OR, ! - NOT)।Type Operators: টাইপ চেক করার জন্য (typeof, instanceof)।

- js conditions
- js loop
- js datatype

    Primitive বনাম Non-Primitive ডাটা টাইপের মধ্যে পার্থক্য কী?

    Primitive: এগুলো সরাসরি ভেরিয়েবলের মেমোরি লোকেশনে মান (Value) জমা রাখে। যেমন: String, Number, Boolean, Undefined, Null ইত্যাদি। এগুলো immutable (পরিবর্তন অযোগ্য)

    ।Non-Primitive: এগুলো মেমোরিতে সরাসরি মান না রেখে একটি রেফারেন্স (Address) জমা রাখে। যেমন: Object, Array।

    String Concatenation বনাম Addition:

    + অপারেটর দেখলে জাভাস্ক্রিপ্ট সংখ্যাটিকেও স্ট্রিং বানিয়ে কনক্যাটিনেট (জোড়া দেওয়া) করে। কিন্তু - অপারেটর স্ট্রিংয়ের ক্ষেত্রে কাজ করে না, তাই জাভাস্ক্রিপ্ট ভেতরের স্ট্রিংটিকে সংখ্যায় রূপান্তর করে বিয়োগ করে।

    Increment / Decrement (++ এবং --):

    x++ (Post-increment) আগে মান y-তে অ্যাসাইন করে, তারপর x-এর মান বাড়ায়। আর ++a (Pre-increment) আগে a-এর মান বাড়ায়, তারপর সেই বর্ধিত মান b-তে অ্যাসাইন করে।

    Logical OR (||) এবং Nullish Coalescing (??):

    || অপারেটর বামপাশের মানটি Falsy (যেমন: 0, "", false, null, undefined) হলে ডানপাশের মানটি নেয়। যেহেতু 0 একটি Falsy ভ্যালু, তাই সে 10 নিয়েছে।কিন্তু ?? অপারেটর শুধু null অথবা undefined হলেই ডানপাশে যায়, 0 বা "" হলে বামপাশের মানটিই রেখে দেয়।

- js function
- js object
- js scope
- js array
- js DOM
- js events
- js async
