<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Quiz</title>
    <!-- Link to the stylesheet for quiz styling -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Main container for the quiz application -->
    <div id="quiz-container">
        <!-- Paragraph to display the quiz question -->
        <p id="quiz-question">What is 2 + 2?</p>

        <!-- Division to hold the radio button choices -->
        <div>
            <!-- Radio button for choice 1 -->
            <input type="radio" id="choice1" name="quiz" value="4">
            <label for="choice1">4</label><br>

            <!-- Radio button for choice 2 -->
            <input type="radio" id="choice2" name="quiz" value="22">
            <label for="choice2">22</label><br>

            <!-- Radio button for choice 3 -->
            <input type="radio" id="choice3" name="quiz" value="3">
            <label for="choice3">3</label>
        </div>

        <!-- Button to submit the selected answer -->
        <button id="submit-answer">Submit Answer</button>

        <!-- Paragraph to display feedback (correct/incorrect) to the user -->
        <p id="feedback"></p>
    </div>

    <!-- Link to the JavaScript file that handles quiz logic -->
    <script src="quiz.js"></script>
</body>
</html>
