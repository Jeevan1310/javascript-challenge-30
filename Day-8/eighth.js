const quizContainer = document.getElementById('quiz');
    const submitButton = document.querySelector('.submit-btn');

    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
      }
    ];

    function buildQuiz() {
      const output = [];

      questions.forEach((currentQuestion, questionNumber) => {
        const options = [];

        for (let i = 0; i < currentQuestion.options.length; i++) {
          options.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[i]}">
              ${currentQuestion.options[i]}
            </label>`
          );
        }

        output.push(
          `<div class="question">${currentQuestion.question}</div>
          <div class="options">${options.join('')}</div>`
        );
      });

      quizContainer.innerHTML = output.join('');
    }

    function showResults() {
      const answerContainers = quizContainer.querySelectorAll('.options');
      let score = 0;

      questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selectedOption = answerContainer.querySelector(`input[name=question${questionNumber}]:checked`);
        const userAnswer = selectedOption ? selectedOption.value : '';

        if (userAnswer === currentQuestion.answer) {
          score++;
          answerContainers[questionNumber].style.color = 'green';
        } else {
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      const result = `You scored ${score} out of ${questions.length}.`;
      quizContainer.innerHTML += `<div>${result}</div>`;
      submitButton.disabled = true;
    }

    function submitQuiz() {
      showResults();
    }

    buildQuiz();