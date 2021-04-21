module.exports = () => {
    console.log("Bot başarıyla çalıştırıldı.");
    client.user.setPresence({ activity: { name: "Rennie ❤️ Volariana" }, status: "online" });
  }
  module.exports.configuration = {
    name: "ready"
  }