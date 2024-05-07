const { keyboard } = require('@testing-library/user-event/dist/keyboard');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7125536601:AAF6pAELY6egiMGCCszyppAsgQfcDPcBFHE'
const webAppUrl = 'https://ya.ru'; 
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Заполните форму', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
