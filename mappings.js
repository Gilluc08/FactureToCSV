// =====================================================
// MAPPING EAN PACKAGING → EAN UNITE (UVC)
// Pour ajouter un mapping : ajouter une ligne dans la marque concernee
// Format : 'EAN_PACK': 'EAN_UNITE',
// =====================================================

const EAN_MAPPINGS = {

    // -------------------------------------------------
    // BAOUW
    // -------------------------------------------------
    baouw: {
        // Electrolytes - Pack de 9 tubes de 10 pastilles
        '3760267403507': '3760267403514',  // Mure - Cassis
        '3760267403521': '3760267403538',  // Peche - Passion
        '3760267403545': '3760267403552',  // Citron Vert - Menthe
        '3760267403958': '3760267403934',  // Mangue - Ananas

        // Boisson Isotonique - Sac 585g (lot de 5, meme EAN)
        '3760267403897': '3760267403897',  // Citron - Fleur de sureau
        '3760267403880': '3760267403880',  // Peche - Romarin
        '3760267403972': '3760267403972',  // Pasteque - Grenade
        '3760267403989': '3760267403989',  // Menthe - Melisse

        // Boisson Isotonique - Sachets 45g (lot de 12)
        '3760267404009': '3760267403996',  // Citron - Fleur de sureau
        '3760267404023': '3760267404016',  // Peche - Romarin
        '3760267404047': '3760267404030',  // Pasteque - Grenade
        '3760267404061': '3760267404054',  // Menthe - Melisse

        // Gel Sticks (lot de 12)
        '3760267404221': '3760267404214',  // Framboise - Grenade
        '3760267404184': '3760267404177',  // Citron - Yuzu
        '3760267404245': '3760267404238',  // Cerise - Guarana Cafeine
        '3760267404207': '3760267404191',  // Caramel sale

        // Gels naturels bio 85g - Pack de 20
        '3760267402821': '3760267402814',  // Banane - Vanille
        '3760267402807': '3760267402791',  // Abricot - Thym
        '3760267402845': '3760267402838',  // Peche - The Matcha
        '3760267402784': '3760267402777',  // Fruits Rouges - Hibiscus
        '3760267403361': '3760267403354',  // Ananas - Noix de Coco
        '3760267403385': '3760267403378',  // Citron Vert - Menthe

        // Barres energetiques bio 50g - Pack de 12
        '3760267402616': '3760267402609',  // Vanille - Macadamia
        '3760267402593': '3760267402586',  // Banane - Pecan
        '3760267402654': '3760267402647',  // Chocolat - Noisette
        '3760267403668': '3760267403675',  // Mangue - Cajou
        '3760267403651': '3760267403644',  // Crunchy - Cacahuete
        '3760267402876': '3760267402869',  // Framboise - Pistache

        // Purees energetiques bio 90g - Pack de 20
        '3760267402111': '3760267401916',  // Poire - Pomme - Menthe
        '3760267402104': '3760267401909',  // Framboise - Fraise - Basilic
        '3760267402135': '3760267401930',  // Banane - Kiwi - Vanille
        '3760267403422': '3760267403415',  // Mangue - Passion - Gingembre
        '3760267402128': '3760267401923',  // Patate douce - Carotte
        '3760267403408': '3760267403392',  // Cari de Legumes
        '3760267403194': '3760267402418',  // Legumes Verts

        // Boisson de recuperation (lot de 5, meme EAN)
        '3760267403910': '3760267403910',  // Chocolat - Noisette
        '3760267403903': '3760267403903',  // Vanille - Amande
        '3760267403491': '3760267403491',

        // Barres proteinees bio 50g - Pack de 12
        '3760267403118': '3760267403101',  // Fruits Rouges - Cajou
        '3760267403132': '3760267403125',  // Pomme - Canelle
        '3760267403170': '3760267403163',  // Chocolat - Cacahuete

        // Pate a tartiner bio 200g - Pack de 6
        '3760267403200': '3760267402234',
        '3760267403446': '3760267403439',  // Crunchy Praline - Noisette

        // Starter Packs (lot de 6, meme EAN)
        '3760267404108': '3760267404108',
        '3760267402944': '3760267402944',
        '3760267402968': '3760267402968',

        // Divers (lot de 5, meme EAN)
        '3760267402753': '3760267402753',
        '3760267402678': '3760267402678',  // Flasque trail
        '3760267404252': '3760267404252',
        '3760267404269': '3760267404269',
    },

    // -------------------------------------------------
    // AUTRES MARQUES (ajouter ici)
    // -------------------------------------------------
    // exemple: {
    //     'EAN_PACK': 'EAN_UNITE',
    // },
};
