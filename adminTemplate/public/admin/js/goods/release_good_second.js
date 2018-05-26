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
    addAttrSearchBox();//添加查询条件
    $(".edit-sku-popup").fadeIn();
});

/**
 * 选中规格筛选条件
 */
function addAttrSearchBox(){
    var attr_id = $("#goodsType").val();
    $("#search_attr_id").val(attr_id);
    $("#search_attr_id").selectric();
    getGoodsSpecList(attr_id);
}

/**
 * 根据商品类型id，查询商品规格信息  (单一只查询规格数据)
 */ 
function getGoodsSpecList(attr_id,callBack){
	// 	$.ajax({
	// 		url : __URL(ADMINMAIN+"/goods/getGoodsSpecInfoQuery"),
	// 		type : "post",
	// 		data : { "attr_id" : parseInt(attr_id)},
	// 		success : function(res){
	// 			if(res !=-1){
	// 				var sku_list_html = "";//规格弹出框列表
	// 				var spec_length = res.spec_list.length;
	// 				//商品规格集合(取消商品属性与商品规格的关系)
	// 				if(spec_length>0){
	// 					for(var i=0;i<spec_length;i++){
	// 						var curr_spec = res.spec_list[i];
	// 						sku_list_html += "<li data-spec-id="+ curr_spec.spec_id +" data-spec-value-json=" + JSON.stringify(curr_spec.values) + " data-spec-name='" + curr_spec.spec_name + "' data-show-type='" + curr_spec.show_type + "' data-spec-value-length='" + curr_spec.values.length + "'>" + curr_spec.spec_name + "<span>[" + 0 + "/" + curr_spec.values.length + "]</span></li>";
	// 					}
						
	// 					//规格弹出框代码
	// 					sku_list_html += '<li class="add-sku"><input type="text" class="input-common" placeholder="输入新规格名称"><i class="fa fa-plus"></i><strong>添加新规格</strong></li>';
	// 					$(".js-sku-list-popup").html(sku_list_html);
	// 				}

	// 				editSkuData();
	// 				$(".js-goods-spec-block").show();

	// 			}
	// 		}
	// })
}