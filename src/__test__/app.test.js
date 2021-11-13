import phoneFormat from '../js/app';

test('validateUsername test1', () => {
  expect(phoneFormat('8 (927) 000-00-00 ')).toBe('+79270000000');
});

test('validateUsername test2', () => {
  expect(phoneFormat('+7 960 000 00 00')).toBe('+79600000000');
});

test('validateUsername test3', () => {
  expect(phoneFormat('+86 000 000 0000')).toBe('+860000000000');
});
