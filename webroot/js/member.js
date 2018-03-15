/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $(document).on("change","#magaginetitle-id",function(e){
        $(this).changeManageTitle();
    });
    
    
    $(document).on("click",".delete",function(e){
        var _id = $(this).attr("id").split("-");
        if(confirm("データの削除を行います。削除したデータは戻せません。")){
            location.href="/members/deletetopdata/"+_id[1];
            return true;
        }
        return false;
    });
    $(document).on("click",".edit",function(e){
        var _id = $(this).attr("id").split("-");
        location.href = "/members/edit/"+_id[1];
        return false;
    });
    
    $(document).on("click",".titleedit",function(e){
        var _id = $(this).attr("id").split("-");
        location.href = "/members/titleedit/"+_id[1];
        return false;
    });
    $(document).on("click",".titleEditPost",function(e){
        if(confirm("タイトルの変更を行います。よろしいですか？")){
            return true;
        }
        return false;
    });
    
    $(document).on("click",".groupedit",function(e){
        var _id = $(this).attr("id").split("-");
        location.href = "/members/groupedit/"+_id[1];
        return false;
    });
    
    $(document).on("click",".titlestatus",function(e){
        $(this).changeTitleStatus();
    });
    
    $(document).on("click",".groupstatus",function(e){
        $(this).changeGroupStatus();
    });
    
    
});
$.fn.changeManageTitle = function(){
    var _magaginetitle_id = $("#magaginetitle-id").val();
    var _data = {
        "magaginetitle_id":_magaginetitle_id
    };
     $.ajax({
            type:'POST',
            url:"/members/getTitleData/",
            data:_data,
            success:function(data){
                $("#changeCategoryName").html(data[0][ 'category' ][ 'name' ]);
                $("#changeNote").html(data[0]['note']);
            }
     });
};
$.fn.changeGroupStatus = function(){
    var _id = $(this).attr("id").split("-");
    var _status = 1;
    if(_id[0] == "hide"){
        _status = 0;
    }
    var _data = {
        'status':_status
    };
     $.ajax({
            type:'POST',
            url:"/members/changeGroupStatus/"+_id[1],
            data:_data,
            success:function(data){
               
                
            }
     });
    
};

$.fn.changeTitleStatus = function(){
    var _id = $(this).attr("id").split("-");
    var _status = 1;
    if(_id[0] == "hide"){
        _status = 0;
    }
    var _data = {
        'status':_status
    };
     $.ajax({
            type:'POST',
            url:"/members/changeTitleStatus/"+_id[1],
            data:_data,
            success:function(data){
               
                
            }
     });
    
};