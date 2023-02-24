export function OldPriceExists(oldPrice) {
  if (oldPrice) return true;
  return false;
}

export function CalculateAmtSaved(newAmt, oldAmt) {
  return (oldAmt - newAmt).toFixed(2);
}