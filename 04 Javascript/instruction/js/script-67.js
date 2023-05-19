import { numberSortASC, numberSortDESC } from './modules/sort(script-67).js';

const arr1 = ['Ali', 'Veli', 'Selin', 'Şener', 'Leyla', 'Zeki', 'Metin'];
const arr2 = [56, 13, 6, 134, 44, 12];
document.getElementById('btn3').addEventListener('click', () => {
  console.log(numberSortASC(arr2));
});
document.getElementById('btn4').addEventListener('click', () => {
  console.log(numberSortDESC(arr2));
});
