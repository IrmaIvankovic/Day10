function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
            1: "CD",
            2: "8T",
            3: "LP"
            },
            gold: true
            },
        002: {
            artist: "Bruno Mars",
            title: "Just The Way You Are",
            release_year: 2010,
            id: 1,
            formats: {
            1: "KM",
            2: "8E",
            3: "DP"        
            }
            
          
            
    }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;