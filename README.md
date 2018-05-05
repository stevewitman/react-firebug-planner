https://www.youtube.com/watch?v=bloi9757lVk

Install firebase and react-firebase


```
npm i firebase react-firebase
```

`App.js`
```
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  databaseURL: 'https://my-firebase.firebaseio.com'
})

ReactDOM.render(
  <Provider firebaseApp={firebaseApp}>
    <MyRootComponent />
  </Provider>,
  rootEl
)
```
