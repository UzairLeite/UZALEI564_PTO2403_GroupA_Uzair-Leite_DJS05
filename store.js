import { tallyReducer } from './reducer.js';

class Store {
    constructor(reducer) {
        this.reducer = reducer;
        this.state = this.reducer(undefined, {});
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener(this.state));
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

export const store = new Store(tallyReducer);
