// $(function() {
    
//     if(parseInt($("#goodsId").val()) > 0){
//         //初始化规格图片记录数组
        // var sku_picture_array_str = '{$sku_picture_array_str}';
//         if($.trim(sku_picture_array_str) != "" && $.trim(sku_picture_array_str) != undefined){
//             $sku_goods_picture = eval(sku_picture_array_str);
//         }
//         getGoodsSpecList($("#goodsType").val());
//         if(parseInt($("#goodsType").val()) > 0){
            
//             getGoodsSpecListByAttrId($("#goodsType").val(),function(){
//                 //现在取消商品属性和商品规格的guanxi
//                 //加载属性
//                 $(".js-goods-sku-attribute tr").each(function(){
                    
//                     var value = $(this).children("td:first").attr("data-value");//商品属性名称
//                     var value_name = $(this).children("td:last");//具体的属性值
                    
//                     if(value != undefined && value != ""){
//                         for(var i=0;i<goods_attribute_list.length;i++){
                            
//                             var curr = goods_attribute_list[i];
                            
//                             if(curr['attr_value'] == value){
//                                 switch(value_name.find("input").attr("type")){
//                                     case "text":
//                                         value_name.find("input").val(curr['attr_value_name']);
//                                         break;
//                                     case "radio":
//                                         value_name.find("input").each(function(){
//                                             if($.trim($(this).val()) == $.trim(curr['attr_value_name'])){
//                                                 $(this).attr("checked","checked").parent().addClass("selected");
//                                                 return false;
//                                             }
//                                         })
//                                         break;
//                                     case "checkbox":
//                                         value_name.find("input").each(function(){
//                                             if($.trim($(this).val()) == $.trim(curr['attr_value_name'])){
//                                                 $(this).attr("checked","checked").parent().addClass("selected");
//                                             }
//                                         })
//                                         break;
//                                 }
                                
//                                 if(value_name.find("input").attr("type") != "checkbox"){
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                 });
//             });
//         }else{
//             //没有商品类型，直接加载数据
//             editSkuData();
//         }
//     };
//打开编辑商品规格弹出框
$(".js-open-edit-sku-popup").click(function(){
    $(".edit-sku-popup header h3").text("选择规格");
    $(".edit-sku-popup-mask-layer").fadeIn();
    $(".edit-sku-popup-body").attr("data-visible",1).show().next().removeAttr("data-visible").hide();
    //设置弹出框条件
    $(".edit-sku-popup").fadeIn();
});

//关闭商品规格弹出框
$(".edit-sku-popup>header span,.edit-sku-popup footer .btn-info-outline").click(function(){
    $(".edit-sku-popup-mask-layer").fadeOut();
    $(".edit-sku-popup").fadeOut();
});

//批量修改
$(".volume-set-sku-info a").click(function(){
    var tag = $(this).attr("data-tag");
    var placeholder = $(this).text();
    $(this).parent().children("a").hide();
    $(this).siblings("input,button").show();
    $(this).siblings("input").attr("placeholder",placeholder).attr("data-tag",tag).focus();
});