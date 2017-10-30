// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './actionTypes';
import { fetchBitcoin } from './bitcoin';

// Configure mock store /w middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// Create mock store with initial state
const store = mockStore({ bitcoin: {} });

// Create a mock response
const mockResponse = { body: { bpi: 'bitcoin price index' } };

// Replace request from 1st argument with second argument
fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
);

it('should create an async action to fetch bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  // In an it block, in order for a promise to
  // resolve, it needs to be returned
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
