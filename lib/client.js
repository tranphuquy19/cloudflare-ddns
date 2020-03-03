/*
 * Created by @tranphuquy19 on 03/03/2020
 * @author: tranphuquy19@gmail.com
 */
'use strict'
const fetch = require('node-fetch');

/**
 *
 * @param reqMethod String  Request method
 * @param reqPath   String  Request path `https://api.cloudflare.com/client/v4/zones/${reqPath}`
 * @param opts      Object  {key, email, token, zone}
 * @param payload   Object  Body request
 * @return rest     Object  Response object
 */
module.exports = async function (reqMethod = 'GET', reqPath, opts, payload) {
    const uri = `https://api.cloudflare.com/client/v4/zones/${reqPath}`;
    const {key, email, token} = opts;

    const options = {
        method: reqMethod,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    };

    if (key) {
        options.headers['X-Auth-Key'] = key;
        options.headers['X-Auth-Email'] = email;
    } else if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (reqMethod.toUpperCase() === 'GET') {
        options.query = payload;
    } else {
        options.body = payload;
    }
    console.log({uri, options});
    let res = await fetch(uri, options);
    return await res.json();
};
