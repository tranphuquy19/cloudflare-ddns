/*
 * Created by @tranphuquy19 on 03/03/2020
 * @author: tranphuquy19@gmail.com
 */
'use strict'
const client = require('./client');
const $ = require('./res');
module.exports = {
    /**
     *
     * @param opts  Object  {token || key, email, zoneId}
     * @return {Promise<void>}  Array   All DNS records of zone ID
     */
    getAllDnsRecords: async (opts) => {
        const {zoneId} = opts;
        const reqPath = `${zoneId}/dns_records/`;
        let res = await client('GET', reqPath, opts, {});
        res = $.dns(res);
        return res;
    },
    /**
     *
     * @param dnsId String  DNS identifier
     * @param opts  Object  {token || key, email, zoneId}
     * @return {Promise<void>}
     */
    getDnsRecordById: async (dnsId, opts) => {
        const {zoneId} = opts;
        const reqPath = `${zoneId}/dns_records/${dnsId}`;
        let res = await client('GET', reqPath, opts, {});
        return $.dns(res);
    },
    createDnsRecord: () => {

    },
    updateDnsRecord: () => {

    },
    updateDnsRecords: () => {

    },
    deleteDnsRecord: () => {

    }
};
