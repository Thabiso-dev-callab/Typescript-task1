var employee1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true
};
var employee2 = {
    fullName: ["Jane", "Smith"],
    age: 30,
    department: "Markrting",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false
};
function logEmployee(employee) {
    console.log('--- Employee Details ---');
    console.log('Name: ${employee.fullName[0]} ${employee.fullName[1]}');
    console.log('Age');
}
