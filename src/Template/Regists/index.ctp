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
