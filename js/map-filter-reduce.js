const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// function lang3Plus() {
//     let output = [];
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].languages.length >= 3) {
//             output.push(users[i]);
//         }
//     }
//     console.log(output);
// }

// function lang3Plus(input) {
//     return this.languages >= 3;
// }
// const result = users.filter(lang3Plus);

// console.log(users.filter(function ({languages}) {
//     return languages.length >= 3;
// }));

const lang3Plus = users.filter(function(user) {
    return user.languages.length >= 3;
});
console.log(lang3Plus);

const emailAddresses = users.map(function(user) {
    return user.email;
});
console.log(emailAddresses);

const totalXp = users.reduce(
    (runningTotal, user) => runningTotal + user.yearsOfExperience, 0);
console.log(`Combined user experience is ${totalXp} years.`);
console.log(`Average user experience is ${totalXp / users.length} years.`);

const longestEmail = users.reduce(function(longestSoFar, user) {
    if(user.email.length > longestSoFar.length) {
        return user.email;
    }
    return longestSoFar
}, "");
console.log(`The longest user email is ${longestEmail}.`);

const stringOfUsers = users.reduce(
    (accumulation, user) => accumulation.concat(`, ${user.name}`), "");
console.log(`Your instructors are, in no particular order${stringOfUsers}.`);

const langs = new Set(users.reduce(
    (collection, user) => collection.concat(user.languages), []));
console.log(langs);

