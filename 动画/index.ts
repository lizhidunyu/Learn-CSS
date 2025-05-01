// const info = {
//   url: "aaaaa",
//   method: "GET",
// } as const;

// function request(url: string, method: "GET" | "POST") {
//   console.log(url, method);
// }

// request(info.url, info.method);

// 调用签名
// interface ICalFn {
//   name: string;
//   (num1: number, num2: number): void;
// }
// function calc(calcFn: ICalFn) {
//   console.log(calcFn.name);
//   calcFn(10, 20);
// }

// 构造签名
// interface IPerson {
//   new (name: string): Person;
// }

// function factory(ctor: IPerson) {
//   return new ctor("Why");
// }

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// console.log(factory(Person));

// 函数的重载
// 这样不好
// function sum(a1: string | number, a2: string | number) {
//   if (typeof a1 === "string" && typeof a2 === "string") {
//     return a1 + a2;
//   }
//   if (typeof a1 === "number" && typeof a2 === "number") {
//     return a1 + a2;
//   }
// }

// console.log(sum("a", "b"));
// console.log(sum(11, 22));

// function sum(a1: number, a2: number): number;
// function sum(a1: string, a2: string): string;
// function sum(a1: any, a2: any): any {
//   return a1 + a2;
// }

// console.log(sum(20, 30));
// console.log(sum("aaa", "bbb"));

// 联合类型
// function getLength(a: string | any[]) {
//   return a.length;
// }
// 函数重载
// function getLength(a: string): number;
// function getLength(a: any[]): number;
// function getLength(a: any) {
//   return a.length;
// }

/*TypeScript面向对象*/
/*protected public private readonly*/
// class Person {
//   readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p = new Person("why");
// console.log(p.name);

/*get set*/
// class Person {
//   constructor(public name: string, private _age?: number) {
//     this.name = name;
//     this.age = _age;
//   }
//   set age(newAge) {
//     this._age = newAge;
//   }
//   get age() {
//     return this._age;
//   }
// }

// const p = new Person("aaa", 100);
// p.age = 1111;
// console.log(p.age);

/*抽象类*/
// abstract class Shape {
//   abstract getArea(): number;
// }

// 抽象类是可以被继承的
// class Circle extends Shape {
//   private r: number;
//   constructor(r: number) {
//     super();
//     this.r = r;
//   }
//   getArea() {
//     return this.r * this.r * 3.14;
//   }
// }

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   running() {
//     console.log(this.name + "running");
//   }
// }

// const p1: Person = new Person("why");
// const p2: Person = {
//   name: "why",
//   running: function () {
//     console.log(this.name + " running");
//   },
// };

// 索引签名
// interface Icollection {
//   [index: number]: any;
//   length: number;
// }

// function logCollection(collection: Icollection) {
//   for (let i = 0; i < collection.length; i++) {
//     console.log(collection[i]);
//   }
// }

// const tuple: [string, number, number] = ["why", 1, 2];
// const array: string[] = ["aaa", "bbb", "ccc"];

// interface Person {
//   name: string;
//   eating: () => void;
// }

// interface Animal {
//   running: () => void;
// }

// /*接口可以多继承*/
// interface Student extends Person, Animal {
//   sno: number;
// }

// const stu: Student = {
//   sno: 100,
//   name: "why",
//   eating: function () {},
//   running: function () {},
// };

// /*接口定义之后，也是可以被类实现的*/
// interface ISwim {
//   swimming: () => void;
// }

// interface IRun {
//   running: () => void;
// }

// class Person implements ISwim, IRun {
//   swimming() {
//     console.log("swimming");
//   }
//   running() {
//     console.log("running");
//   }
// }

// function swim(swimmer: ISwim) {
//   swimmer.swimming();
// }

// 如果需要传递的是一个接口，但是被一个类实现了，那么也可以传递这个类
// 这就是面向接口开发
// const p = new Person();
// swim(p);

// 枚举类型
// enum Direction {
//   LEFT,
//   RIGHT,
//   TOP,
//   BOTTOM,
// }

// function turnDirection(direcction: Direction) {
//   switch (direcction) {
//     case Direction.LEFT:
//       console.log("转向左边");
//       break;
//     case Direction.RIGHT:
//       console.log("转向右边");
//       break;
//   }
// }

// // 泛型编程

// function foo<T, E>(a1: T, a2: E) {}

// // 泛型接口
// interface IFoo<T = number> {
//   initialValue: T;
//   valueList: T[];
//   handleValue: (value: T) => void;
// }

// 泛型类
// class Point<T> {
//   x: T;
//   y: T;

//   constructor(x: T, y: T) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const p1 = new Point(10, 20);
// const p2 = new Point<number>(10, 20);
// const p3: Point<number> = new Point(10, 20);

// interface ILength {
//   length: number;
// }

// function getLength<T extends ILength>(args: T) {
//   return args.length;
// }
// console.log(getLength("abc"));
// console.log(getLength([1, 2, 3]));
// console.log(getLength({ length: 12 }));

// 泛型约束
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key];
// }

// const info = {
//   name: "why",
//   age: 18,
// };

// console.log(getProperty(info, "name"));

// 映射类型
// interface IPerson {
//   name: string;
//   age: number;
// }

// type MapType<Type> = {
//   [prop in keyof Type]?: boolean;
// };

// type NewPerson = MapType<IPerson>;

// 条件类型
function sum<T extends number | string>(
  a1: T,
  a2: T
): T extends string ? string : number;
function sum(a1: any, a2: any) {
  return a1 + a2;
}

const res1 = sum(10, 20);
const res2 = sum("aaa", "bbb");

// type toArray<Type> = Type extends any ? Type[] : never;
// type newType = toArray<number | string>;

// type toArray<Type> = Type extends any ? Type[] : never;
// type newType = toArray<string | number>;

// type MyPartical<T> = {
//   [key in keyof T]?: T[key];
// };

// interface IPerson {
//   name: string;
//   age: number;
// }

// const info: IPerson = {
//   name: "why",
//   age: 10,
// };

// function updatePerson(person: IPerson, partical: MyPartical<IPerson>) {
//   return { ...person, ...partical };
// }

// type MyRequired<T> = {
//   [k in keyof T]-?: T[k];
// };

// interface IPerson {
//   name: string;
//   age?: number;
//   height?: number;
// }

// type IPersonRequired = MyRequired<IPerson>;

// const info: IPersonRequired = {
//   name: "yucuiwen",
//   age: 19,
//   height: 20,
// };

// type MYRecord<K extends keyof any, T> = {
//   [P in K]: T;
// };

// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// type MyOmit<T, K> = {
//   [P in keyof T as P extends K ? never : P]: T[p];
// };

// type MyOmit<T, K> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };

let a: unknown = 12;
console.log((a as string).length);
