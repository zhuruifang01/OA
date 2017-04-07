/*费用明细*/
$(function(){
    /*增加一条明细*/
    var addmingxi=$("#addmingxi");
    var addsum=$("#addsum");
    addmingxi.click(function(){
            alert("您确定要增加一条费用明细？");
            if(true){
                $("#addsum").before(
                    '<tr> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td>' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
                    '<td><button style="width:50px;background:cornflowerblue;">确定</button></td>' +
                    '</tr>'
                );
            }
    });
    // 图片预览
    function showInfo(fileid,target){
        var preview = document.querySelector('#'+target);//获取img元素,显示图片位置，根据el表达式('#'+target)
        var file = document.querySelector('#'+fileid).files[0];//根据id拿到文件选择框里面的文件，
        var reader = new FileReader();//创建FileReader接口（把文件放到图片预览框里面）
        reader.onloadend = function () {
            preview.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    /*添加一条发票明细*/
    var fpbutton_addfapiao=$("#fpbutton_addfapiao");
    fpbutton_addfapiao.click(function(){
        alert("请先上传上一张发票！");
        // $("#addfapiao_mingxi").after(
        //      '<tr class="addfapiao"> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."></td> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
        //          '<td class="table_select"> <input type="text" placeholder="请添加..."> </td> ' +
        //          '<td><button style="width:50px;background:orangered;">删除</button></td>'+
        //      '</tr> '
        // );
    });
});

