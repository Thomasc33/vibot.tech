const changeGuild = (guildIdx = 0, action) => {

    switch (action.type) {
        case "CHANGE_GUILD" : return action.payload;
        default : return guildIdx; 
    }
} 

export default changeGuild;