import { applyMiddleware, compose, createStore } from 'redux'
import { responsiveStoreEnhancer } from 'redux-responsive'
import thunk from 'redux-thunk'

import { rootReducer  }from './rootReducer'

export const store = createStore(
    rootReducer,
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
