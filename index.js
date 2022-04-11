let main = document.querySelector(".main");
let reposc = document.querySelector(".reposc")
let forn = document.querySelector("#inputv")
let html = '';
let html2 = '';

document.getElementById("forn").addEventListener("submit", (e) =>{
e.preventDefault();
console.log(forn.value)
GetGithubUser(forn.value)
GetRepos(forn.value)
forn.value = '';


})


//GET GITHUB USERS

async function GetGithubUser(username) {
    const userdata = await axios.get("https://api.github.com/users/" + username)
    //console.log(userdata.data);
    html = `
    <h4>Username: ${userdata.data.name}</h4>
    <img src= "${userdata.data.avatar_url}">
    <p>Company: ${userdata.data.company}</p>
    <p>Followers: ${userdata.data.followers}</p>
    <p>Public Repos: ${userdata.data.public_repos}</p>
</div>
    `
    main.innerHTML = html

}

//GET REPOS
async function GetRepos(username) {
    const userdata = await axios.get("https://api.github.com/users/" + username + "/repos")
    let repos = userdata.data;
    console.log(repos);
    repos.forEach((repo) =>{

        html2 += `
        <h4> ${repo.name}</h4>
        `
        reposc.innerHTML = html2
    })




}
