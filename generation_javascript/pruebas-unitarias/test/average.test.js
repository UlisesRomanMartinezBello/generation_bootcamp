const { average } = require("../assets/js/pruebas-unitarias");

test('Ingresa solo un valor', () => {
    expect(average([1])).toBe(1);
});

test('Usando multiples valores', () => {
    expect(average([1,2,3,4,5,6])).toBe(3.5);
});

test('Usando undefined', () => {
    expect(average([])).toStrictEqual([]);
});