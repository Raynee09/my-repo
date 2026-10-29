
/* Question 1: Arithmetic Operations */

function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = document.getElementById("arithmeticResult");

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        result.textContent = "Please enter both numbers.";
        return;
    }

    let output = `
        Sum: ${num1 + num2}<br>
        Difference: ${num1 - num2}<br>
        Product: ${num1 * num2}<br>
    `;

    if (num2 !== 0) {
        output += `Quotient: ${num1 / num2}`;
    } else {
        output += "Quotient: Cannot divide by zero";
    }

    result.innerHTML = output;
}


/* Question 2: Array Operations */

function arrayOperations() {
    const numbers = [34, 12, 67, 5, 29];

    const largest = Math.max(...numbers);
    const smallest = Math.min(...numbers);

    const ascending = [...numbers].sort((a, b) => a - b);
    const descending = [...numbers].sort((a, b) => b - a);

    document.getElementById("arrayResult").innerHTML = `
        Largest: ${largest}<br>
        Smallest: ${smallest}<br>
        Ascending: ${ascending.join(", ")}<br>
        Descending: ${descending.join(", ")}
    `;
}


/* Question 3: Form Validation */

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ageValue = document.getElementById("age").value;
    const age = Number(ageValue);

    const result = document.getElementById("formResult");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        result.textContent = "Please enter your name.";
    } else if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email.";
    } else if (ageValue === "" || age < 18 || age > 100) {
        result.textContent = "Age must be between 18 and 100.";
    } else {
        result.textContent = "Form submitted successfully!";
    }
});


/* Question 4: Student Object */

function studentOperations() {
    let student = {
        name: "Rahul",
        age: 20,
        grades: [78, 85, 90]
    };

    // Add a new property
    student.class = "B.Tech Computer Engineering";

    // Update the student's grade
    student.grades[0] = 82;

    document.getElementById("studentResult").innerHTML = `
        Name: ${student.name}<br>
        Age: ${student.age}<br>
        Grades: ${student.grades.join(", ")}<br>
        Class: ${student.class}
    `;
}


/* Question 5: filter(), map(), and reduce() */

function processNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6];

    // Remove odd numbers
    const evenNumbers = numbers.filter(number => number % 2 === 0);

    // Multiply remaining numbers by 2
    const doubledNumbers = evenNumbers.map(number => number * 2);

    // Find their sum
    const sum = doubledNumbers.reduce(
        (total, number) => total + number,
        0
    );

    document.getElementById("methodsResult").innerHTML = `
        Even Numbers: ${evenNumbers.join(", ")}<br>
        Doubled Numbers: ${doubledNumbers.join(", ")}<br>
        Sum: ${sum}
    `;
}
