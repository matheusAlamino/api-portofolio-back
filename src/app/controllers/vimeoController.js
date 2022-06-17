const express = require('express');
const { Vimeo } = require('vimeo');
const { clientId, clientSecret, accessToken } = require('../../config/vimeo.json');

const router = express.Router();

const fields = '?fields=name,description,type,duration,width,height,embed.html,pictures.sizes,tags.canonical'

router.get('/getReel', async (req, res) => {
    try {
        let client = new Vimeo(clientId, clientSecret, accessToken);

        await client.request({
            method: 'GET',
            path: `/me/videos${fields}`,
            query: {
                filter_tag: 'reel',
            }
        }, function (error, body, status_code, headers) {
            if (error) {
                return res.status(400).send({ error: 'Error trying to get the reel video' });
            }

            return res.send(body);
        })
    } catch (error) {
        return res.status(400).send({ error: 'Not possible search the videos' });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        let client = new Vimeo(clientId, clientSecret, accessToken);

        await client.request({
            method: 'GET',
            path: `/me/videos${fields}`,
            query: {
                filter_tag: 'all',
            }
        }, function (error, body, status_code, headers) {
            if (error) {
                return res.status(400).send({ error: 'Error trying to get the videos' });
            }

            return res.send(body);
        })
    } catch (error) {
        return res.status(400).send({ error: 'Not possible search the videos' });
    }
});

module.exports = app => app.use('/vimeo', router);