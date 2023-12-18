import { useSelector } from "react-redux";

const SidebarItemContent = () => {
    const sidebarItemContent = useSelector(state => state.showSidebarContent);
    return (
        <>{ sidebarItemContent }</>
    );
}

export default SidebarItemContent;