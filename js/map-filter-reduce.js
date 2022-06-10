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

const lang3Plus = users.filter(function({languages}) {
    return languages.length >= 3;
});
console.log(lang3Plus);

const emailAddresses = users.map(function({email}) {
    return email;
});
console.log(emailAddresses);


const initialValue = 0;
const totalXp = users.reduce(
    (runningTotal, {yearsOfExperience}) => runningTotal + yearsOfExperience,
    initialValue
);
console.log(totalXp);
console.log("Average years of experience is " + totalXp / users.length + ".")

const longestEmail = users.reduce(
    ({email}) =>
)
