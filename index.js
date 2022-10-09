const fs = require('fs');
const { Client, Collection, Intents, Interaction } = require('discord.js');
const wait = require('util').promisify(setTimeout);
const keepOnline = require(`./server`);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new(Collection);

const fileComandi = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of fileComandi){
    const comando = require(`./commands/${file}`);
    client.commands.set(comando.data.name, comando);
}

client.once('ready', () => {
    console.log('Bot Online!')
});

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) return;
    
    const nomeComando = interaction.commandName;

    if (!client.commands.has(nomeComando)) return;

    try{
        await client.commands.get(nomeComando).execute(interaction)
    }catch (error){
        console.error(error);
        await interaction.reply({content:'There was an error while executing that command, Please check Console!', ephemeral: true})
    }
});

client.on('messageCreate', async (message) => {
    if (!client.application?.owner) {
        await client.application?.fetch();
    }

    if (message.content.toLocaleLowerCase() === '!update' && message.author.id === client.application.owner.id){
        const data = [
            {
                name: 'checkout',
                description: 'Checkout Message for Clients.',
                options: [
                    {
                        name: 'price',
                        description :'What\'s the item price?',
                        type: 'STRING',
                        required: true,
                    },
                    {
                        name: 'user',
                        description :'Who you\'d like to ping?',
                        type: 'USER',
                        required: true,
                    },
                ]
            },
            {
                name: 'ping',
                description: 'Replies with Pong!',
            },
            {
                name: 'panel',
                description: 'Send a message in order to get informations about a gfx (Panel)',
            },
            {
                name: 'termine',
                description: 'Use this before closing a ticket!',
            },          
        ];
        const comando = await client.guilds.cache.get('884431245621227580')?.commands.set(data);
        console.log(comando);

    }   
})

client.login(process.env['token'])
keepOnline();