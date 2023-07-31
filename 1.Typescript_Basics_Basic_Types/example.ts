const note : {
    title: string,
    author: string,
    readonly feats: [id:number, cod: number]
} = {
    title: "Dijkstra Algorithm",
    author: "Juan Pablo",
    feats: [2, 1]
}

note.feats[0]=2

enum GameLevel {
    EASY,
    HARD,
    IMPOSSIBLE
}

/*
number,
string,
object,
Array []
Tuple
Enum 
any

Funcion types: ()=> ReturnType
When we defined void as a returntype we can return types without getting error

unknown type over any type
when assigning an unknown value to fixed typed variable.

never type
used when a function never returns anything


*/