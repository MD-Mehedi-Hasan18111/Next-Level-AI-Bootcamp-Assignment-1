## Introduction

Union and Intersection types help us work with multiple types in TypeScript. Lets understand them with a simple example.

## 1. Union Type (|)

Union means a value can have one of several types.

```typescript
type ID = string | number;

let userId: ID = 100;
userId = "100";
```

Here userId can be a string or a number.

## 2. Intersection Type (&)

Intersection combines multiple types into one.

```typescript
type User = {
  name: string;
};

type Employee = {
  salary: number;
};

type EmployeeUser = User & Employee;
```

Now EmployeeUser needs both name and salary.

## 3. Using Both Together

Lets see a simple example:

```typescript
type User = {
  name: string;
};

type Card = {
  cardNumber: string;
};

type Cash = {
  amount: number;
};

type Payment = Card | Cash;

type UserPayment = User & {
  payment: Payment;
};
```

Here a user can pay by card or cash. The `&` combines user details with payment details, while `|` allows different payment options.

## Conclusion

Union (`|`) means **OR**, and Intersection (`&`) means **AND**. Both help us write flexible and reusable TypeScript code.
