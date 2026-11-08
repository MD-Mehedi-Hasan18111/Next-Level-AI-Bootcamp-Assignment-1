# Next Level AI Bootcamp - Assignment 1

This repository contains the solutions for Assignment 1 of the Next Level AI Bootcamp, focusing on TypeScript fundamentals, advanced types, generics, object-oriented programming, and asynchronous operations with promise handling, along with two conceptual blogs.

---

## Repository Contents

- [**`solutions.ts`**](./solutions.ts) – TypeScript implementations for 8 core problem-solving tasks.
- [**`type-vs-interface.md`**](./type-vs-interface.md) – Technical blog explaining the differences and use cases of Type Aliases vs Interfaces.
- [**`union-and-intersection.md`**](./union-and-intersection.md) – Technical blog covering Union (`|`) and Intersection (`&`) types in TypeScript.

---

## 🚀 Solutions Overview (`solutions.ts`)

The [`solutions.ts`](./solutions.ts) file contains solutions for the 8 assigned TypeScript problems:

1. **`multiplyValue`**: Handles optional parameters and performs conditional multiplication or doubling based on parameter presence.
2. **`processInput`**: Demonstrates type narrowing for union types (`string | number | boolean`), transforming inputs accordingly.
3. **`formatCoordinate`**: Works with `readonly` tuple types `[number, number, string]` and formats latitude, longitude, and location names.
4. **`concatenateArrays`**: Generic function utilizing rest parameters and `.flat()` to merge multiple arrays of any type `T`.
5. **`getPopularCourses`**: Uses an object `Course` interface to filter published courses that meet a minimum student threshold.
6. **`pluckValues`**: Advanced generic function leveraging `keyof` and indexed access types (`T[K]`) to extract property values from an array of objects.
7. **`Employee` & `Manager` Classes**: Implements Object-Oriented Programming (OOP) concepts, including inheritance (`super`), protected/private access modifiers, and encapsulation.
8. **`validateAgeAsync`**: Asynchronous validation using typed `Promise<string>` with rejection for under-age checks and timed resolution.

---

## 📝 Blog Posts

- 📖 **[Type vs Interface](./type-vs-interface.md)**: A deep dive into when to use `type` vs `interface`, syntactic differences, and best practices.
- 📖 **[Union and Intersection Types](./union-and-intersection.md)**: An explanation with real-world code examples illustrating how `|` (OR) and `&` (AND) combine types.

