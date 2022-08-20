const dash = require('./dash');
const nums = require('./nums.txt');

test('Traço entre números pares', () => {
  expect(dash(123.8)).toEqual("123.8");
  expect(dash(1224.56)).toEqual("12-2-4.56");
  expect(dash(12466)).toEqual("12-4-6-6");
  expect(dash(null)).toBe(null);
  expect(dash(undefined)).toEqual(null);
  expect(dash(0/0)).toEqual(null);
  for(arr of Object.keys(nums)){
    expect(mostFeq(nums[arr])).toEqual(mostFeq(nums[arr]));
}
});