<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

    public function indexAction() {
        $UserAPI = new \Lib\UserAPI();
        $user = $UserAPI->userLoad(true);
        if (!$user) {
            $parameterAry = $_GET;
            if(count($parameterAry)>0)
                $url = "/?".http_build_query($parameterAry);
            else
                $url = "/";
            $_SESSION['redirect_url'] = $url;
            $WechatAPI = new \Lib\WechatAPI();
            $WechatAPI->wechatAuthorize();
        }

        $this->render('site/index');
        exit;
    }

    public function cardAction() {
        if(empty($card)){
            $this->render('site/index');
        }else {
            $cardList = json_decode(CARD_LIST, 1);
            if(!array_key_exists($card, $cardList)) {
                die('cardid not known');
            }
            $wechatapi = new \Lib\WechatAPI();
            $list = $wechatapi->cardList($cardList[$card]);

            $this->render('site/card', array('list'=>$list));
        }
        exit;
    }



}
