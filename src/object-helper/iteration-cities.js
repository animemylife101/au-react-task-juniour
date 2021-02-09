export const countMaxPopulationOfCity = (population) => {
    let arr = [];
    population.map((a) => {
        if (a.population > 5000) arr.push(a);
    });

    let arr2 = [];
    arr.map((a) => {
        arr2.push(a.population);
    })

    let max = Math.max(...arr2);
    let result = '';

    arr.map((a) => {
        if (a.population == max) result = a;
    })

    let r = arr.unshift(result);
    return arr;
}
