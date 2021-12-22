const fetch = require('node-fetch');

module.exports = async () => {

    //FETCH DATA FROM ROCKSTAR API
    const data = await fetch(`https://support.rockstargames.com/services/status.json`).then(res => res.json())

    //REPLACE RESULTS WITH ICONS
    function validate (res) {
    if (res === "UP") {res = "🟢"}
    if (res === "DOWN") {res = "🔴"}
    if (res === "LIMITED") {res = "🟡"}
    return res
    }

    //Checks Red Dead Online
    let redDedOnline = {
        pc: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'PC').service_status.status,
        xboxOne: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'Xbox One').service_status.status,
        ps4: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'PS4').service_status.status,
        stadia: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'Stadia').service_status.status,
        XboxCloud: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'Xbox Cloud Gaming').service_status.status
    }

    redDedOnline.pc = await validate(redDedOnline.pc)
    redDedOnline.xboxOne = await validate(redDedOnline.xboxOne)
    redDedOnline.ps4 = await validate(redDedOnline.ps4)
    redDedOnline.stadia = await validate(redDedOnline.stadia)
    redDedOnline.XboxCloud = await validate(redDedOnline.XboxCloud)

    //Checks Grand Theft Auto Online
    let gtao = {
        pc: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'PC').service_status.status,
        ps4: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'PS4').service_status.status,
        xboxOne: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'Xbox One').service_status.status,
        XboxCloud: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'Xbox Cloud Gaming').service_status.status
    }

    gtao.pc = await validate(gtao.pc)
    gtao.ps4 = await validate(gtao.ps4)
    gtao.xboxOne = await validate(gtao.xboxOne)
    gtao.XboxCloud = await validate(gtao.XboxCloud)

    //Checks Social Club
    let socialClub = {
        all: data.statuses.find((s) => s.name === 'Social Club').services_platforms.find((s) => s.name === 'All Features').service_status.status
    }

    socialClub.all = await validate(socialClub.all)

    //Checks Rockstar Games Launcher
    let launcher = {
        authentication: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Authentication').service_status.status,
        store: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Store').service_status.status,
        cloud: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Cloud Services').service_status.status,
        downloads: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Downloads').service_status.status
    }

    launcher.authentication = await validate (launcher.authentication)
    launcher.store = await validate (launcher.store)
    launcher.cloud = await validate (launcher.cloud)
    launcher.downloads = await validate (launcher.downloads)

    //Returns results
    return {
        redDedOnline,
        gtao,
        socialClub,
        launcher,
        lastUpdate: data.updated
    }

};
