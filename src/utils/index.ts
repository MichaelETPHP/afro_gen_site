// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Format date utility
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Scroll to element utility
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy text: ', error)
    return false
  }
}

// Generate random ID utility
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

// Format number with commas utility
export const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

// Capitalize first letter utility
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Truncate text utility
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
