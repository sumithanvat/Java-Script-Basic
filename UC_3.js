function calculateDailyWage() {
    // Generate a random number between 0 and 2
    // 0 represents no work, 1 represents part-time, and 2 represents full-time
    const workType = Math.floor(Math.random() * 3);
  
    // Variables for hours and wage
    let hours = 0;
    let wage = 0;
  
    // Calculate hours and wage based on workType
    switch (workType) {
      case 0:
        // No work
        hours = 0;
        break;
      case 1:
        // Part-time work (4 hours)
        hours = 4;
        break;
      case 2:
        // Full-time work (8 hours)
        hours = 8;
        break;
    }
  
    // Calculate the wage based on the number of hours worked
    wage = hours * 20; // Assuming the wage per hour is $20
  
    // Return the calculated wage
    return wage;
  }
  
  // Call the function to calculate the daily wage
  const dailyWage = calculateDailyWage();
  
  // Output the result
  console.log("Daily wage: $" + dailyWage);