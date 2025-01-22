type strArray = Array<string>
//c1
type numArray = Array<number>
const last = (arr: numArray) => arr[arr.length - 1]
console.log(last([1,2,3]))
//c2
const last1 = (arr: Array<string>) => arr[arr.length-1]
console.log(last1(['a', 'c', 'l']))
//3 -tuple
const lastT = <T>(arr: Array<T>) => arr[arr.length-1]
console.log(lastT([2, 4, 3]))

const Gen = <T>(x: T) => [x]
const GEN1 = <X, Y>(x: X, y:Y) => [x , y]

//generics extends
//bắt buộc các property 
const make = (obj: {firstName: string, lastName: string}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})
// có thể thêm các property khác
const make1 = <T extends {firstName: string; lastName: string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
}) 
const ex = make1({firstName: 'Kim', lastName: 'C', age: 27})

const addEm = <T extends {name: string, age: number}>(employee: T) => {
    const id = Math.floor(Math.random() * 100)
    return {
        ...employee,
        id
    }
}
const empOne = addEm({name: 'Kim', age: 27, female: true})
console.log(empOne.female)

//generics in interface
interface Resource<T> {
    id: number,
    name: string,
    data: T
}
//áp dụng:
const adbc: Resource<string> = {
    id: 1,
    name: 'kim',
    data: 'hello'
}

type NumberResources = Resource<number[]>
const def: NumberResources = {
    id: 2,
    name: 'Kim',
    data: [1,2]
}