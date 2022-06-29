const benchmarkWidth = 360;

export function toPercent(value = 1) {
  return Number(((value / benchmarkWidth) * 100).toPrecision(6)) + '%';
}
