/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $(".detail").click(function(){
       var _href = $(this).attr("href");
       location.href = _href;
        return false;
    });
    
    jQuery(document).on("change","select[name='magaginetitle_id']",function(){
        alert("sss");
    });
    
});