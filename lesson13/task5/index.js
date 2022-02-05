export const cleanTransactionsList = (transactions) => {
  return transactions
    .filter((tr) => isFinite(tr))
    .map((tr) => `$${Number.parseFloat(tr).toFixed(2)}`);
};

const array = ["  1.9 ", "16.4", 17, " 1 dollar "];

cleanTransactionsList(array);
