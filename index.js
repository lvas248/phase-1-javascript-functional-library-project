let obj = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4
}
let array = [1,2,3,4]

function myEach(collection, alert){
    if(Array.isArray(collection)){
        for(let element of collection){
            alert(element)
        }
        return collection
    }
    else{
        
        const values = Object.values(collection)
        for(const value of values){
            alert(value)
        }
        return collection
    }
}

function myMap(collection, callBack){
    const newArray =[]
    if(Array.isArray(collection)){
        for(const element of collection){
            newArray.push(callBack(element))
        }
    return newArray

    }
    else{
        const newArray = []
        const values = Object.values(collection)
        for(const value of values){
            newArray.push(callBack(value))
        }
        return newArray

    }
}
function myReduce(collection, callback, acc){

    if(Array.isArray(collection)){
        let collectionCopy = [...collection]
        acc = acc || collectionCopy.shift()
        for(let element in collectionCopy){
            acc = callback(acc, collectionCopy[element], collectionCopy)
            console.log(acc)
        }
        return acc
    }else{
        const array = Object.values(collection)
        const copy = [...array]
        acc = acc || copy.shift()
        for(let element in copy){
            acc = callback(acc, copy[element], copy)
            console.log(acc)
        }
        return acc
    }    
}

function myFind(collection, predicate){
    //predicate is a callback function that returns true or false
    if(Array.isArray(collection)){
        for(const element of collection){
            if(predicate(element)){
                return element
            }
        }
    }
}

function myFilter(collection, predicate){
    let filteredArray = []
    if(Array.isArray(collection)){
        for(const element of collection){
            if(predicate(element)){
                filteredArray.push(element)
            }
        }
    }
    return filteredArray
}

function mySize(collection){
    let n = 0
    if(Array.isArray(collection)){
        
        for(const element of collection){
            n++
        }
        return n
    }else{
        let array = Object.keys(collection)
        for(const element of array){
            n++
        }
        return n
    }

}

function myFirst(array, int){
    let solutionArray = []
    const num = int || 1
    for(let i=0; i<num; i++){
        if(num === 1){
            return array[i]
        }else{
            solutionArray.push(array[i])
        }
    }
    return solutionArray
}

function myLast(array, int){
    let solutionArray = []
    const num = int || 1
    for(let i = array.length - num; i < array.length; i++){
        if(num === 1){
            console.log(array[i])
            return array[i]
        }
        else{
            solutionArray.push(array[i])
            console.log(array[i])
        }
    }
    return solutionArray
}

function myKeys(obj){
    let array=[]
    for(const key in obj){
        array.push(key)
    }
    return array
}

function myValues(obj){
    const array = []
    for(const key in obj){
        array.push(obj[key])
    }
    return array
}