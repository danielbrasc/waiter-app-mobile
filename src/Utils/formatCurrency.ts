export function formatCurrency(value: number, currency: string){
  return new Intl.NumberFormat(
    'pt-br',
    { style: 'currency', currency })
    .format(value);
}
