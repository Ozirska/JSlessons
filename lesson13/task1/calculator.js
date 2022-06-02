export function saveFuncCalls(func) {
  let callsHistory = [];
  return function withMemory() {
    return function func(...arguments) {
      console.log([...arguments]);
    };
  };
}

const cleanTransactionsList = (transactions) =>
  transactions
    .filter((tr) => isFinite(tr))
    .map((tr) => `$${Number.parseFloat(tr).toFixed(2)}`);
