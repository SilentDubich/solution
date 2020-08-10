
const arr = [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' },
];
const groupType = 'branch'

const groupBy = (arr, groupType) => {
    //прошу прощения за столь грубое решение, ночь без сна из за кашля несколько подпортила решение (
    arr.sort((prev, next) => {
        if (prev[groupType] < next[groupType]) return -1
        if (prev[groupType] < next[groupType]) return 1
    })
    let result = {}
    let group = []
    // Выделяем основные группы
    for (let i = 0; i < arr.length; i++) {
        if (group.indexOf(arr[i][groupType]) === -1) {
            group.push(arr[i][groupType])
        }
    }
    //Создаем для этих групп свойства в объекте и присваиваем им пустой массив
    for (let j = 0; j < group.length; j++) {
            let property = group[j]
            result[property] = []
    }
    //Заполняем эти массивы нужными данными
    for (let i = 0; i < arr.length; i++) {
        result[arr[i][groupType]].push(arr[i])
    }
    // За это отдельно прошу прощения, такой кошмар я обычно не делаю
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < group.length; j++) {
    //         if (arr[i][groupType] === group[j]) {
    //             result[group[j]].push(arr[i])
    //         }
    //     }
    // }
    console.log(result)
    return result
}

groupBy(arr, groupType)

/* получить это
{
    audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
        { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' }
    ],
}
*/
