import { Transform } from 'class-transformer';

export function ConvertToInt() {
  return Transform(({ value }) => {
    return parseInt(value, 10);
  });
}

export function ToLowerCase() {
  return Transform(({ value }) => {
    const lowerCaseValue = value.toLowerCase();
    return lowerCaseValue;
  });
}

export function Trim() {
  return Transform(({ value }) => (typeof value === 'string' ? value.trim() : value));
}
