import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppRouter } from './router/AppRouter'

import './styles/index.scss'

export const MesaApp = () => {
  return (
    <Provider store={store}>
      <AppRouter className='router-flex'/>
    </Provider>
  )
}
