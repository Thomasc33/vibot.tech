import { combineReducers } from 'redux';
import showSidebarContent  from './sidebar';
import toggleDarkMode      from './darkmode';
import discordAuth         from './discordAuth';
import changeGuild         from './changeGuild';

const allReducers = combineReducers({
    showSidebarContent,
    toggleDarkMode,
    discordAuth,
    guildIdx: changeGuild
})

export default allReducers;