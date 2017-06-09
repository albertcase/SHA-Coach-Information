 <?php

//Redis config info
define("REDIS_HOST", '127.0.0.1');
define("REDIS_PORT", '6379');

define("BASE_URL", 'http://coach-information.samesamechina.com/');
define("TEMPLATE_ROOT", dirname(__FILE__) . '/../template');

//当前时间
define("NOWTIME", time());
//微信公众号id
define("WX_APPID", 'wx737a6d5fe4d19c89');
//微信商户id
define("WX_BUSID", '1275055201');
//Curio接口
define("CURIO_AUTH_URL", 'http://coach.samesamechina.com/api/wechat/oauth/auth/6d9002e0-e097-468b-a78f-8fe834f5ab96');
define("CURIO_TOKEN", 'zcBpBLWyAFy6xs3e7HeMPL9zWrd7Xy');
define("CURIO_JS_ID", '912e9ed6-7426-49c0-98f2-903fa4bf0d7a');

//Database config info
define("DBHOST", '127.0.0.1');
define("DBUSER", 'root');
define("DBPASS", '1qazxsw2');
define("DBNAME", 'coach_information');

//CardList
define('CARD_LIST', '
    {
        "card1" : "pKCDxjrfCYV_4WKNukqe35fS7UBY",
        "card2" : {
            "600" : "pKCDxjrwNnpwUXTcyqzi2R3NZRCQ",
            "800" : "pKCDxjm3GDEKbK19j_SH7VqFAaag"
        }
        "card3" : "pKCDxjvTwVcUEoeVNihzr_1RRmSI",
        "ffcard" : "pKCDxjvDoy5qyE2C_xnh5t6Rr5aI"
}');







