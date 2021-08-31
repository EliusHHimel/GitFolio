const callAPI = () => {
    const inputText = document.getElementById('input-field')
    userName = inputText.value;

    inputText.value = '';
    fetch(`https://api.github.com/users/${userName}`)
        .then(Response => Response.json())
        .then(userData => displayUser(userData))
}


const displayUser = (user) => {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <img class="profile-image" src="${user.avatar_url}" alt="">
        <h1 class="full-name">${user.name}</h1>
        <div class="follow-section">
            <h4 class="followers">Followers: ${user.followers}</h4>
            <h4 class="following">Followings: ${user.following}</h4>
        </div>
        <div class="repo-details">
            <h4 class="public-repo">Public Repository: ${user.public_repos}</h4>
            <h4 class="public-gist">Public Gists: ${user.public_gists}</h4>
        </div>
    
    `
}