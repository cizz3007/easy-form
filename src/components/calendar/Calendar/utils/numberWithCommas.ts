function numberWithCommas(value: number) {
  if (!value || value < 1000) return value;
  value = Math.floor(value);
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { numberWithCommas };
