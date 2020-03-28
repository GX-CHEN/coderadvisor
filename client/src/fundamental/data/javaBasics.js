const javaBasics = [
  {
    q: "What is strongly typed?",
    a:
      "A strongly typed language has stricter typing rules at compile time, which implies that errors and exceptions are more likely to happen during compilation."
  },
  {
    q: "Advantage of strongly type? Disadvantage?",
    a:
      "1. Advantages:\n" +
      "    1. Earlier detection of errors in compiling, speeds development\n" +
      "    2. Type helps team members understand code easier\n" +
      '    3. The posed type restriction can avoid code confusions (in JS, we can add string to number "2"+3=5, which could cause bugs)\n' +
      "2. Disadvantage: Not much, if really want to list some disadvantage: since strongly typed need more code for specification, it might affect early stage of development speed, (but in big project, strongly type will speed up development)"
  },
  {
    q:
      "Difference between run-time and compiling error. Example for each.",
    a:
      "  A run time error will only occur when the code is actually running. These are the most difficult, can be hard to track down.\n" +
      "  \n" +
      "  1. Example of compiling error (checked)\n" +
      "     1. Syntax Error (mismatch braces/brackets; missing semi-colon)\n" +
      "     2. Type mismatch\n" +
      "     3. Missing Return Statement\n" +
      "  2. Example of run time error (unchecked)\n" +
      "     1. Incorrect comparison operators (e.g., not using double equal signs to indicate assignment)\n" +
      "     2. Referencing objects that don't exist, or don't exist using the capitalization supplied in the code\n" +
      "     3. Referencing an object that has no properties"
  },
  {
    q: "Data Abstract in Java? how can it be achieved?",
    a:
      "  Data abstraction is the process of hiding certain details and showing only essential information to the user.\n" +
      "  In Java, Abstraction can be achieved with either abstract classes or interfaces"
  },
  {
    q: "Difference between interface and abstract class?",
    a:
      "  1. Type of methods: Interface can have only abstract methods. Abstract class can have abstract and non-abstract methods. From Java 8, it can have default and static methods also.\n" +
      "  2. Final Variables: Variables declared in a Java interface are by default final. An abstract class may contain non-final variables.\n" +
      "  3. Type of variables: Abstract class can have final, non-final, static and non-static variables. Interface has only static and final variables.\n" +
      "  4. Implementation: Abstract class can provide the implementation of interface. Interface can’t provide the implementation of abstract class.\n" +
      "  5. Inheritance vs Abstraction: A Java interface can be implemented using keyword “implements” and abstract class can be extended using keyword “extends”.\n" +
      "  6. Multiple implementation: An interface can extend another Java interface only, an abstract class can extend another Java class and implement multiple Java interfaces.\n" +
      "  7. Accessibility of Data Members: Members of a Java interface are public by default. A Java abstract class can have class members like private, protected, etc."
  },
  {
    q: "Interface or subclassing, Which is better?",
    a:
      "  (Arguably) Interface is generally considered to be better\n" +
      "  \n" +
      "  1. More flexible, since a class can extends only 1 class, but can implement multiple interfaces\n" +
      "  2. Separate the implementation and abstraction"
  },
  {
    q: "Different between Array and ArrayList",
    a:
      "  1. Implementation of array is simple fixed sized array but Implementation of ArrayList is dynamic sized array.\n" +
      "  2. Array can contain both primitives and objects but ArrayList can contain only object elements\n" +
      "  3. You can’t use generics along with array but ArrayList allows us to use generics to ensure type safety.\n" +
      "  4. You can use length variable to calculate length of an array but size() method to calculate size of ArrayList.\n" +
      "  5. Array use assignment operator to store elements but ArrayList use add() to insert elements."
  },
  {
    q: " Priority Queue in Java (Very important for Heap data structure)",
    a:
      "  1. A PriorityQueue is used when the objects are supposed to be processed based on the priority. It is known that a queue follows First-In-First-Out algorithm, but sometimes the elements of the queue are needed to be processed according to the priority, that’s when the PriorityQueue comes into play.\n" +
      "  2. Make sure to know the **Exact Syntax** of priority queue to implement Heap Data Structure\n"
  },
  {
    q: "try/catch/finally",
    a:
      "  1. The finally block always executes when the try block exits. This ensures that the finally block is executed even if an unexpected exception occurs\n" +
      "  2. The finally block is a key tool for preventing resource leaks. When closing a file or otherwise recovering resources, place the code in a finally block to ensure that resource is always recovered."
  },
  {
    q: "final keyword",
    a:
      "In Java the final keyword is used in several contexts to **define an entity that can only be assigned once**, examples:\n" +
      "  \n" +
      "  1. A final class cannot be subclassed.\n" +
      "  2. A final method cannot be overridden or hidden by subclasses.\n" +
      "  3. A final variable can only be initialized once, either via an initializer or an assignment statement.\n"
  },
  {
    q: "Mutable/Immutable data structure",
    a:
      "  1. Mutable object – You can change the states and fields after the object is created. For examples: StringBuilder, java.util.Date and etc.\n" +
      "  2. Immutable object – You cannot change anything after the object is created. For examples: String, boxed primitive objects like Integer, Long and etc."
  },
  {
    q: "Java Enum:",
    a:
      '  An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).\n' +
      "  \n" +
      "  ```\n" +
      "    enum Level {\n" +
      "    LOW,\n" +
      "    MEDIUM,\n" +
      "    HIGH\n" +
      "    }\n" +
      "  ```\n" +
      "  \n" +
      "  You can also have an enum inside a class:\n" +
      "  \n" +
      "  ```\n" +
      "  public class MyClass {\n" +
      "  enum Level {\n" +
      "    LOW,\n" +
      "    MEDIUM,\n" +
      "    HIGH\n" +
      "  }\n" +
      "  public static void main(String[] args) {\n" +
      "      Level myVar = Level.MEDIUM;\n" +
      "      System.out.println(myVar);\n" +
      "      }\n" +
      "  }\n" +
      "  ```"
  },
  {
    q: "List collection types in Java",
    a:
      "- List all the collection types you know\n" +
      "\n" +
      "  **At least should know first five, and Priority Queue**\n" +
      "  \n" +
      "  1. Array\n" +
      "  2. ArrayList\n" +
      "  3. LinkedList\n" +
      "  4. HashMap\n" +
      "  5. Hashtable\n" +
      "  6. LinkedHashMap\n" +
      "  7. TreeMap\n" +
      "  8. HashSet\n" +
      "  9. LinkedHashSet\n" +
      "  10. TreeSet\n" +
      "  11. Priority Queue"
  },
  {
    q: "Overriding vs Overloading",
    a:
      "  1. Overloading occurs when two or more methods in one class have the same method name but different parameters.\n" +
      "  2. Overriding means having two methods with the same method name and parameters (i.e., method signature). One of the methods is in the parent class and the other is in the child class. Overriding allows a child class to provide a specific implementation of a method that is already provided its parent class."
  },
  {
    q: "public, protected, private (& package)",
    a:
      "  1. If the class member declared as public then it can be accessed everywhere.\n" +
      "  2. If the class members declared as protected then it can be accessed only within the class itself and by inheriting and parent classes.\n" +
      "  3. If the class members declared as private then it may only be accessed by the class that defines the member.\n"
  },
  {
    q: "When not provide constructor for Java class, what may happen?",
    a:
      " Java does not actually require an explicit constructor in the class description. If you do not include a constructor, the Java compiler will create a default constructor in the byte code with an empty argument.\n"
  },
  {
    q: "How to manage memory in Java? What could cause memory leak?\n",
    a:
      "  Java itself manages the memory and needs no explicit intervention of the programmer. **Garbage Collector** itself ensures that the unused space gets cleaned and memory can be freed when not needed. (Not all the language have garbage collector, like C)"
  },
  {
    q: "this() and super()",
    a:
      "  1. super() as well as this() both are used to make constructor calls.\n" +
      "  2. super() is used to call Base class’s constructor(i.e, Parent’s class) while this() is used to call current class’s constructor."
  },
  {
    q: "Clone an object and Java? Clone array, ArrayList, set etc.\n",
    a:
      "You can manually create a new object and copy each field, but you can also use clone() method\n"
  },
  {
    q: "Default value of the local variables?",
    a:
      "  1. The local variables are not initialized to any default values.\n" +
      "  2. We should not use local variables with out initialization."
  },
  {
    q: "Is everything in Java an Object?",
    a:
      "  Every object is a java.lang.Object (NOTE:java.lang.Object has no super class.)\n" +
      "  However, there are many things which are not Objects.\n" +
      "  \n" +
      "  1.  primitives and references. **You can ignore all the other things, and only remember primitive**\n" +
      "  2.  fields (the fields themselves not the contents)\n" +
      "  3.  local variables and parameters.\n"
  },
  {
    q: "How many Primitive Types does Java have",
    a:
      "  1. byte 1 byte\n" +
      "  2. short 2 bytes\n" +
      "  3. int 4 bytes\n" +
      "  4. long 8 bytes\n" +
      "  5. float 4 bytes\n" +
      "  6. double 8 bytes\n" +
      "  7. boolean 1 bit\n" +
      "  8. char 2 bytes\n"
  },
  {
    q: " Classic OOP concepts",
    a:
      "  I'll skip the examples here, but want to emphasis that: need to make sure fully understand all of the following concept, can write code example within 5 minutes:\n" +
      "  \n" +
      "  1.  Inheritance\n" +
      "  2.  Encapsulation\n" +
      "  3.  Polymorphism\n" +
      "  4.  Abstraction\n"
  },
  {
    q: "What is Singleton",
    a:
      "  In object-oriented programming, a singleton class is a class that can have only one object (an instance of the class) at a time."
  }
];

export default javaBasics;
