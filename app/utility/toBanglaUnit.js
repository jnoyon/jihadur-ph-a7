const units = {
  kg: "কেজি",
  gram: "গ্রাম",
  litre: "লিটার",
  ml: "মিলিলিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export default function toBanglaUnit(unit) {
  return units[unit] || unit;
}
