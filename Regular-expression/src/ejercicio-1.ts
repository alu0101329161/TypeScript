
/**
 * Said that a year is leap or not leap
 * @param year: number
 * @returns boolean
 */
export function isLeapYear(year: number) :boolean {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
