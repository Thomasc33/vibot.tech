const showSidebarContent = (content) => {
    return {
        type : "SHOW_CONTENT",
        payload : content,
    }
}

export default showSidebarContent;