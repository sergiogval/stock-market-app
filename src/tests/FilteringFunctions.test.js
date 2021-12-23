import { filterTheStocks, filterTheStocksByInput } from './__mock__/filterFunctMock';
import { mockApiSymbols, moclApiStocks } from './__mock__/tempApi';

describe('Should filter the store as per value', () => {
  test('and return new array as per the input', () => {
    expect(filterTheStocks('increasedInPrice', moclApiStocks).length).toBe(0);
  });

  test('and should return 3 elements if the inout is decreasedInPrice', () => {
    expect(filterTheStocks('decreasedInPrice', moclApiStocks).length).toBe(3);
  });

  test('and when filterthestocksbyinput is called it should filter the store as per the each entered leter',
    () => {
      expect(filterTheStocksByInput('G', mockApiSymbols).length).toBe(1);
    });

  test('and if the input is NO should get all three stocks', () => {
    expect(filterTheStocksByInput('O', mockApiSymbols).length).toBe(2);
  });
});
