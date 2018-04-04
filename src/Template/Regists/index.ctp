<<<<<<< HEAD

<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */


?>



<section class="mbr-gallery mbr-slider-carousel cid-qHDNxFnYJ7" id="gallery2-h">

    

    <div class="container">
        <div><!-- Filter -->
            
            <div class="mbr-gallery-row">
                <div class="mbr-gallery-layout-default">
                	<?= $this->Form->create() ?>
					    <div class="row">
					        <div class="col-md-12">
					            <?=$this->Form->input("username",[
					                'type'=>'text',
					                'class'=>'form-control',
					                'label'=>false
					            ])?>
					        </div>
					        <div class="col-md-12 mt10">
					            <?=$this->Form->input("password",[
					                'type'=>'text',
					                'class'=>'form-control',
					                'label'=>false
					            ])?>
					        </div>
					        
					        <div class="col-md-12 mt10">
					            <button href="" type="submit" class="btn btn-primary btn-form ">登録</button>
					        </div>
					    </div>
					<?= $this->Form->end() ?>
                                                
                </div>
            </div>    
        </div>

</section>
=======
<?php
//index.ctp
?>
<div>
    <h1>　</h1>
    <h2>会員登録</h2>
    <div class="container">
        <div><!-- Filter -->

            <div class="mbr-gallery-row">
                <div class="mbr-gallery-layout-default">

                  <div class="users form large-9 medium-8 columns content">
                      <?= $this->Form->create($user) ?>
                      <fieldset>
                          <?php
                              echo $this->Form->control('username');
                              echo $this->Form->control('password');
                              echo $this->Form->control('role');
                          ?>
                          <?=$this->Form->hidden('code'
                                  ,['value'=>$code]);
                          ?>
                      </fieldset>
                      <?= $this->Form->button(__('会員登録')) ?>
                      <?= $this->Form->end() ?>
                </div>
            </div>
        </div>
</div>
>>>>>>> 702f9b93f356d841000a1b991fa2cd2f22850781
