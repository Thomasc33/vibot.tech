const discordAuth = (state = null, action) => {

    switch (action.type) {
        case "SET_DISCORD_AUTH" : return action.payload;
        default : return state; 
    }
}

export default discordAuth;