// Sticky Navbar by https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

  // When the user scrolls the page, execute myFunction
    window.onscroll = function() {stickyNav()};

  // Get the navbar
    var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
    var sticky = navbar.offsetTop;


    function stickyNav() {
      // Sticky Navbar by https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            }
          else {
            navbar.classList.remove("sticky");
            }

      // Scroll Back To Top Button by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        // When the user scrolls down 20px from the top of the document, show the button
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            }

          else {
              mybutton.style.display = "none";
            }
      }


// Side Navigation by https://www.w3schools.com/howto/howto_js_sidenav.asp //
    /* Open the sidenav */
      function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        }

    /* Close/hide the sidenav */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        }


// Scroll Back To Top Button by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


// BMI Calculator
  var inputKg = document.getElementById("inputKg");
  var inputCm = document.getElementById("inputCm");

  function metricBMI(){
    var outputBMI = Number(inputKg.value) / ( Number(inputCm.value) / 100 ) ** 2 ;
    document.getElementById("outputBMI").innerHTML = outputBMI.toPrecision(3);
      //.toPrecision() from https://www.w3schools.com/jsref/jsref_toprecision.asp
  }






// Countdown Timer by https://www.w3schools.com/howto/howto_js_countdown.asp
  // Set the date we're counting down to
    var cdDate = new Date("Jan 21, 2022 23:59:59").getTime();

  // Update the count down every 1 second
    var cdX = setInterval(function() {

    // Get today's date and time
      var cdNow = new Date().getTime();

    // Find the distance between now and the count down date
      var cdDistance = cdDate - cdNow;

    // Time calculations for days, hours, minutes and seconds
      var cdDays = Math.floor(cdDistance / (1000 * 60 * 60 * 24));
      var cdHours = Math.floor((cdDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var cdMinutes = Math.floor((cdDistance % (1000 * 60 * 60)) / (1000 * 60));
      var cdSeconds = Math.floor((cdDistance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
      document.getElementById("cd").innerHTML = cdDays + "d " + cdHours + "h " + cdMinutes + "m " + cdSeconds + "s ";

    // If the count down is finished, write some text
      if (cdDistance < 0) {
        clearInterval(cdX);
        document.getElementById("cd").innerHTML = "EXPIRED";
      }
    }, 1000);


// Simple JavaScript Quiz by https://simplestepscode.com/javascript-quiz-tutorial/
  //List of questions
    var myQuestions = [
    {
      question: "What are the 3 main groups of essential groups of nutrients?",
      answers: {
        a: 'proteins, fats, and oils',
        b: 'carbohydrates, vitamins, and minerals',
        c: 'proteins, carbohydrates and lipids'
      },
      correctAnswer: 'c'
    },

    {
      question: "What is the basic unit of proteins?",
      answers: {
        a: 'fatty acids',
        b: 'sugars',
        c: 'amino acids'
      },
      correctAnswer: 'c'
    },

    {
      question: "What is the basic unit of lipids?",
      answers: {
        a: 'fatty acids',
        b: 'sugars',
        c: 'amino acids'
      },
      correctAnswer: 'a'
    },

    {
      question: "Which of the following is a type of unsaturated fatty acid?",
      answers: {
        a: 'coconut oil',
        b: 'olive oil',
        c: 'cocoa butter'
      },
      correctAnswer: 'b'
    },

    {
      question: "Triglycerides composes _____ of all fats consumed in our diet",
      answers: {
        a: '70%',
        b: '95%',
        c: '10%'
      },
      correctAnswer: 'b'
    },

    {
      question: "How many essential amino acids are made by the body?",
      answers: {
        a: '11',
        b: '15',
        c: '9'
      },
      correctAnswer: 'a'
    },

    {
      question: "What is the basic unit of carbohydrates?",
      answers: {
        a: 'sugars',
        b: 'starches',
        c: 'amino acids'
      },
      correctAnswer: 'a'
    }

    ];

  //HTML elements for quiz
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

  //Generating quiz
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

      //Show the Questions
        function showQuestions(questions, quizContainer){
          // we'll need a place to store the output and the answer choices
          var output = [];
          var answers;

          // for each question...
          for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

              // ...add an html radio button
              answers.push(
                '<label>'
                  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                  + letter + ': '
                  + questions[i].answers[letter]
                + '</label>'
              );
            }

            // add this question and its answers to the output
            output.push(
              '<div class="question">' + questions[i].question + '</div>'
              + '<div class="answers">' + answers.join('') + '</div>'
            );
          }

          // finally combine our output list into one string of html and put it on the page
          quizContainer.innerHTML = output.join('');
        }

      //Show the Results
        function showResults(questions, quizContainer, resultsContainer){

          // gather answer containers from our quiz
          var answerContainers = quizContainer.querySelectorAll('.answers');

          // keep track of user's answers
          var userAnswer = '';
          var numCorrect = 0;

          // for each question...
          for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
              // add to the number of correct answers
              numCorrect++;

              // color the answers green
              answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
              // color the answers red
              answerContainers[i].style.color = 'red';
            }
          }

          // show number of correct answers out of total
          resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }

      // show questions right away
        showQuestions(questions, quizContainer);

      // on submit, show results
        submitButton.onclick = function(){
          showResults(questions, quizContainer, resultsContainer);
        }

    }
