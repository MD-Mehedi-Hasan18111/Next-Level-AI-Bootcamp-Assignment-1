function multiplyValue(a: number, b?: number): number {
    if(typeof b === "number"){
        return a * b;
    } else {
        return a * 2;
    }
}

function processInput(val: string | number | boolean): string | number {
    if(typeof val === 'string'){
        return val.trim().toLowerCase();
    } else if(typeof val === 'number'){
        return val * 10;
    } else {
        if(val){
            return 'Active';
        } else {
            return 'Inactive';
        }
    }
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudent: number): Course[] {
    const filterCourses: Course[] = courses.filter((course: Course) => course.isPublished && course.students >= minStudent);
    return filterCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map((item: T) => item[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}
