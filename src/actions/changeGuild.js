const changeGuild = (guildIdx) => {
    return {
        type : "CHANGE_GUILD",
        payload : guildIdx,
    }
}

export default changeGuild;