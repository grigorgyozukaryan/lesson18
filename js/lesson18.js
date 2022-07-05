"use srtict"

const mma = {
    mmaFighter1: "Fedor Emelianenko",
    mmaFighter2: "Geghard Musasi",
    mmaFighter3: "Jef Monson",
    mmaFighter4: "Anderson Silva",
    mmaFighter5: "Alexander Emelianenko",
    mmaFighter6: "Mirco CroCop",
    mmaFighter7: "Antonio Silva",

    famousChampionsUfc:{
        "name": "Francis Ngannou",
        "name":"Israel Adesanya",
        "name":"Kamaru Usman",
     },
    famousChampionsSkyForce:{
        "name": "Alcadeus, Winged Justice",
        "name": "Arcane Warden",
        "name": "Citadel Knight",
    },
    famousChampionsBellator:{
        "name": "Ryan Bader",
        "name": "Vadim Nemkov",
        "name": "Johnny Eblen", 

    },
    famousChampionsPride:{
        "name": "Antonio Rodrigo Nogueira",
        "name": "Fedor Emelianenko",
        "name": "Dan Henderson",
    },
    famousChampions:{
        "name": "Mark Coleman",
        "name": "Wanderlei Silva",
        "name": "Mauricio Rua",

    },

      ufcFunction(){
        for(let i in mma){
        if(typeof mma[i]==="object"){
            for(let j in mma[i]){
            console.log(`${j} ${mma[i][j]}`)
        }
        }else{console.log(`${i} ${mma[i]}`)}
        }
      }
}

const {ufcFunction} = mma

ufcFunction()

const arr = [
    "Dan Henderson",
    "Mauricio Rua",
    "Citadel Knight",
    "Geghard Musasi",
    "Arcane Warden",
    [6,3,2,65,64],
    [69,54,25,32,10],
    [54,25,52,36,63,],
    ["Fedor Emelianenko","Mirco CroCop"],
    [98,89,4,22,66,99,8],
] 

for(let i in arr){
    if(typeof arr[i] === "object"){
       for(let j in arr[i]){
       console.log(arr[i][j])
       }
    }else{
        console.log(arr[i]) 
    }
}


for(let i of arr){
    console.log(i)
}

