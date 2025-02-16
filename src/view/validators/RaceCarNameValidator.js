import {
  validateDuplicateName,
  validateEndWithDelimiter,
  validateLimitLength,
  validatePositiveLength,
} from './validator.js';

const nameValidators = [validateLimitLength, validatePositiveLength];

const seperatedNameValidators = [
  validateDuplicateName,
  validateEndWithDelimiter,
];

const validateRaceCarNames = (name) => {
  nameValidators.forEach((raceCarNameValidator) => {
    raceCarNameValidator(name);
  });
};

const vaildateSeperatedRaceCarName = (names) => {
  seperatedNameValidators.forEach((seperatedNameValidator) => {
    seperatedNameValidator(names);
  });
};

export { validateRaceCarNames, vaildateSeperatedRaceCarName };
