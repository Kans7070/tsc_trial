var ts_num : number = 5
let company : string = 'hello'
let isActive: boolean = true
let x : any = 'hello'
x = 1
type n =number
var a:n = 1

// can array be declared two ways
let ids: Array<number> = [1,2,3,4,5]
let id: number[] = [1,2,3,4,5]
let hai : Array<any> = [1,'hello',true]
// tuple
let person : [number, string, boolean] = [1,'hai',true]
// tuple Array
let employee : [number,string][] = [
    [1,'he'],
    [1,'he'],
    [1,'he'],
]

//union
let pid : string | number = 22
pid = 'kla'

//Enum
enum Direction1 {
    up,
    down,
    left,
    right
}
//up not initialized then it's value is 0,down = 1,left = 2,right = 3

//object
type User = {
    id? : number|string,
    name : string
}

var user:User={
    id:1,
    name :'hello'
}

var hello:User = {
    name : 'kk'
}


// type Assertion can be done two type
type Cid = any
let cid : Cid ='ka'
let cak = <number>cid
cak = 1

let cak1 = cid as number
cak1 = 2

// Functions
// if we didn't specify type in parameters it will take as any
function addNum(x,y){
return x+y
}

function addNum1(x:number,y:number):number{
    return x+y
}

// if there is no return then void must be specified

function messageId(message:string|number):void{
    console.log('hai')
}

// Interfaces

interface IProfile  {
    readonly name : string ,
    id : number
} 

const kans : IProfile = {
    name : 'hell',
    id: 2
}

// kans.name = 'ksm'

interface MathFunc {
    (x:number,y:number):number
}

const add : MathFunc = (x:number,y:number):number => x+y

//classes

interface IPersonClass{
    id :number
    name :string
    register():string
}

class PersonClass implements IPersonClass{
    id:number
    name:string

    constructor(id,name){
        this.id =id
        this.name = name
    }
    register(){
        return `${this.name} is registered`
    }
}

const brad = new PersonClass(1,'kans')

console.log(brad.register())

