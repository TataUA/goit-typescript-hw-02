/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise <T>(): Promise<Array<string|number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
  .then((data: Array<string|number>) => {
  console.log(data);
});

export {};