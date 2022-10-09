const { MessageEmbed, MessageActionRow, MessageButton, Collector } = require('discord.js');

module.exports = {
    data: {
        name: 'panel',
        description: 'Send a message in order to get informations about a gfx (Panel)',
    },

    async execute(interaction){
        const embed = new MessageEmbed()
            .setColor('LIGHT_GREY')
            .setTitle('Pannello Messaggi IDRA ARTS')
            .setDescription('Si prega di selezionare il tipo di messaggio\nda voler inviare al cliente.')
        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('LOGO')
                    .setLabel('Logo')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('BANNER')
                    .setLabel('Banner')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('MCITABANNER')
                    .setLabel('Banner MC-ITA')
                    .setStyle('SUCCESS'),
            );
            const rowtwo = new MessageActionRow()
            .addComponents(
                new MessageButton()
                        .setCustomId('TRAILER')
                        .setLabel('Trailer')
                        .setStyle('SUCCESS'),   
                new MessageButton()
                    .setCustomId('OVERLAYTW')
                    .setLabel('Overlay TW')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('BOTTONITW')
                    .setLabel('Bottoni TW')
                    .setStyle('SUCCESS'),
            )

            const rowtre = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ONLYORDERS')
                    .setLabel('Solo Ordini')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('IMPEGNATO')
                    .setLabel('Impegnato')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('TERMINE')
                    .setLabel('Termine')
                    .setStyle('DANGER'),
            )


            await interaction.reply({ components: [row, rowtwo, rowtre], ephemeral: true, embeds: [embed] });
            const collector = interaction.channel.createMessageComponentCollector()

            collector.on('collect', async i => {
                    if (i.customId === 'LOGO'){
                        await i.reply({ 
                            content: 'ℹ️ **INFORMAZIONI GRAFICA**\n**Per iniziare a lavorare alla grafica, mi serviranno le seguenti informazioni:**\n\n **🔴=OBBLIGATORIO | 🟢=OPZIONALE**\n _🔴 - Testo da scrivere/Nome\n 🔴 - Colore/i principale/i\n 🔴 - Quale Layout utilizzare (Leggi Sotto)\n 🟢 - Sfondo\n 🟢 - Esempio per lo stile\n 🟢 - Font da utilizzare_\n ———————————————— \n**⚠️ LAYOUT - IMPORTANTE!**\n _🔸 Invia il nome del layout per sceglierne uno._\n\n _L1: TUO\n     NOME \n\n L2:TUONOME \n\n L3: TN (Iniziali)_\n ———————————————— \n\n**Una volta inviate queste informazioni,inizierò a lavorare al logo!**',
                            components: []
                         })
                    }else if (i.customId === 'BANNER'){
                        await i.reply({ 
                            content: '**ℹ️ INFORMAZIONI GRAFICA**\n**Per iniziare a lavorare alla grafica, mi serviranno le seguenti informazioni:**\n\n **🔴= OBBLIGATORIO | 🟢= OPZIONALE**\n _🔴 - Colore/i principale/i\n 🔴 - Layout (Leggi Sotto)\n 🟢 - Sfondo\n 🟢 - Font da utilizzare\n 🟢 - Esempio per lo Stile\n 🟢 - Testo da scrivere/Nome (O Utilizza il logo che già possiedi, se ne possiedi uno)_\n ———————————————— \n**⚠️ LAYOUT - IMPORTANTE!**\n _🔸 Invia il nome del layout per sceglierne uno._\n\n _L1: TUO\n     NOME \n\n L2: TUONOME \n\n L3: TN (Iniziali)_\n ———————————————— \n\n**Una volta inviate queste informazioni,inizierò a lavorare al banner!**',
                            components: []
                         })
                    }else if (i.customId === 'MCITABANNER'){
                        await i.reply({ 
                            content: '**ℹ️ INFORMAZIONI BANNER MC ITALIA\nPer iniziare a lavorare al banner, mi serviranno le seguenti informazioni:\n\n🔴= OBBLIGATORIO | 🟢= OPZIONALE **\n_🔴 - Colore Principale\n🔴 - Logo da inserire (Possibilmente in PNG Alta qualità)\n🔴 - La lista di tutte le sezioni (Esempio: "SURVIVAL" - DESCRIZIONE - Sfondo da inserire)\n🔴 - Tutti gli sfondi da utilizzare\n🔴 - Link da inserire nel footer (Alla fine del banner)\n🟢 - Font da utilizzare\n🟢 - Esempio per lo Stile\n🟢 - Testo da scrivere/Nome (O Utilizza il logo che già possiedi, se ne hai uno)_\n————————————————\n**⚠️ MASSIMO SEZIONI - IMPORTANTE!**\n     _🔸Il Massimo di sezioni senza costi aggiuntivi è 6, Dopo verrà una TANTUM a sezione._\n————————————————\n\n**Una volta inviate queste informazioni, potrò iniziare a lavorare al banner :D!**',
                            components: []
                         })
                    }else if (i.customId === 'TRAILER'){
                        await i.reply({ 
                            content: '**ℹ️ INFORMAZIONI TRAILER\nPer iniziare i lavori al trailer, mi serviranno le seguenti informazioni:\n\n🔴= OBBLIGATORIO | 🟢= OPZIONALE** _\n🔴 - Fino a [LEGGI SOTTO] Testi da inserire\n🔴 - Dove registrare le clip [Quantità Max: LEGGI SOTTO]\n🔴 - Colori da utilizzare\n🟢 - Cosa scrivere alla fine del trailer (Alla Outro)\n🟢 - Soundtrack/Musica da utilizzare\n🟢 - Esempio per lo Stile del trailer_\n\n**🔸CLIP PER IL TRAILER**\n         _Le clip per il trailer saranno registrate da me._\n————————————————\n**⚠️ QUANTITÀ MASSIME - IMPORTANTE!**\n\n_ 🕐 Durata: 30s\n          Max Testi: 5\n          Max Clip: 6 \n\n🕐 Durata: 1 Minuto\n          Max Testi: 8\n          Max Clip: 9\n\n🕐 Durata: 2 Minuti\n          Max Testi: 12\n          Max Clip: 15_\n————————————————\n\n**Per iniziare a registrare il trailer mi serviranno i seguenti permessi:**\n_- Accesso al Volo\n- Accesso alla Velocità (Max 10)\n- Se possibile, anche il comando /time set day._\n\n> **⚠️ ATTENZIONE: I Chunk del server nel file server.properties devono essere minimo 8 Per registrare in modo ottimale.**\n> __Una volta inviate queste informazioni, potrò iniziare a lavorare al trailer :D!__',
                            components: []
                         })
                    }else if (i.customId === 'OVERLAYTW'){
                        await i.reply({ 
                            content: '**ℹ️ INFORMAZIONI OVERLAY\nPer iniziare la creazione degli overlay, mi serviranno le seguenti informazioni:\n\n🔴= OBBLIGATORIO | 🟢= OPZIONALE **\n_🔴 - Colori Da utilizzare\n🔴 - Che tipo di overlay è/Grafica\n🟢 - Logo da inserire\n🟢 - Font da utilizzare_\n\n————————————————\n🔸**PERSONALIZZAZIONE**\n_Un overlay per obs può essere fatto in 1000 modi diversi,\n anche se chiedo queste informazioni potrai sempre darmene delle altre!_\n————————————————\n\n**Una volta inviate queste informazioni, potrò iniziare a lavorare agli overlay, ricorda, massimo 4 :D**',
                            components: []
                         })
                    }else if (i.customId === 'BOTTONITW'){
                        await i.reply({ 
                            content: '**ℹ️ INFORMAZIONI GRAFICA\nPer iniziare i lavori ai bottoni per la descrizione del tuo canale\ntwitch, mi serviranno le seguenti informazioni:\n\n🔴= OBBLIGATORIO | 🟢= OPZIONALE **\n_🔴 - Colori Da utilizzare\n🟢 - Testo da inserire\n🟢 - Font da utilizzare\n🟢 - Logo/Icona da inserire\n🟢 - Esempio per lo stile dei bottoni_\n————————————————\n\n**Una volta inviate queste informazioni, potrò iniziare a lavorare ai bottoni\n per il tuo canale twitch, ricorda, massimo 6 :D!**',
                            components: []
                         })
                    }else if (i.customId === 'ONLYORDERS'){
                        await i.reply({ 
                            content: '**❌ UTILIZZO TICKET ERRATO.**\n\n_Ciao! I ticket ti permettono di metterti in contatto con me, idra arts.\nL\'unico problema è che stai facendo un utilizzo di essi. I Ticket, come\nindicato da __TUTTE__ Le parti, sono stati creati SOLO ED ESCLUSIVAMENTE\nper clienti interessati all\'ordine di una grafica._\n\n> **Ti ringrazio per avermi contattato, ma questo non è il modo corretto!\n> Ci sono alcuni clienti che stanno parlando con me, preferirei tenere i ticket puliti! Grazie! **',
                            components: []
                         })
                    }else if (i.customId === 'IMPEGNATO'){
                        await i.reply({ 
                            content: '**ℹ️ AGGIORNAMENTI!**\n\n_Ci tengo ad informarvi che attualmente sto avendo un contrattempo con un ordine in coda,\nsarò disponibile tra qualche oretta, comunque entro oggi,\ngrazie e scusami ancora per l\'attesa :D!_',
                            components: []
                         })
                    }else if (i.customId === 'TERMINE'){
                        await i.reply({ 
                            content: '**▫️ACQUISTO TERMINATO!**\n\n> Terrò il file e questo ticket aperto **fino alle ore 12:00 di domani**,\n> farò **fino a 2 Revisioni** (Modifiche) **gratuite al progetto se necessario!**\n\n**Grazie ancora per il tuo acquisto :D!**',
                            components: []
                         })
                    }
            })

    }
}