export const filterTheStocks = (value, remoteData) => {
  let store = []
  if (value === 'increasedInPrice') {
    remoteData.filter((stock) => {
      if(stock.changes >= 0) {
        store.push(stock);
      }
    });
  } else if (value === 'decreasedInPrice') {
    remoteData.filter((stock) => {
      if(stock.changes < 0) {
        store.push(stock);
      }
    });
  }

  return store;
}

export const filterTheStocksByInput = (value, remoteData) => {
  let store = [];
  if (value === '') {
    store = remoteData;
  } else {
        remoteData.filter((stock) => {
        const regex = new RegExp(value, 'gi');
        if(stock.symbol.match(regex) || stock.name.match(regex)){
          store.push(stock);
        }
      })
   }
  return store;
}

