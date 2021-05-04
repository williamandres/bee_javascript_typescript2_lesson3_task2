function getCount(str) {
    var vowelsCount = 0;
    let chain = str.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i < chain.length; i++)
    {
        if(vowels.includes(chain[i]) )
        {
            vowelsCount++
        } 
    }
    
    return vowelsCount
    
}