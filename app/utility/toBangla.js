export default function toBangla(number) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return number.toString().replace(/\d/g, (digit) => {
    return banglaDigits[digit];
  });
}
