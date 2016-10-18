import test from 'ava';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionType from '../../src/js/components/actionType';
import nock from 'nock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    it('empty',()=>{
      expect(()).toEqual();
    })
})
