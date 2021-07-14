class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    let user;
    while (true) {
        const NAME = prompt("Login?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${NAME}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("We can't find such user. Try again ");
            } else {
                throw err;
            }
        }
    }
    alert(`Full name: ${user.name}.`);
    return user;

}

demoGithubUser();