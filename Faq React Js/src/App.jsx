import { useEffect, useRef, useState } from 'react';
import './App.css'
import Header from './main/Header'
import alanBtn from "@alan-ai/alan-sdk-web";
import {ChakraProvider} from "@chakra-ui/react"
import Faq from './main/Faq';

function App() {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: 'be85b9e5baa3bd4916d9b21bbd016e1d2e956eca572e1d8b807a3e2338fdd0dc/stage',
              onCommand: (commandData) => {
              if (commandData.command === 'gotoFaq') {
                  setIndex(commandData.faqId - 1)
                }
              }
          });
      }
  }, []);
  return (
   <>
    <Header/>
    <ChakraProvider>
      <Faq index = {index} setIndex ={setIndex} />
    </ChakraProvider>
   </>
  )
}
export default App
