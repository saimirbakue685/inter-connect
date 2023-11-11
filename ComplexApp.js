/*
Filename: ComplexApp.js

This code represents a complex application that performs various operations on an array of objects containing information about employees in a company.
*/

// Define the array of employee objects
let employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'HR', salary: 5000 },
    { id: 2, name: 'Jane Smith', age: 35, department: 'IT', salary: 6000 },
    { id: 3, name: 'Mike Johnson', age: 40, department: 'Finance', salary: 7000 },
    // ... More employee objects ...
];

// Function to calculate the total salary of all employees
function getTotalSalary() {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;
    }
    return totalSalary;
}

// Function to get the average age of employees in a particular department
function getAverageAgeByDepartment(department) {
    let totalAge = 0;
    let employeeCount = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === department) {
            totalAge += employees[i].age;
            employeeCount++;
        }
    }
    return totalAge / employeeCount;
}

// Function to find the employee with the highest salary
function getHighestPaidEmployee() {
    let highestSalary = 0;
    let highestPaidEmployee = null;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > highestSalary) {
            highestSalary = employees[i].salary;
            highestPaidEmployee = employees[i];
        }
    }
    return highestPaidEmployee;
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge() {
    return employees.sort((a, b) => a.age - b.age);
}

// Utility function to print employee details
function printEmployeeDetails(employee) {
    console.log(`ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Salary: ${employee.salary}`);
    console.log('---');
}

// Calculate and print the total salary of all employees
let totalSalary = getTotalSalary();
console.log(`Total Salary: ${totalSalary}`);

// Calculate and print the average age of employees in the 'IT' department
let averageAgeIT = getAverageAgeByDepartment('IT');
console.log(`Average Age in IT: ${averageAgeIT}`);

// Find and print the employee with the highest salary
let highestPaidEmployee = getHighestPaidEmployee();
console.log('Highest Paid Employee:');
printEmployeeDetails(highestPaidEmployee);

// Sort and print employees by age in ascending order
let sortedEmployees = sortEmployeesByAge();
console.log('Employees Sorted by Age:');
for (let i = 0; i < sortedEmployees.length; i++) {
    printEmployeeDetails(sortedEmployees[i]);
}

// ... More complex operations on the employees array ...