export default function handler(req, res) {
  const { url } = req;

  if (url === '/api') {
    res.send('Hello World!');
  } else if (url === '/api/instagram') {
    res.send('@swagatk9');
  } else if (url === '/api/github') {
    res.send('<h2>swagat-codes</h2>');
  } else {
    res.status(404).send('Not found');
  }
}
