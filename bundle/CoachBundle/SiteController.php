<?php
namespace CoachBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction($card) {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_SERVER['REQUEST_URI'];
			if(!empty($parameterAry)>0)
				$url = "/".$parameterAry;
			else
				$url = "/";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}

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
