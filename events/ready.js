module.exports = (client) => {
    console.log(`Logado com ${client.user.tag} , Tenho ${client.channels.cache.size} canais , Estou em ${client.guilds.cache.size} servidores, tenho ${client.users.cache.size}  usuários online`);
    
};
