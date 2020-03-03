/*
 * Created by @tranphuquy19 on 04/03/2020
 * @author: tranphuquy19@gmail.com
 */
'use strict'
module.exports = {
    dns: (res) => {
        if (res.success === true) {
            delete res.result.meta;
            return res.result;
        } else {
            return res.errors;
        }
    },
    dnss: (res) => {
        if(res.success === true){
            return res.result.map(dns => {
                delete dns.meta;
                return dns;
            });
        }
    }
}
