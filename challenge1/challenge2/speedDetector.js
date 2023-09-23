function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      if (demeritPoints <= maxDemeritPoints) {
        return `Points: ${demeritPoints}`;
      } else {
        return "License suspended";
      }
    }
  }
  
  const carSpeed = parseFloat(prompt('Enter the car speed (in km/h):'));
  
  if (!isNaN(carSpeed) && carSpeed >= 0) {
    
    const result = calculateDemeritPoints(carSpeed);
    console.log(result);
  } else {
    console.log('Invalid input. Please enter a valid car speed (in km/h).');
  }
  