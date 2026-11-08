## Introduction

In TypeScript, type and interface are used to define the structure of data. Both are similar but they have some differences.

## Differences

**1. Type Alias**

We can use type to define objects, strings, numbers, and more.

```typescript
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

**2. Interface**

We mainly use interface to define the structure of objects.

```typescript
interface User {
  name: string;
  age: number;
}
```

## When to Use?

- Use interface for object structures.
- Use type for unions and combining different types.

## Conclusion

Both are useful in TypeScript. Choose the one that makes code simple and easy to understand and validate types of value.