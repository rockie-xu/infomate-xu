const express = require('express');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();

const URL_MEDUZA = 'https://meduza.io/rss/all';
const URL_DW_EU = 'https://rss.dw.com/rdf/rss-en-top';

app.get('/meduza', async (req, res) => {
    try {
        const feed = await parser.parseURL(URL_MEDUZA);
        res.header('Access-Control-Allow-Origin', '*')
        res.json(feed);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.get('/dw', async (req, res) => {
    try {
        const feed = await parser.parseURL(URL_DW_EU);
        res.header('Access-Control-Allow-Origin', '*')
        res.json(feed);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 3002;
console.log('server started on port:',PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));