/*
 * Created by @tranphuquy19 on 03/03/2020
 * @author: tranphuquy19@gmail.com
 */
'use strict'
const {getAllDnsRecords, getDnsRecordById, updateDnsRecord} = require('./lib/dns');

Object.prototype.isEmpty = function () {
    for (let key in this) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
}

// module.exports = function () {
//     let opt;
//     this.config = (auth) => {
//         if (auth.isEmpty()) {
//             new Error("Authentication information is empty!");
//         } else {
//             opt = auth;
//         }
//         return {
//             getAllDnsRecords,
//             getDnsRecordById
//         }
//     }
// };
module.exports = class CloudflareDdns {
    constructor(opt) {
        this.token = opt.token;
        this.key = opt.key;
        this.email = opt.email;
        this.zoneId = opt.zoneId;
    }

    getAllDnsRecords() {
        if (!checkAuth()) return;
        if (this.zoneId.isEmpty()) {
            throw new Error('Zone ID is missing');
        } else {
            return getAllDnsRecords({...this});
        }
    };

    getDnsRecordById(dnsId) {
        if (!checkAuth()) return;
        if (dnsId.isEmpty()) {
            throw new Error('DNS ID is missing');
        } else {
            return getDnsRecordById(dnsId, {...this});
        }
    };

    updateDnsRecord(dnsId, newDnsRecord) {
        if (!checkAuth()) return;
        if (dnsId.isEmty()) {
            throw new Error('DNS ID is missing');
        } else {
            return updateDnsRecord(dnsId, {...this, ...newDnsRecord});
        }
    }

    checkAuth() {
        if (!this.token.isEmpty()) {
            return true;
        } else {
            if (this.key.isEmpty() || this.email.isEmpty()) {
                throw new Error('Global key or Email is missing');
            } else {
                return true;
            }
        }
        throw new Error('Authentication information is missing');
    }

    toString(cb = JSON.stringify) {
        console.log(cb({token: this.token, key: this.key, email: this.email}));
    }
}
