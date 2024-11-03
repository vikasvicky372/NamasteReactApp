# Namste React 

# parcel
 - Dev build
 - Local Server
 - HMR - hot module replacement
 - file watching algo - written in c++
 - caching - faster builds
 - image optimization
 - minfication
 - bundling
 - compresss

 # Namste Food

 /**- Header
  - logo
  - nav-items
- Body
  - serach
  - Restuarant Cards
- Footer
  - copyright
  - terms
  - privacy policy **/

  # Redux integration

  npm i @reduxjs/toolkit
  npm i react-redux      
  build our store using configure store
  connect our store to our app using Provider from react-redux
  slice(cartSlice)  using createSlice from react toolkit
  dispatch(action) using useDispatch from react-redux
  Subcribing to the store (using useSelector fron react-redux)

  # types of testing (developer)
  - unit testing
  - integration testing
  - end to end testing(e2e)

  # setting up the react testing library

  - install react testing library (npm i -D @testing-library/react  )
  - install jest (npm i -D jest)
  - install babel dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
  - configure babel (by creating babel.config.js) 
  - configure parcel config to disable default Parcel transpilation (by creating .parcelrc file)
  - jest configuration npx jest -init
  - npx jest --init
  - install jsdom library (npm install --save-dev jest-environment-jsdom)