const toggleDarkMode = (toggle) => {
    return {
        type : "TOGGLE_DARK_MODE",
        payload : toggle,
    }
}

export default toggleDarkMode;