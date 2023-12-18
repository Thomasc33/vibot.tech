const showGuildIcon = (iconIdx) => {
    return {
        type : "SHOW_ICON",
        payload : iconIdx,
    }
}

export default showGuildIcon;