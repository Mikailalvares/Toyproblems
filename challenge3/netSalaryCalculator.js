
function calculatePAYE(income) {

    const taxBrackets = [
      { min: 0, max: 24000, rate: 10 },
      { min: 24001, max: 32333, rate: 15 },
      { min: 32334, max: 40385, rate: 20 },
      { min: 40386, max: 54096, rate: 25 },
      { min: 54097, max: Infinity, rate: 30 },
    ];
  
    let paye = 0;
    for (const bracket of taxBrackets) {
      if (income > bracket.min) {
        const taxableAmount = Math.min(income, bracket.max) - bracket.min;
        paye += (taxableAmount * bracket.rate) / 100;
      } else {
        break;
      }
    }
  
    return paye;
  }
  
  function calculateNHIF(income) {
    
    const nhifRates = [
      { min: 0, max: 5999, rate: 150 },
      { min: 6000, max: 7999, rate: 300 },
      { min: 8000, max: 11999, rate: 400 },
      { min: 12000, max: 14999, rate: 500 },
      { min: 15000, max: 19999, rate: 600 },
      { min: 20000, max: 24999, rate: 750 },
      { min: 25000, max: 29999, rate: 850 },
      { min: 30000, max: 34999, rate: 900 },
      { min: 35000, max: 39999, rate: 950 },
      { min: 40000, max: 44999, rate: 1000 },
      { min: 45000, max: 49999, rate: 1100 },
      { min: 50000, max: 59999, rate: 1200 },
      { min: 60000, max: 69999, rate: 1300 },
      { min: 70000, max: 79999, rate: 1400 },
      { min: 80000, max: 89999, rate: 1500 },
      { min: 90000, max: 99999, rate: 1600 },
      { min: 100000, max: Infinity, rate: 1700 },
    ];
  
    let nhif = 0;
    for (const rate of nhifRates) {
      if (income >= rate.min && income <= rate.max) {
        nhif = rate.rate;
        break;
      }
    }
  
    return nhif;
  }
  
  
  function calculateNSSF(income) {
    
    const nssfRate = 200;
  
    return nssfRate;
  }
  
  function calculateNetSalary(basicSalary, benefits) {

    const totalIncome = basicSalary + benefits;

    const paye = calculatePAYE(totalIncome);

    const nhif = calculateNHIF(totalIncome);
  
    const nssf = calculateNSSF(basicSalary);
  
    const grossSalary = totalIncome - paye - nhif - nssf;
  
    const netSalary = grossSalary;
  
    return {
      basicSalary,
      benefits,
      paye,
      nhif,
      nssf,
      grossSalary,
      netSalary,
    };
  }
  const basicSalary = 50000;
  const benefits = 10000;
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails);
  