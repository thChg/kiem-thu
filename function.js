const validate = (value) => {
  return isNaN(value) ? false : true;
};

const classifyMbi = (height, weight) => {
  if (height > 2.5 || height < 1 || weight > 200 || weight < 30) {
    throw new Error(`Invalid input`);
  }

  const mbi = weight / (height * height);

  let mbiCategory;
  switch (true) {
    case mbi < 18.5:
      mbiCategory = "Underweight";
      break;
    case mbi < 25:
      mbiCategory = "Normal";
      break;
    case mbi < 30:
      mbiCategory = "Overweight";
      break;
    default:
      mbiCategory = "Obese";
  }

  return mbiCategory;
};

const mainFunc = (height, weight) => {
  if (!validate(height) || !validate(weight)) {
    throw new Error(
      `Invalid input value(s): height: ${height}, weight: ${weight}`
    );
  }

  const MbiType = classifyMbi(height, weight);

  console.log(MbiType);
};

module.exports = { classifyMbi, mainFunc };
