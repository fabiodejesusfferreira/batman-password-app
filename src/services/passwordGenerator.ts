export default function generatePassword() {
  let result: string = "";
  const passwordLength = 12;
  const initialValue = 0;
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "[]{}()-+=,./!@#$%^&*<>?:;|\\'\"`~"

  for (
    let indexOfCharacter = initialValue;
    indexOfCharacter < passwordLength;
    indexOfCharacter++
  ) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
}
