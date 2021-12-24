export const filterTheStocks = (value, remoteData) => {
  const store = [];
  if (value === 'increasedInPrice') {
    for (let i = 0; i < remoteData.length; i += 1) {
      if (remoteData[i].changes >= 0) {
        store.push(remoteData[i]);
      }
    }
  } else if (value === 'decreasedInPrice') {
    for (let i = 0; i < remoteData.length; i += 1) {
      if (remoteData[i].changes < 0) {
        store.push(remoteData[i]);
      }
    }
  }

  return store;
};

export const filterTheStocksByInput = (value, remoteData) => {
  let store = [];
  if (value === '') {
    store = remoteData;
  } else {
    for (let i = 0; i < remoteData.length; i += 1) {
      const regex = new RegExp(value, 'gi');
      if (remoteData[i].symbol.match(regex) || remoteData[i].name.match(regex)) {
        store.push(remoteData[i]);
      }
    }
  }
  return store;
};
