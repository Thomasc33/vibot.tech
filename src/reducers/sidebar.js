const showSidebarContent = (state = 0, action) => {

    switch (action.type) {
        case "SHOW_CONTENT" : return action.payload;
        default : return state; 
    }
} 

export default showSidebarContent;