//targets the div where profile info appears
const overview = document.querySelector(".overview");
const username = "sheeshalicia";

//this async function fetches information from my github profile
const getProfileInfo =  async function () {
    const gitUserInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await gitUserInfo.json();
    //log out the response to the console and call your function
    //test console.log(data); //this allows us to see something in the console when we run the function
    displayProfileInfo(data);
};

getProfileInfo();

//this async funtion displays the fetched info on the page
const displayProfileInfo = async function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    //the following adds information pulled from the getProfileInfo data (above) using chosen properties
    div.innerHTML =
    `<figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>` ; 

    overview.append(div);
};
