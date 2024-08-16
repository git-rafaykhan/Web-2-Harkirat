// parseInt()

// Purpose: Turns a string into an integer (a whole number).
// How It Works: Reads the string from the start and stops when it hits a character that isn’t a number

// Examples:

// parseInt("42") → 42 (converts "42" to the number 42)
// parseInt("42px") → 42 (stops reading at "px")
// parseInt("3.14") → 3 (stops reading at the decimal point)


// parseFloat()

// Purpose: Turns a string into a floating-point number (a number with decimals).
// How It Works: Reads the string from the start and stops when it hits a character that isn’t valid for decimals.
// Examples:

// parseFloat("3.14") → 3.14 (converts "3.14" to the number 3.14)
// parseFloat("42") → 42 (interprets "42" as 42.0)
// parseFloat("42px") → 42 (stops reading at "px")


function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");