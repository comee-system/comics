
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
