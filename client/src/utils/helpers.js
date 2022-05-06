export function validateUsername(username) {
  //TODO logic to validate if username is in the DB
  
}

export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}
