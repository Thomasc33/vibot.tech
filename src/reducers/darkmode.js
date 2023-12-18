const toggleDarkMode = (state = true, action) => {

    switch (action.type) {
        case "TOGGLE_DARK_MODE" : return action.payload;
        default : return state; 
    }
}

export default toggleDarkMode;