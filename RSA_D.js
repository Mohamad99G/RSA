const NodeRSA = require('node-rsa');  // تأكد من استيراد المكتبة
const privateKey = `-----BEGIN PRIVATE KEY-----
    MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFiozPfXtrt0Oq
    xFJHOSXnhfTR/Qk01MmqLC2ByEXx1fEt+f5mVlF/usGnBF0Ub5wxTVkbM3ij/AIZ
    8G5Q0DwEwCwDNgpQtYchk81+AwFu5fRc3NW3JtBc/E/SxW3kGJQiYNo3cps17nKQ
    kLC3m3ooqCwxHNJkyhB6v1AK3sFlbrLbRQxnrXDDf6WqZJWEKr03IWxD+xKgDfFV
    7iMtsJjMjnKqhf88MnsaJLIvGELnhPgDYtisF1BNokFurOVTT9AjtGITzD3NbRQ8
    3OmWWd+ro0aWk/ax7/uE59S//38puNkWHLfV50kj+gv/bIlZ9kFRObLw3jBDLIZf
    EU+oLmgfAgMBAAECggEADGpb1UKmuitnhlkWbsGJv1Zs/7GunXJuRlLGfWyv8LYo
    lWIr+hScxLFhMHUWwI0PPQ4Gdq4ye+P/4c95r3yW+Rl26rC/zzjJiHO4q53WvjiX
    tipvCDbZS67T+YRNFtPwo4SA0pFSbf5RlwJxCOktsVZ4iJGuK4WDqaNSjYxYjV5e
    fLaZNadXG9pJq6f/HtxcDpb+Jcr2Dr57Ne/beXLlI94cDuuq6Zrf+4sDEMKQLd44
    TqoCeZjyIAwFPENzxwt6p6s07PoEU76XQn1KD2tLgQl+lw9LvMsxIWNumjTF3PK0
    eE4PDyaU+ahlE0xpBJwGYPo4ASGPiPqt11b6SGuwMQKBgQDiXIyQvGS2Atwx5qS/
    r5tGerFedU3LFXWARezaC9VK4Xj4Z3Iph/1Tcz+yN1WK3/beZimqdBhC4B9MrjLm
    FcHI3o95mL41qq951LERqJeEd3W1kBIqVimb9dWoTYjxPD1xXqcQ7r46PC75Y2nA
    XjM98PCxO0CxkFpK5jZOFci71wKBgQDfZ/fR21rUiH3RfemNbunmDTseGq5IffIB
    ClhVa0vSv++CB2320EA+T6KFywj0CmOj2F8Vgc44EFaQDLFu5RkUMDU3hn6Bl/Zo
    rl4m0QX7ONbjlvP7dqDmo5um+CBop4bgiZ8VhMwyYPb3x3yE7UclnwVDYZ00dOfP
    VALeTrds+QKBgQDXQc9iK+VRuHKQ+ZYduu7cHPziqIZr42Izs0tDJxGT/co93pGP
    sQRUATrHTRuJzuVCJMDmmTQhFGRvVRCOAI6haBPkPD5VZpUsM/iWpE5B6CAFopXD
    sOAssaCWRfU+Al0jnDEfRwma83RwL/t2tZ3g/2jEAWbJ9E4I/9cQdmLHTQKBgQCh
    xia1Z1NZrdD2P2g9S4DCXvhdL1LfGZyB1lzq1fydCvHDxd+CJ4Et3frBSaodFdzb
    S5Zm+406GdKlExv1Qp6reNFAePromwMLAKEbGKdtKNarDad1g4y2FuliujC1uAI6
    XE2/hl9bZ83O1Ty9ARlRC9sC1Q/CaZlnD93X30aB+QKBgEXxymNIvkT7k9QKMT5G
    2zh1qabq1eaR8ZmgBfZW6UQ7V6b9IhptL5ZwSOK1BKNoFRQ9C4OsH3UD+Vsx6nUW
    XT/dcozfIJtVI7wzABNjivB0hzJOigXusGjP/DXgea9SSy4rsJ73lBfF3KJ7eaVY
    Q91AgXZua7SkBqSX0hJvo/FU
    -----END PRIVATE KEY-----`;

const recipientPrivateKey = new NodeRSA(privateKey, 'pkcs8-private');


const encryptedMessage = 'e5s1ju0OCrApYYquCdGGfDJ+sbqBJpbquJQglRUzA08L202CW1ChUyVKdHV3NBgWg4Pp25eTu5gp2vTYmy2johC26X1qLqLOA6PgI/NTBVlEOIlbgt+w+Cu5209aPy+NNuatjDZJuMDVig81NfgXEnUPSATMUEoni8Ku55QIUUU=';  // الرسالة المشفرة

const decryptedMessage = recipientPrivateKey.decrypt(encryptedMessage, 'utf8');
console.log("Decrypted Message:", decryptedMessage);