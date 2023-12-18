import Settings  from "../../sbic/Permission"
import Templates from "../../sbic/Points"
import Logs      from "../../sbic/Verification"

export const NavItems = [
    {
        id: 0,
        name: "Settings",
        key: "nav-settings",
        link: "/settings",
        content: <Settings />,
    },
    {
        id: 1,
        name: "Templates",
        key: "nav-templates",
        link: "/templates",
        content: <Templates />,
    },
    {
        id: 2,
        name: "Logs",
        key: "nav-logs",
        link: "/logs",
        content: <Logs />,
    },
]
