//createContent fonsiyonunu react'tan import ediyoruz
import { createContext } from 'react';

//createContent fonksiyonu ile bir context olusturuyoruz. Bos bir merkezi state.
const CurrencyContext = createContext();

export default createContext;
