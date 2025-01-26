import { LEASING_RATE } from '@/src/constants/mock-data';
//расчёт первоначального взноса
export function calcFirstPayment(carPrice: number, percentage: number) {
  return Math.round((carPrice * percentage) / 100);
}

//расчёт ежемесячного платежа
export function calcMonthlyPayment(carPrice: number, firstPayment: number, term: number) {
  return Math.round(
    (carPrice - firstPayment) * ((LEASING_RATE * (1 + LEASING_RATE) ** term) / ((1 + LEASING_RATE) ** term - 1)),
  );
}

//расчёт суммы договора

export function calcFullPayment(firstPayment: number, term: number, monthlyPayment: number) {
  return Math.round(firstPayment + term * monthlyPayment);
}
