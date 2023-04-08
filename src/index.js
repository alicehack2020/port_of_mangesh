import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './font/Poppins-Bold.ttf';
import './font/Poppins-SemiBold.ttf';
import './font/Poppins-BoldItalic.ttf';
import './font/Poppins-Medium.ttf';
import './font/Poppins-MediumItalic.ttf';
import './font/Poppins-Regular.ttf';
import './font/Poppins-SemiBoldItalic.ttf';
import { ChakraProvider ,extendBaseTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

 

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'yellow', // default is gray
      },
    },
  },
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
