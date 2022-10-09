module.exports = {
    data: {
        name: 'checkout',
        description: 'Checkout Message for Clients',
    },

    async execute(interaction){
        const price = interaction.options.getString('price')
        const user = interaction.options.getUser('user')

        await interaction.reply 
        ('||<@' + user +'>||\n:white_small_square: **IDRA ARTS - Pagamento PayPal ** :white_small_square:\n\n:envelope: Email: `mautzt@hotmail.it`\n:dollar: Importo: **€'+ price +'**\n:warning: Metodo: **Amici e familiari (Persona di fiducia)**\n\n> _L\'Invio di uno screen contentente il pagamento è opzionale._\n ');
    }
}