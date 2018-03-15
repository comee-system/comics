/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//-------------------------------------
//
//タイトル画像アップロード 
//
//-------------------------------------
$(function(){
    var tobj = $("#titledrop");
    
    tobj.on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
        
        $(".loadingimg").show();
        $(this).css('border', '2px solid #0B85A1');
    });
    tobj.on('dragover', function (e)
    {
         e.stopPropagation();
         e.preventDefault();
    });
    tobj.on('drop', function (e)
    {
        
         $(this).css('border', '2px dotted #0B85A1');
         e.preventDefault();
         var files = e.originalEvent.dataTransfer.files;
         handleFileUploadTitle(files,tobj);
    });
    $(document).on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e)
    {
      e.stopPropagation();
      e.preventDefault();
      $(".loadingimg").hide();
      tobj.css('border', '2px dotted #0B85A1');
    });
    $(document).on('drop', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
});

var _length = 0;
function handleFileUploadTitle(files,obj){
    _length = files.length;
    tsendFileToServer(files[0],1);
    
}
function tsendFileToServer(f,_no){
        var fd = new FormData();
        var _titleid = $("#titleid").val();
         fd.append('image', f);
         $.ajax({
                type:'POST',
                url:"/members/titlefileupload/"+_titleid,
                data:fd,
                contentType:false,
                processData: false,
                cache: false,
                success:function(data){
                    $(".loadingimg").hide();
                    var _img = "#titledrop";
                    $(_img).html("<img src='"+data[ 'filepath' ]+"' style='height:200px;' />");
                    $("#filename").val(data[ 'filename' ]);
                }
         });

}



//-------------------------------------
//
//内容画像アップロード 
//
//------------------------------------
var _length = 0;
$(function(){
    var obj = $("#drop");
    obj.on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
        $(".loadingimg").show();
        $(this).css('border', '2px solid #0B85A1');
    });
    obj.on('dragover', function (e)
    {
       
         e.stopPropagation();
         e.preventDefault();
    });
    obj.on('drop', function (e)
    {
         $(this).css('border', '2px dotted #0B85A1');
         e.preventDefault();
         var files = e.originalEvent.dataTransfer.files;
         var _li = "";
         for(var i=0;i<files.length;i++){
              _li += "<input type='hidden'  name='image["+i+"]'  id='image-"+i+"' value='' />";

          }
          
          $("#hidden").html(_li);
         //We need to send dropped files to Server
        handleFileUpload(files,obj);
    });
    
    $(document).on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e)
    {
      e.stopPropagation();
      e.preventDefault();
      obj.css('border', '2px dotted #0B85A1');
    });
    $(document).on('drop', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });

});

function handleFileUpload(files,obj){
    _length = files.length;
    $("#drop").html("");
    for (var i = 0; i < files.length; i++)
    {
        sendFileToServer(files[i],i);
    }
}

function sendFileToServer(f,_no){
        var fd = new FormData();
        var _titleid = $("#titleid").val();
        var _groupid = $("#groupid").val();
         fd.append('image', f);
         $.ajax({
                type:'POST',
                url:"/members/fileupload/"+_titleid+"/"+_groupid,
                data:fd,
                contentType:false,
                processData: false,
                cache: false,
                success:function(data){
                    console.log(data);
                    console.log("LENGTH=>"+_length);
                    console.log("No=>"+_no);
                    if(_length-1 <= _no){
                        $(".loadingimg").hide();
                        $("#drop p").hide();
                        
                    }
                    var _img = "#image-"+_no;
                    $(_img).val(data['filename']);
                    var _imgtag = "<img src='"+data[ 'filepath' ]+"' height=200 class='pd10' />";
                    $("#drop").append(_imgtag);
                    $("#drop img").css("pointer-events","none");
                }
         });

}





//-------------------------------------
//
//内容画像アップロード 個別
//
//------------------------------------
var _length = 0;
var _id = [];
$(function(){
    var obj = $(".sort-elements");
    obj.on('dragenter', function (e)
    {
        _id = $(this).attr('id').split("-");

        e.stopPropagation();
        e.preventDefault();
        $("#loading-"+_id[1]).show();
        $(this).css('border', '2px solid #0B85A1');
    });
    obj.on('dragover', function (e)
    {
       
         e.stopPropagation();
         e.preventDefault();
    });
    obj.on('drop', function (e)
    {
         $(this).css('border', '2px dotted #0B85A1');
         e.preventDefault();
         var files = e.originalEvent.dataTransfer.files;

         //We need to send dropped files to Server
        elementhandleFileUpload(files,obj);
    });
    
    $(document).on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e)
    {
      e.stopPropagation();
      e.preventDefault();
      obj.css('border', '2px dotted #0B85A1');
    });
    $(document).on('drop', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });

});

function elementhandleFileUpload(files,obj){
    _length = files.length;
    i=0;
    
    elementsendFileToServer(files[i],_id[1]);
    
}

function elementsendFileToServer(f,_no){
        var fd = new FormData();
        var _titleid = $("#titleid").val();
        var _groupid = $("#groupid").val();
         fd.append('image', f);
         $.ajax({
                type:'POST',
                url:"/members/fileupload/"+_titleid+"/"+_groupid,
                data:fd,
                contentType:false,
                processData: false,
                cache: false,
                success:function(data){
                    console.log(data);
                    
                    var _img = "#imagedata-"+_no;
                    
                    $(_img).attr("src",data[ 'filepath' ]);
                    var _hidden = "#datafilename-"+_no;
                    $(_hidden).val(data['filename']);
                    
                    $("#loading-"+_no).hide();
                }
         });

}
