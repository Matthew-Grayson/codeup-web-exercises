const options = {
    method: 'GET',
    headers: {
        "Authorization": githubToken
    }
};

function returnDateOfLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, options)
        .then(response => response.json())
        .then(data => console.log(data[0].created_at))
        .catch(error => console.error(error));
}

function wait(time) {
    return new Promise(() => {
        setTimeout(() => {
            console.log(`You'll see this after ${time / 1000} second(s)`);
        }, time)
    })
}