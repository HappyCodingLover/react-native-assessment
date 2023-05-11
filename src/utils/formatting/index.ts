import { format, parse } from "date-fns";

export const formatDateToString = (date: Date, formatStr: string) => {
  return format(date, formatStr);
};

export const formatStringToDate = (dateStr: string, formatStr: string) => {
  return parse(dateStr, formatStr, new Date());
};

export function getColorPalette(uid: string, maxColors: number) {
  let codeSum = 0;
  for (let i = 0; i < uid.length; i++) {
    codeSum += uid.charCodeAt(i);
  }

  const index = codeSum % maxColors;

  return index;
}

export function getAbbr(firstName: string | any[]) {
  return firstName.slice(0, 2);
}

const numerize = (s: string) => String(s || "").replace(/[^\d]/g, "");

export const makeIntoPhoneNumber = (s: string) => {
  if (!s) {
    return "";
  }
  s = numerize(s);
  if (s.charAt(0) === "1") {
    s = s.slice(1);
  }
  if (s.length < 3) {
    return s;
  }
  if (s.length < 7) {
    return s.slice(0, 3) + s.slice(3);
  }
  return "(" + s.slice(0, 3) + ") " + s.slice(3, 6) + "-" + s.slice(6, 10);
};
