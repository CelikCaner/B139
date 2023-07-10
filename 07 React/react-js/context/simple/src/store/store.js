// createContext fonksiyonunu react'tan import ediyoruz. 
import { createContext } from "react";

// createContext fonksiyonu ile bir context oluşturuyoruz. Bos bir merkezi state.Istedigimiz ismi verebiliriz.
const CurrencyContext = createContext();

export default CurrencyContext;
