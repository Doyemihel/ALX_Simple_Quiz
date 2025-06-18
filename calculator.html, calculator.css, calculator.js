</head><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta n
<body>
    <!-- Main container for the calculator application -->
    <div id="calculator-container">
        <!-- Input field for the first number -->
        <input type="number" id="number1" placeholder="Number 1">

        <!-- Input field for the second number -->
        <input type="number" id="number2" placeholder="Number 2">

        <!-- Buttons for arithmetic operations -->
        <div class="operation-buttons">
            <button id="add">+</button>
            <button id="subtract">-</button>
            <button id="multiply">*</button>
            <button id="divide">/</button>
        </div>

        <!-- Division to display the result -->
        <div id="result">
            Result: <span id="calculation-result">0</span>
        </div>
    </div>

    <!-- Link to the JavaScript file that handles calculator logic -->
    <script src="calculator.js"></script>
</body>
</html>
