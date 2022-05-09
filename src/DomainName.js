let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            console.log(pronoun + adj + noun + ".com")
        }
    }
}


// for (let i = 0; i < pronoun.length ; i ++) {
//     for (let j = 0; j <adj.length ; j ++) {
//         for (let k = 0; k <noun.length; k ++) {
//             let DomainNames1 = pronoun[(Math.floor(Math.random() * pronoun.length))]
//             let DomainNames2 = adj[(Math.floor(Math.random() * adj.length))]
//             let DomainNames3 = noun[(Math.floor(Math.random() * noun.length))]
//             console.log(DomainNames1 + DomainNames2 + DomainNames3 + ".com")
//         }   
//     }
// }
