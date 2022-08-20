const mostFeq = require('./mostFeq');
const nums = require('./arrays.json');

test('Retornar o Elemento mais frequente', () => {
  expect(mostFeq(["a","a","a","b"])).toEqual("a");
  expect(mostFeq(["a","b","a","a"])).toEqual("a"); //elementos em ordem intercalada
  expect(mostFeq(["a","a","a","b","b","b"])).toBe(null); //Mais de um elemento com quantidades iguais

  for(arr of Object.keys(nums)){
      expect(mostFeq(nums[arr])).toEqual(mostFeq(nums[arr]));
  }
});