// Value-level function
const numberToString = (value: number) => `${value}`;

// Type-level function
type NumberToString<T extends number> = `${T}`;

// Combining them
const numberToStringTyped = <T extends number>(value: T): NumberToString<T> => `${value}`;

const stringFromNumber = numberToString(123); // : string
const stringFromNumberTyped = numberToStringTyped(123); // : '123'


// TypeScript adoption levels
//
// 1. Type annotations
// 2. Simple generics
// 3. Type programming


// Type-safety ==> Quality
// Autocomplete-friendly ==> Developer Experience


// Building blocks

// 1. Aliases ("Variables")

type HTML = string;


// 2. Objects

type Contact = {
  fullName: string;
  email: string;
};


// 3. Arrays

type Contacts = Contact[];


// 4. Literals

type StringLiteral = 'some string';
type NumberLiteral = 1234;


// 5. Unions

type Appearance = 'light' | 'dark';


// 6. Intersections

type SavedContact = Contact & {
  id: string;
};


// 7. Object keys

type EmailOfContact = Contact['email'];
type KeyOfContact = string & keyof Contact;


// 8. Array keys

type ArrayItemType = Contacts[number];
type ArrayItemTypeField = Contacts[number]['fullName'];


// 9. Tuples

type Tuple = [string, number];

const tupleValue: Tuple = ['hello', 123];

type TupleItemType = Tuple[0];


// 10. Record

type MapStringToNumber = {
  [key: string]: number;
};


// 11. Generics ("Functions")

type Labeled<T> = {
  label: string;
  value: T;
};


// 12. Transform

type WithPrefix<T extends string> = `id-${T}`;

type ID = WithPrefix<'123'>;


// 13. Standard functions

type Name = Capitalize<'ramil'>;


// 14. Conditions

type IsNumber<T> = T extends number ? true : false;


// 15. Pattern Matching ("Destructuring")

type WithoutPrefix<T> = T extends `id-${infer K}` ? K : never;

type NumberFromID = WithoutPrefix<ID>;


// 16. Recursion

type Split<T, Separator extends string> =
  T extends `${infer First}${Separator}${infer Rest}`
  ? [First, ...Split<Rest, Separator>]
  : [T];

type SplitResult = Split<'a.b.c.d', '.'>;


// 17. Mapped Types

type KeysWithPrefix<T> = {
  [K in keyof T as WithPrefix<string & K>]: T[K];
};

type Result = KeysWithPrefix<{
  a: string;
  b: string;
}>;
