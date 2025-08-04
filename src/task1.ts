type Employee ={
    fullName: [firstName: string, lastName:string];
    age: number;
    department: string;
    skills: string[];
    isActive: boolean;
};

const employee1: Employee = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true
};

const employee2: Employee = {
    fullName: ["Jane", "Smith"],
    age: 30,
    department: "Markrting",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false
};

function logEmployee(employee:Employee): void {
    console.log('--- Employee Details ---');
    console.log('Name: ${employee.fullName[0]} ${employee.fullName[1]}');
    console.log('Age');
}