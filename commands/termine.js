module.exports = {
    data: {
        name: 'termine',
        description: 'Use this before closing a ticket!',
    },

    async execute(interaction){
        await interaction.reply('**▫️ACQUISTO TERMINATO!**\n\n> Terrò il file e questo ordine aperto **fino alle ore 12:00 di domani**,\n> farò **fino a 2 Revisioni** (Modifiche) **gratuite al progetto se necessario!**\n\n**Grazie ancora per il tuo acquisto :D!**');
    }
}
