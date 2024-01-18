import AdvandHm       from "../../sbic/subcategory/AdvandHm"
import Backend        from "../../sbic/Backend"
import Check          from "../../sbic/Check"
import Commands       from "../../sbic/Commands"
import Fame           from "../../sbic/subcategory/Fame"
import Exaltation     from "../../sbic/subcategory/Exaltation"
import Exalted        from "../../sbic/subcategory/Exalted"
import General        from "../../sbic/General"
import Guide          from "../../sbic/Guide"
import Modmail        from "../../sbic/Modmail"
import NonExalt       from "../../sbic/subcategory/NonExalt"
import Overview       from "../../sbic/subcategory/Overview"
import Permission     from "../../sbic/Permission"
import Points         from "../../sbic/Points"
import Raiding        from "../../sbic/Raiding"
import Sections       from "../../sbic/Sections"
import Special        from "../../sbic/subcategory/Special"
import Templates      from "../../sbic/Templates"
import TRLexample     from "../../sbic/subcategory/TRLexample"
import Verification   from "../../sbic/Verification"
import { LogOutPage } from "../../pages/LogOutPages"

export const SidebarItems =
{
    "settings": {
        "items": [
            {
                id: 0,
                name: "General",
                key: "nav-overview",
                link: "/overview",
                content: <General />,
            },
            {
                id: 1,
                name: "Permission",
                key: "nav-permissions",
                link: "/permissions",
                content: <Permission />,
            },
            {
                id: 2,
                name: "Commands",
                key: "nav-commands",
                link: "/commands",
                content: <Commands />,
            },
            {
                id: 3,
                name: "Backend",
                key: "nav-backends",
                link: "/backends",
                content: <Backend />,
            },
            {
                id: 4,
                name: "Raiding",
                key: "nav-raiding",
                link: "/raiding",
                content: <Raiding />,
            },
            {
                id: 5,
                name: "Points",
                key: "nav-points",
                link: "/points",
                content: <Points />,
            },
            {
                id: 6,
                name: "Guide",
                key: "nav-guide",
                link: "/guide",
                content: <Guide />,
            },
            {
                id: 7,
                name: "Verification",
                key: "nav-verification",
                link: "/verification",
                content: <Verification />,
            },
            {
                id: 8,
                name: "Check",
                key: "nav-checks",
                link: "/checks",
                content: <Check />,
            },
            {
                id: 9,
                name: "Modmail",
                key: "nav-modmail",
                link: "/modmail",
                content: <Modmail />,
            },
            {
                id: 10,
                name: <div style={{color:'#db3727', fontWeight:'600'}}>Logout</div>,
                key: "nav-logout",
                link: "/logout",    
                content: < LogOutPage />,
            }
        ],
    },
    "templates": {
        "items": [
            {
                id: 0,
                name: "Sections",
                key: "nav-Sections",
                link: "/sections",
                content: <Sections />,
            },
            {
                id: 1,
                name: "Templates",
                key: "nav-Templates",
                link: "/templates",
                content: <Templates />,
                subCategory: [
                    {
                        name: "overview",
                        content: <Overview />,
                    },
                    {               
                        name: "Adv / Hm",
                        content: <AdvandHm />,
                    },
                    {               
                        name: "Exalted",
                        content: <Exalted />,
                    },
                    {               
                        name: "Exaltation",
                        content: <Exaltation />,
                    },
                    {               
                        name: "Fame",
                        content: <Fame />,
                    },
                    {               
                        name: "Non-Exalt",
                        content: <NonExalt />,
                    },
                    {               
                        name: "Special",
                        content: <Special />,
                    },
                    {               
                        name: "TRL/Example",
                        content: <TRLexample />,
                    },
                ]

            },
            {
                id: 10,
                name: <div style={{color:'#db3727', fontWeight:'600'}}>Logout</div>,
                key: "nav-logout",
                link: "/logout",    
                content: < LogOutPage />,
            }
        ]
    },
    "afks": {
        "items": [ 

            {
                id: 0,
                name: "Raid Status Announcements",
                key: "nav-AfkChecks",
                link: "/afkchecks",
                content: <Sections />,

            },
            {
                id: 1,
                name: "Veteran Status Announcements",
                key: "nav-AfkChecks",
                link: "/afkchecks",
                content: <Sections />,

            }


        ]

    }
}