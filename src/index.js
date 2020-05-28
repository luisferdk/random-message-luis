const messages = [
  'Hola',
  'Que estes bien',
  'Saludos',
  'Hoy va ser una buen Día'
];

const randomMessage = () => {
  const message = messages[Math.floor(Math.random()*messages.length)];
  console.log(message);
}

module.exports = { randomMessage };