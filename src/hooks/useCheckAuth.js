import axios from "axios"

export const useCheckAuth = () => {
    let isLoggedIn = false;

    if (!Object.keys(localStorage).includes("discordAuth")) {
        return { isLoggedIn };
    }

    let discordAuth = JSON.parse(localStorage.getItem('discordAuth'));

    const accessToken = discordAuth.accessToken;
    const refreshToken = discordAuth.refreshToken;
    const expiresIn = discordAuth.expiresIn;
    const tokenType = discordAuth.tokenType;
    
    if (!accessToken || !refreshToken || !expiresIn || !tokenType) {
        return { isLoggedIn }
    }

    const id = discordAuth.id;
    const username = discordAuth.username;
    const discriminator = discordAuth.discriminator;
    const avatar = discordAuth.avatar;

    if (id && username && discriminator && avatar) {
        isLoggedIn = true;
        return { isLoggedIn }
    }

    //validate access_token
    axios.get('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`
        }
    })
    .then(res => res.data)
    .then(res => {
        const usersData = {...discordAuth};
        usersData["id"] = res.id;
        usersData["username"] = res.username;
        usersData["discriminator"] = res.discriminator;
        usersData["avatar"] = res.avatar;

        localStorage.setItem('discordAuth', JSON.stringify(usersData));
    })
        
    isLoggedIn = true;
    return { isLoggedIn }
}
