
export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.substring(1);
};

export const getTextNumber = (n: number) => {
  const numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
  return numbers[n] || n.toString();
};

export const getInitials = (firstName: string, lastName: string) => {
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
};

export const pluralize = (num: number, word: string, plural = word + 's') => {
  return [1, -1].includes(Number(num)) ? word : plural;
};
