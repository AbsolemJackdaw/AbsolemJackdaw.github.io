export interface ICard {
    link: string,
    image: string,
    altTxt: string,
    text: string
}

function create(link: string, image: string, altTxt: string, text: string) {
    return {link: link, image: image, altTxt: altTxt, text: text}
}

export function modCardRegistry(): ICard[] {
    const cards: ICard[] = []
    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/paintings",
        "https://media.forgecdn.net/avatars/421/635/637649644741913892.png",
        "paintings++",
        "Paintings++"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/texture-packs/oliver-remund-painting-pack",
        "https://media.forgecdn.net/avatars/233/366/637071699625150013.png",
        "paintings++ pack",
        "Oliver Remund Painting Pack"
    ));


    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/apple-crates",
        "https://media.forgecdn.net/avatars/601/218/637980033049309572.png",
        "apple crates",
        "Apple Crates"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/public-gui-announcement",
        "https://media.forgecdn.net/avatars/225/791/637041666564369251.png",
        "public gui announcement",
        "Public Gui Announcement"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/cow-simulator",
        "https://media.forgecdn.net/avatars/598/530/637976698825363487.png",
        "cow simulator",
        "Cow Simulator"
    ));


    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/bad-to-the-bone",
        "https://media.forgecdn.net/avatars/442/577/637694606253533433.png",
        "bad to the bone",
        "Bad to the Bone (Forge)"
    ));


    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/left-hanging",
        "https://media.forgecdn.net/avatars/439/243/637686175161498287.png",
        "left hanging",
        "Left Hanging (Forge & Fabric)"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/just-fashion",
        "https://media.forgecdn.net/avatars/62/237/636142093247498816.png",
        "just fashion",
        "Just Fashion"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/suits-fashion",
        "https://media.forgecdn.net/avatars/600/720/637979076496023269.png",
        "just fashion addon",
        "Suits Fashion"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/pet-buddy-mod",
        "https://media.forgecdn.net/avatars/51/860/636108925219162679.png",
        "pet buddy",
        "Pet Buddy"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/telepad",
        "https://media.forgecdn.net/avatars/26/909/635800716905691885.png",
        "telepads",
        "Telepads"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/fat-chicken",
        "https://media.forgecdn.net/avatars/470/603/637757785851900686.png",
        "fat chicken",
        "Fat Chicken (Christmas Mod)"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/snow-mod",
        "https://media.forgecdn.net/avatars/470/558/637757687418136059.png",
        "snow mod",
        "Snow Mod"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/fixmyspawnr",
        "https://media.forgecdn.net/avatars/550/818/637887628260580574.png",
        "fixmyspawnr",
        "FixMySpawnR"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/easierchests-2",
        "https://media.forgecdn.net/avatars/549/316/637886339109260920.png",
        "easier chests",
        "Easier Chests"
    ));

    cards.push(create(
        "https://www.curseforge.com/minecraft/mc-mods/easiervillagertrading-2",
        "https://media.forgecdn.net/avatars/552/764/637892529114433833.png",
        "easier villager trading",
        "Easier Villager Trading"
    ));

    cards.push(create(
        "https://www.curseforge.com/members/absolemjackdaw/projects",
        "/curseforge.png",
        "CurseForge logo",
        "More mods..."
    ));
    return cards;
}

export function mediaCardRegistry(): ICard[] {
    const cards: ICard[] = [];
    cards.push(create(
        "https://github.com/AbsolemJackdaw",
        "/github_dark.png",
        "Github logo",
        "AbsolemJackdaw"
    ));
    cards.push(create(
        "https://www.curseforge.com/members/absolemjackdaw/projects",
        "/curseforge.png",
        "CurseForge logo",
        "AbsolemJackdaw"
    ));
    cards.push(create(
        "https://discord.gg/8MEdFZh",
        "/discord.png",
        "discord logo",
        "absolemjackdaw"
    ));
    cards.push({
        link: "https://www.deviantart.com/absolemjackdaw",
        image: "/deviantart.png",
        altTxt: "deviantart logo",
        text: "AbsolemJackdaw"
    });
    cards.push(create(
        "https://www.instagram.com/absolem.jackdaw/",
        "/insta.png",
        "Instagram Logo",
        "absolem.jackdaw"
    ));
    cards.push(create(
        "https://twitter.com/SubarakiS",
        "/twitter.png",
        "Twitter logo",
        "@SubarakiS"
    ));
    return cards;
}