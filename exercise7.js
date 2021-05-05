//Harvest Festival

function plant(seed, water, fert, temp){
    let steam = "-"
        let container= "";
        if (temp >= 20 && temp <= 30){
        for(let i = 0; i < water; i++){
            container += steam.repeat(water).concat(seed.repeat(fert))
        }
        }else{
        for(let i = 0; i < water; i++){
            container += steam.repeat(water)
        }
        container = container.concat(seed)
        }
        return container
}
   