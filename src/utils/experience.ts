const CAREER_START_YEAR = 2016

export function getYearsOfExperience(): number {
  const currentYear = new Date().getFullYear()
  return currentYear - CAREER_START_YEAR
}

export function getExperienceText(): string {
  const years = getYearsOfExperience()
  return `${years}+ years`
}
