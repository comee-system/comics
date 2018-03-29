<?php
//test
//2018.03.29test
//2018.03.29chiba1
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 *
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class RegistsController extends AppController
{

  public function initialize() {
      parent::initialize();

$authid = $this->request->getSession()->read('Auth.Member.id');





   $this->set("authid",$authid);
   $this->viewBuilder()->setLayout('open');
  }
  public function index(){

  }
  public function add() {
// ポストデータがあれば保存をする（保存ボタンが押された場合）
$user = $this->Users->newEntity();
if ($this->request->is('post')) {
    $user = $this->Users->patchEntity($user, $this->request->getData());
    if ($u = $this->Users->save($user)) {
        $code = $u->code;
        $this->makeDirectory($code);

        $this->Flash->success(__('The user has been saved.'));

        return $this->redirect(['action' => 'index']);
    }
    $this->Flash->error(__('The user could not be saved. Please, try again.'));
}
$code = sha1(uniqid(mt_rand(), true));;
$this->set("code",$code);
$this->set(compact('user'));
}
}
