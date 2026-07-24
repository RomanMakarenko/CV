export interface GitHubProject {
  name: string;
  url: string;
  description: string;
}

export interface CurriculumLevel {
  title: string;
  topics: string[];
  isProject?: boolean;
}

export interface CurriculumModule {
  name: string;
  levels: CurriculumLevel[];
  projects?: GitHubProject[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image?: string;
  modules?: CurriculumModule[];
  description?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    name: "GenAI & AI Agents for QA Automation | Copilot & Claude Code",
    issuer: "Udemy",
    date: "May 2026",
    image: "/certificates/genai-qa.jpg",
  },
  {
    id: "cert-2",
    name: "Java Developer Professional",
    issuer: "JavaRush",
    date: "May 2024",
    image: "/certificates/javarush.jpg",
    description:
      "A comprehensive Java training program consisting of 5 modules with lectures, hands-on practice, and capstone projects — taking students from beginner to Junior Developer level, plus a final group project.",
    modules: [
      // ======== MODULE 1: Java Syntax ========
      {
        name: "Module 1. Java Syntax",
        levels: [
          {
            title: "Introduction. Commands & First Java Program",
            topics: [
              "Advantages of Java and its application areas",
              "About JavaRush and Java University",
              "Program structure, the main method",
              "System.out.println()",
              "Introduction to the website and WebIDE",
            ],
          },
          {
            title: "Working with Variables, int and String Types",
            topics: [
              "Storing text in a variable, outputting to console",
              "Declaring and initializing String variables",
              "Comments in code",
              "Basic math operations with int variables",
              "Increment, decrement",
              "Concatenation",
              "Integer.parseInt(), String.valueOf()",
            ],
          },
          {
            title: "Data Types & Keyboard Input. Introduction to IntelliJ IDEA",
            topics: [
              "How primitive variables are stored in memory",
              "How String variables are stored in memory",
              "byte, short, char, long, float, double",
              "System.in, Scanner",
              "Scanner methods",
              "Installing IDEA, loading a project, JDK 11 setup",
              "Installing the plugin, exploring its features",
            ],
          },
          {
            title: "Conditional Statements",
            topics: [
              "if, if-else, if-else-if",
              "Command blocks",
              "Nested command blocks (nested if's)",
              "boolean type",
              "Comparison operators, including double",
              "Logical AND, OR, NOT, XOR",
              "Ternary operator",
              "Comparing primitives vs String",
            ],
          },
          {
            title: "Optional: Bytecode & IDE Tips",
            topics: [
              "Bringing beginners up to speed",
              "Advanced IDE tips for experienced students",
              "Compiling a class to bytecode from the console, running the program",
            ],
          },
          {
            title: "Loops",
            topics: [
              "Problem statement: executing an action many times",
              "while",
              "break, continue",
              "for",
              "do-while",
              "Comparing loops — when to use which",
            ],
          },
          {
            title: "Arrays",
            topics: [
              "Creating and populating arrays",
              "Iterating over an array",
              "How arrays are stored in memory",
            ],
          },
          {
            title: "Multidimensional Arrays",
            topics: [
              "2D arrays",
              "Jagged arrays",
              "N-dimensional arrays",
            ],
          },
          {
            title: "Functions (Methods)",
            topics: [
              "Declaring and calling methods",
              "Parameters",
              "Return values, void",
              "Access modifiers",
              "Local variables of a method",
              "Method modifiers, the main method",
            ],
          },
          {
            title: "Working with Strings",
            topics: [
              "Constants",
              "Variable shadowing",
              "Character escaping",
              "Core methods of the String class",
            ],
          },
          {
            title: "Optional: Literals, Encoding, StringBuilder",
            topics: [
              "Literals",
              "Encoding",
              "Helper classes: StringBuilder, String.format",
              "Utility class Arrays",
            ],
          },
          {
            title: "Data Types. Introduction to OOP",
            topics: [
              "Primitive types",
              "Type casting",
              "Reference types",
              "Objects",
              "null",
              "Introduction to OOP",
              "Inheritance",
            ],
          },
          {
            title: "Objects",
            topics: [
              "Creating objects (new)",
              "Constructors, default constructor",
              "Parameterized constructors",
              "Order of constructor calls during inheritance",
              "Accessing object fields (getters, setters)",
              "hashCode, equals",
            ],
          },
          {
            title: "Classes & static",
            topics: [
              "Static variables",
              "Static vs non-static variables",
              "Static methods",
              "Initialization order with constructors and static blocks",
              "Inner classes",
            ],
          },
          {
            title: "Optional: Object Lifecycle & Class Loading",
            topics: [
              "Object lifecycle",
              "Class loading",
            ],
          },
          {
            title: "Lists & Generics",
            topics: [
              "Wrapper classes",
              "ArrayList",
              "Array vs ArrayList",
              "Typing ArrayList (generics)",
            ],
          },
          {
            title: "Collections: Set & HashSet",
            topics: [
              "Collections hierarchy",
              "Set, HashSet",
              "iterator, for-each",
            ],
          },
          {
            title: "Collections: Map & HashMap",
            topics: [
              "Map, HashMap",
              "Choosing the right collection for the task",
              "Collections utility class",
            ],
          },
          {
            title: "Optional: LinkedList, Queue, SortedMap",
            topics: [
              "LinkedList",
              "ArrayList vs LinkedList",
              "Queue",
              "SortedMap, TreeMap",
            ],
          },
          {
            title: "Singleton, Enum, switch",
            topics: [
              "Why enumerations are needed",
              "Declaring Enum",
              "Enum — the best Singleton",
              "switch statement",
            ],
          },
          {
            title: "Exceptions (Part 1)",
            topics: [
              "Normal code execution vs runtime errors",
              "try-catch",
              "Exception hierarchy",
              "multicatch",
              "throw",
              "checked vs unchecked exceptions",
              "throws",
            ],
          },
          {
            title: "Exceptions (Part 2)",
            topics: [
              "finally",
              "Creating custom exceptions",
              "Throwable",
              "Stack trace",
              "try-with-resources",
              "AutoCloseable",
            ],
          },
          {
            title: "Optional: Exception Wrapping & Error",
            topics: [
              "Exception wrapping",
              "Error class",
            ],
          },
          {
            title: "I/O Streams (Part 1)",
            topics: [
              "InputStream",
              "Reader",
              "BufferedReader",
              "OutputStream",
              "Writer",
              "BufferedWriter",
            ],
          },
          {
            title: "I/O Streams. Decorator Pattern",
            topics: [
              "ByteArrayInputStream",
              "ByteArrayOutputStream",
              "Combining streams",
            ],
          },
          {
            title: "I/O Streams. java.nio",
            topics: [
              "io vs nio",
              "FileChannel",
              "Selector",
              "Path",
              "Paths",
              "Files",
            ],
          },
          {
            title: "Working with Date & Time",
            topics: [
              "Date",
              "DateFormat",
              "Calendar",
              "LocalDate, LocalTime, LocalDateTime",
              "Instant",
              "ZonedDateTime",
              "DateTimeFormatter",
            ],
          },
          {
            title: "Git. Final Project: Cryptoanalyzer",
            topics: [
              "Git basics",
              "Building a console-based cryptoanalyzer application",
              "Brute-force and statistical text decryption",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Java Projects",
            url: "https://github.com/RomanMakarenko/javaProjects",
            description:
              "A collection of foundational Java projects covering collections, algorithms, and OOP principles.",
          },
        ],
      },

      // ======== MODULE 2: Java Core ========
      {
        name: "Module 2. Java Core",
        levels: [
          {
            title: "OOP: Encapsulation, Polymorphism. Interfaces",
            topics: [
              "Encapsulation",
              "Polymorphism",
              "Type casting",
              "this, super",
              "Interfaces",
            ],
          },
          {
            title: "OOP: Overloading, Overriding, Abstract Classes",
            topics: [
              "Abstract classes",
              "Implementing abstract methods of the parent",
              "Method overloading — same names",
              "Method overriding",
            ],
          },
          {
            title: "Stream API",
            topics: [
              "Anonymous inner classes",
              "Implementation of abstract methods of the parent",
              "Lambda expressions",
              "Functional interfaces",
              "Method references",
              "Stream",
              "Intermediate and terminal Stream methods",
              "map-reduce",
            ],
          },
          {
            title: "OOP: Composition, Aggregation, Inheritance",
            topics: [
              "Association: composition and aggregation",
              "Inheritance",
            ],
          },
          {
            title: "Interfaces vs Abstract Classes. Multiple Inheritance",
            topics: [
              "Declaring behavior",
              "Default methods",
              "Implementing multiple interfaces",
              "The diamond problem",
              "Comparing abstract classes and interfaces",
            ],
          },
          {
            title: "Type Casting, instanceof, switch-expression",
            topics: [
              "instanceof",
              "Type casting (widening and narrowing)",
              "switch expression, Enum",
            ],
          },
          {
            title: "Constructor Call Details. static Block",
            topics: [
              "Object creation process",
              "Constructor call order",
              "Variable initialization order",
            ],
          },
          {
            title: "How Object Works: equals, hashCode, clone, toString. Immutable Objects",
            topics: [
              "The Object class",
              "Methods of the Object class",
              "Mutable and immutable objects",
            ],
          },
          {
            title: "Recursion",
            topics: [
              "Understanding recursion",
              "Recursive algorithms",
            ],
          },
          {
            title: "Introduction to Threads: Thread, Runnable, start, sleep",
            topics: [
              "Thread",
              "Runnable",
              "start",
              "sleep",
              "interrupt",
            ],
          },
          {
            title: "Threads: synchronized, volatile, wait, notify. DeadLock",
            topics: [
              "synchronized",
              "volatile",
              "join",
              "wait, notify",
              "The DeadLock problem",
            ],
          },
          {
            title: "Executors",
            topics: [
              "ExecutorService",
              "Factory method pattern",
              "Submitting tasks to the service",
              "Callable",
              "Getting results: Future",
              "Stopping an ExecutorService",
              "FixedThreadPool",
              "CachedThreadPool",
              "ScheduledExecutorService",
            ],
          },
          {
            title: "ThreadLocal, Callable, Future",
            topics: [
              "ThreadLocal context",
              "ThreadLocalRandom",
            ],
          },
          {
            title: "Inner/Nested Classes. Examples: Map.Entry",
            topics: [
              "Nested classes",
              "Inner classes",
              "Static inner classes",
              "Anonymous inner classes",
              "Examples of different class types from the JDK",
            ],
          },
          {
            title: "Serialization: JSON/XML/YAML",
            topics: [
              "Java serialization",
              "Data formats: XML, JSON, YAML",
              "Jackson ObjectMapper",
            ],
          },
          {
            title: "Reflection API",
            topics: [
              "Why Reflection API is needed",
              "Getting data: class, method, constructor, field",
              "Creating an object",
              "Changing the internal state of an object",
              "Proxies",
              "RMI",
            ],
          },
          {
            title: "Annotations in Java",
            topics: [
              "Declarative vs imperative approach to coding",
              "Popular annotations: @Deprecated, @Override, @Nullable, …",
              "Creating annotations",
              "Processing annotations at runtime",
            ],
          },
          {
            title: "Optional: Swing",
            topics: [
              "Working with Swing GUI library",
            ],
          },
          {
            title: "Sockets",
            topics: [
              "Socket",
              "ServerSocket",
              "Live coding: writing a primitive group chat",
            ],
          },
          {
            title: "Final Project",
            topics: [
              "Building a multi-threaded chat application using Sockets",
              "Applying OOP, collections, and I/O in a real project",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Island 2",
            url: "https://github.com/RomanMakarenko/Island2",
            description:
              "Ecosystem simulation: multi-threading, complex OOP, and algorithms modeling animal-plant interactions on an island.",
          },
        ],
      },

      // ======== MODULE 3: Java Professional ========
      {
        name: "Module 3. Java Professional",
        levels: [
          {
            title: "Garbage Collection & Reference Types in Java",
            topics: [
              "JVM memory: stack and heap",
              "GC: Serial, Parallel, CMS, G1, Shenandoah, ZGC",
              "Caching",
              "WeakReference, SoftReference, PhantomReference",
            ],
          },
          {
            title: "Design Patterns",
            topics: [
              "Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor, Template Method",
              "Creational: Prototype, Builder, Singleton, Abstract Factory, Factory Method",
              "Structural: Decorator, Composite, Facade, Adapter, Proxy",
            ],
          },
          {
            title: "Development Methodologies",
            topics: [
              "Waterfall",
              "V-Model",
              "Incremental",
              "RAD Model",
              "Agile",
              "Iterative",
              "Spiral",
            ],
          },
          {
            title: "Maven Fundamentals: Setup, Dependencies, Repositories, Build",
            topics: [
              "Downloading Maven, setting environment variables",
              "Creating a Maven project",
              "Dependencies",
              "Plugins",
              "Lifecycle phases",
              "Profiles",
              "Building artifacts",
            ],
          },
          {
            title: "Guava & Apache Commons Collections",
            topics: [
              "Multimap, BiMap",
              "Multiset",
              "Immutable collections",
              "Objects: hashCode, equals",
              "Throwables",
              "CollectionUtils",
              "StringUtils",
            ],
          },
          {
            title: "JUnit",
            topics: [
              "Why testing is needed",
              "Types of testing",
              "@Test",
              "@Before, @After",
              "@BeforeClass, @AfterClass",
              "Parameterized tests",
            ],
          },
          {
            title: "Mockito",
            topics: [
              "Mocks",
              "mock and spy",
              "when and thenReturn",
              "verify",
              "any, once, times",
            ],
          },
          {
            title: "Logging",
            topics: [
              "Why logs are needed",
              "Logging levels",
              "SLF4J",
              "Implementations: log4j, JUL, logback, commons-logging",
              "Appenders",
            ],
          },
          {
            title: "How Networks Work. The OSI Model",
            topics: [
              "Network topology",
              "The OSI model",
              "DNS",
            ],
          },
          {
            title: "Software Architecture: Client-Server, Three-Tier, Architectural Patterns",
            topics: [
              "Client-server architecture",
              "Three-tier architecture (client-server-DB)",
              "Criteria for good architecture: efficiency, flexibility, extensibility, scalability, testability, clean readable code",
              "Modular architecture, decomposition",
            ],
          },
          {
            title: "HTTP/HTTPS Protocol: Requests, Responses, Cookies, Sessions",
            topics: [
              "Data transfer protocols on the network",
              "HTTP methods (GET, POST, PUT, …)",
              "Request parameters",
              "Request body",
              "Headers",
              "Response status codes",
              "HTTP vs HTTPS",
              "HTTP sessions",
              "Cookies",
              "HTTP/2",
            ],
          },
          {
            title: "HttpClient",
            topics: [
              "AJAX",
              "Java HTTP Client",
              "Synchronous and asynchronous requests",
              "Task: fetching data from the internet (e.g., weather forecast)",
            ],
          },
          {
            title: "Servlets, Java Servlet API. Building a Simple Web App",
            topics: [
              "What is a servlet",
              "Servlet lifecycle",
              "Servlet container: Tomcat",
              "doGet, doPost",
              "redirect vs forward",
              "Filters",
            ],
          },
          {
            title: "Servlet Containers: Tomcat, Deployment, Server Configuration",
            topics: [
              "Hands-on practice from the previous lecture",
            ],
          },
          {
            title: "Introduction to MVC (Model-View-Controller). JSP",
            topics: [
              "MVC architectural principles and ideas",
              "MVC patterns",
              "MVC on the web",
              "Common mistake: business logic in the controller",
              "MVC through a practical example",
              "JSP",
            ],
          },
          {
            title: "Web Services",
            topics: [
              "What is a web service",
              "Protocols: HTTP, JMS, FTP, …",
              "Synchronous and asynchronous requests",
              "Cloud services: IaaS, PaaS, SaaS",
            ],
          },
          {
            title: "HTML Elective",
            topics: [
              "What is HTML",
              "Structure of an HTML document",
              "Tags and their attributes",
              "CSS — its syntax",
              "Classes and identifiers",
              "Selectors",
            ],
          },
          {
            title: "Final Project: Servlet Quest Competition",
            topics: [
              "Build a text-based step-by-step quest game using Servlets",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Quest Game",
            url: "https://github.com/RomanMakarenko/QuestGame",
            description:
              "A text-based step-by-step quest game built with Java Servlets and JSP.",
          },
          {
            name: "Project Servlet",
            url: "https://github.com/RomanMakarenko/project-servlet",
            description:
              "A web application on Java Servlets: server-side HTTP request handling, sessions, and filters.",
          },
          {
            name: "Project Frontend",
            url: "https://github.com/RomanMakarenko/project-frontend",
            description:
              "Frontend for a web application: HTML, CSS, JS integration with Java servlets.",
          },
        ],
      },

      // ======== MODULE 4: Working with Databases. Hibernate ========
      {
        name: "Module 4. Working with Databases. Hibernate",
        levels: [
          {
            title: "Introduction to Databases. MySQL Setup. DDL, DML",
            topics: [
              "Why databases are needed",
              "Relational vs non-relational databases",
              "The relational model",
              "CAP theorem",
              "Installing MySQL Developer",
              "SQL groups: DDL, DML, DCL, TCL",
            ],
          },
          {
            title: "Data Types. Creating Tables. INSERT, SELECT, UPDATE, DELETE",
            topics: [
              "Creating a schema",
              "Creating tables",
              "Modifying table structure",
              "INSERT",
              "SELECT",
              "UPDATE",
              "DELETE",
            ],
          },
          {
            title: "Querying Data",
            topics: [
              "SELECT with conditions",
              "Selecting specific columns",
              "Subselects",
              "JOIN: LEFT, RIGHT, INNER, CROSS",
              "GROUP BY and aggregate functions",
              "Indexes",
            ],
          },
          {
            title: "Database Transactions",
            topics: [
              "ACID concepts (Atomicity, Consistency, Isolation, Durability)",
              "Transaction management",
              "Isolation levels",
            ],
          },
          {
            title: "Database Design",
            topics: [
              "First normal form (1NF)",
              "Second normal form (2NF)",
              "Third normal form (3NF)",
              "Keys (foreign key)",
              "Relationships: one-to-one, one-to-many, many-to-many",
            ],
          },
          {
            title: "JDBC — Part 1",
            topics: [
              "Why JDBC is needed",
              "Core interfaces",
              "Reading data from the database in a Java app",
              "Updating and deleting data from the database",
            ],
          },
          {
            title: "JDBC — Part 2",
            topics: [
              "Transactions",
              "Isolation levels",
              "Handling checked exceptions",
            ],
          },
          {
            title: "ORM. Hibernate",
            topics: [
              "Mismatches between object and relational data models",
              "ORM (Hibernate), JPA",
              "Hibernate architecture",
              "Configuration, core annotations",
              "Reading data from the database",
              "Updating and deleting data from the database",
              "Hibernate vs JDBC",
            ],
          },
          {
            title: "Hibernate. OneToMany, ManyToMany",
            topics: [
              "Relationships (working with collections)",
            ],
          },
          {
            title: "Entity Inheritance for ORM",
            topics: [
              "Single table per class",
              "Single table per class with ancestors",
              "Single table for the entire class hierarchy",
              "One table per class using joins",
            ],
          },
          {
            title: "Final Project",
            topics: [
              "Hash for passwords",
              "Building a database-driven application with Hibernate ORM",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Project Hibernate 1",
            url: "https://github.com/RomanMakarenko/project-hibernate-1",
            description:
              "Working with Hibernate ORM: entity mapping, CRUD operations, and table relationships.",
          },
          {
            name: "Hibernate 2",
            url: "https://github.com/RomanMakarenko/hibernate2",
            description:
              "Advanced Hibernate: entity inheritance, cascade operations, and caching strategies.",
          },
          {
            name: "Hibernate Final",
            url: "https://github.com/RomanMakarenko/hibernateFinal",
            description:
              "Final Hibernate project: complex data model with optimized queries and transaction management.",
          },
        ],
      },

      // ======== MODULE 5: Spring + Spring Boot ========
      {
        name: "Module 5. Spring + Spring Boot",
        levels: [
          {
            title: "IoC, DI. Spring. Components. Beans",
            topics: [
              "Why Spring became the de facto industry standard (advantages)",
              "IoC and DI principles",
              "Beans",
              "ApplicationContext",
              "AOP",
            ],
          },
          {
            title: "Spring Modules Overview. Spring Web MVC",
            topics: [
              "Core: beans, core, context, SpEL",
              "Data access",
              "Testing",
              "Web",
              "Integration",
              "Web MVC",
            ],
          },
          {
            title: "Designing REST APIs",
            topics: [
              "Operating on resources, not methods",
              "HTTP methods",
              "HTTP response codes",
              "Error handling",
              "Querying collections",
              "Querying object count in a collection",
              "Querying a single object from a collection",
              "Adding data to a collection",
              "Editing",
              "Deleting",
              "Homework: design a 2-level REST API",
            ],
          },
          {
            title: "Controller-Service-DAO Architecture",
            topics: [
              "Context hierarchy",
              "Servlet config",
              "Controller — receiving the request",
              "Service — business logic",
              "DAO — state persistence",
            ],
          },
          {
            title: "Spring ORM. @Transactional",
            topics: [
              "Transaction abstraction",
              "Declarative transactions",
              "Transaction propagation",
              "Advantages of ORM + Spring",
              "Configuring Hibernate SessionFactory",
              "Live coding example",
            ],
          },
          {
            title: "Spring Test. AOP (Logging)",
            topics: [
              "Unit testing",
              "Integration testing",
              "Core annotations",
              "TestContext",
              "Live coding example (testing an API method)",
              "Spring Commons Logging bridge",
            ],
          },
          {
            title: "Spring Security (in-memory, DB)",
            topics: [
              "Key Spring Security context objects: SecurityContextHolder, Authentication, UserDetails, GrantedAuthority",
              "Authorization and authentication",
              "OAuth2",
              "In-memory sessions",
              "Database-backed sessions",
            ],
          },
          {
            title: "Spring Boot. Spring Data JPA",
            topics: [
              "Starters",
              "Auto-configuration",
              "Embedded Tomcat",
              "Configuration annotations",
              "Demo: Spring Data JPA (query generation by method name at runtime)",
            ],
          },
        ],
        projects: [
          {
            name: "Spring MVC 1",
            url: "https://github.com/RomanMakarenko/SpringMVC1",
            description:
              "A web application on Spring MVC: controllers, validation, form handling, and view resolution.",
          },
          {
            name: "Project Final",
            url: "https://github.com/RomanMakarenko/project-final",
            description:
              "Final group project: a full-stack web application with Spring Boot, Spring Data JPA, and Spring Security.",
          },
        ],
      },
    ],
  },
  {
    id: "cert-3",
    name: "Selenium WebDriver with Java — Basics to Advanced",
    issuer: "Udemy",
    date: "Mar 2024",
    image: "/certificates/selenium-java.jpg",
  },
  {
    id: "cert-4",
    name: "English INTERMEDIATE / B1",
    issuer: "Green Forest",
    date: "Nov 2023",
    image: "/certificates/green-forest.jpg",
  },
  {
    id: "cert-5",
    name: "Node.js",
    issuer: "ITEA",
    date: "Mar 2020",
    image: "/certificates/nodejs-itea.jpg",
  },
  {
    id: "cert-6",
    name: "JavaScript",
    issuer: "Coursera",
    date: "Dec 2018",
    image: "/certificates/javascript-coursera.jpg",
  },
  {
    id: "cert-7",
    name: "QA Automation",
    issuer: "Hillel",
    date: "Jun 2018",
    image: "/certificates/qa-hillel.jpg",
  },
  {
    id: "cert-8",
    name: "SQL Essential",
    issuer: "CyberBionic Systematics",
    date: "Nov 2014",
    image: "/certificates/sql-essential.jpg",
  },
];
