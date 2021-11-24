const path = require('path')

module.exports = {
    fileSystem:{
        path: path.resolve("app","databases")
   },
    fireBases:{
        
        "type": "service_account",
        "project_id": "segundaentrega-80f8c",
        "private_key_id": "f09921517db7b25d66d3c67049ea0db6d4ec1e36",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/xIWEq5c9cO11\n+2H+xL7BmI6XEgeX/MEuldXu8Jus1zTym/8E4f+4wqrSsMy0yNkacMn0JdXPfpQX\nC7WUDLbIJdYSoSD15GWBrZVOCCkuEKSgNSbp23xXuuyaWj+NNRtv96TtrE28omtc\n3Lr29S4KZ+Xuu/5PP6w8vUhdK7aIP0SSGYsVOdtWhD2i4hB8nnMc217Uwh8G75p3\n8odSGcDGETOKETlIY5W8GS3NGeTv93wg6CEyCBfDrC9zVJZNm/nLkrAq6q6jeWWB\nbMupRcOKe++KVFuqwU46NQsadY9/VkjVsm12PKEQrgv2sbd8S7gnnPI2a7FO+6pf\nZW7b+OHhAgMBAAECggEAB4HEbkifT4brrMot8GC4TPDRaCWLCY6Z615vNP7TQUVd\na7/ikEjej1eDg2LraIpSQWA376hJgellF6/cKFMFFrmwcyM+nJGXzadDaH4WSpjZ\nMPJTtyTh7bdCCtrMkRUKoWvy12D+3AsJo+V6Ji+74SlnDVzrnCOUdP495nPPHe82\ntpP4kOs631nxxBdPqCOF+6MuYa2M9AJVJYIt+Tcywy/DPGf1qghqZmDgCzCGKcbc\nRlJbJW+SNsdeNHawHD+2stRZMoo32NTxYxxVuJHzkNt7S7O2CiXD0QayWIXCvZkd\nCi5FUUpGUrAmiytAqmVYBrk1I4p0Y4ilvjwgtYuCIQKBgQDtuRCfEzp4Tz54Ggov\n7m477B45dI/2l3DdtKyItOan67qgWLFHJBGQ2V3zrQKKveqP4OjrRhNIchrzRVxj\nD+NzWekxhcYRpu4WLQvUOqWSXabVn2ZKd/3YqmIpqO6B8vUO6vi/h5coTP88Nf0d\nGACzaPRYjqOsa/8o297NVGMlyQKBgQDOgvONq+co5SoE/qHrFno+jvhRJVRFhF8j\nweTOIPMJco8C75i3hMFWLn23jKa1hOuKF7hqescX0+3WdwX2k+c65ufO4kUnlW/M\nDmgq+xtQYJEIPMDj3B6EZpxpFIRIVg+jQtrbukyzfe9zEebDCiLDR1dwODYwfn+l\nf4wf8NZHWQKBgB0yOoFfCjJWgTSc9h1W6kD/yeKCl1/Qz7LbCsmrdhyvjfc9jWBQ\nZLvmhmx0FjjWBGXxWIn0zE98fCTeou8jt2qmY0aKyH3Ig7tDgw1ouocUa3YXIqgI\nvquKmY3GSqy5GzHe1/gl/gGcG0jY1KJrHULro/7wXdfCV8872cxcDeVJAoGBAKWg\nXVoYrxMbiPHsj0yPAIg//mSGfeorWmrBTZMM1h+To6OFKoS1kqJeMzINOn+HFanx\nkFTGF/vCW5SQbVXwFZomK3DABRrUPY/5Vg5yyttSN7/Viha2KjuiWHvmmpmxfGVC\nb2mfJ3kl3e/6QYvYCz13cGdujfei3RmNDINpk1IxAoGBAMtcpXjIi7Bhdl85lpu6\n17XGX7IxWlIiqYL1U9ydJ7SeCEXml6kVEWEUOkOraMhQY7Iy7qsPku5tiCW1KdsT\n4oNghCvqS325HyfCRfUNwF2/ZsCayHjvsi30c973TgNBm6ApzDUkJvkaY3iSEMQO\nUbu/n74s0JQS8WZ/DxHMvDLo\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-lyahl@segundaentrega-80f8c.iam.gserviceaccount.com",
        "client_id": "104115461187336654458",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lyahl%40segundaentrega-80f8c.iam.gserviceaccount.com"

    },
    mongoDB:{
cnx:"mongodb+srv://cami:cami0503@cluster0.17xc4.mongodb.net/SegundaE?retryWrites=true&w=majority",

    }
}