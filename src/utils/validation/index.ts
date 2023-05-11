export const isValidEmail = (email: string) => {
  if (email === '') {
    return;
  }
  let test = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (test == null) {
    return false;
  } else {
    return true;
  }
};
export const isValidPassword = (password: string) => {
  if (password.length >= 6) {
    return true;
  } else {
    console.log('Password must be at least 6 characters');
    return false;
  }
};

export const isValidName = (function () {
  var validName = /^[$A-Z_][0-9A-Z_$]*$/i;
  var reserved: any = {
    abstract: true,
    boolean: true,
    with: true,
  };
  return function (s: any) {
    // Ensure a valid name and not reserved.
    return validName.test(s) && !reserved[s];
  };
})();
