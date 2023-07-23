// Instructions: Black Dot Printing is attempting to organize carpools to save energy. Each input record contains an employee's name, and town of residence. Ten percent of the company's employees live in Wonder Lake. Thirty percent of the employees live in Woodstock. Because these towns are both north of the company, the company wants to encourage employees who live in either town to drive to work together.

// Design a flowchart or psuedocode for a program that accepts an employee's data and displays it with a message that indicates whether the employee is a candidate for the carpool.




$('#submit').click(function(){

  var fullname = $('#fullname').val();
  var town = $('#town').val();

  // console.log(fullname);
  // console.log(town);

  if(town.includes("Woodstock") || town.includes("Wonder")){
    $('#carPools').append(`Hello, ${fullname}. `);
    $('#carPools').append(`You must be from north, then you are candidate for the carpool.`);
  } else{
    $('#carPools').append(`Hello, ${fullname}. `);
    $('#carPools').append(`You must not be from north, then you are not candidate for the carpool.`);
  }

});

