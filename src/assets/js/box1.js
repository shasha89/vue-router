
	

let box1 = (function(){
    let virtual = {};
    virtual.render=function(dom){
        let sHtml = '';
        //sHtml 需要插入的内容 ---你只要相应页面的html拼在这里就可以了
        sHtml+='<div class="ibox-content" >'+
'		                       <table class="table table-hover no-margins" >'+
'	                                    <thead>'+
'	                                        <tr style="background:#F2F2F2">'+
'	                                        	<th>应用名称</th>'+
'	                                            <th>今天访问人数</th>'+
'	                                            <th>今天访问次数</th>'+
'	                                            <th>昨天访问人数</th>'+
'	                                            <th>昨天访问次数</th>'+
'	                                        </tr>'+
'	                                    </thead>'+
'	                                    <tbody>'+
'	                                        <tr>'+
'	                                        	<td>实训考试</td>'+
'	                                            <td>20'+
'	                                            </td>'+
'	                                            <td>50</td>'+
'	                                            <td>20</td>'+
'	                                            <td >50</td>'+
'	                                        </tr>'+
'	                                        <tr>'+
'	                                        	<td>网络课堂</td>'+
'	                                            <td>20'+
'	                                            </td>'+
'	                                            <td>40</td>'+
'	                                            <td>10</td>'+
'	                                            <td >20</td>'+
'	                                        </tr>'+
'	                                    </tbody>'+
'	                                </table>'+
'		                    </div>'

'		                ';

        //sHtml 需要插入的内容 ---你只要相应页面的html拼在上面就可以了
        /* 插入页面*/
        $(dom).html(sHtml);
    }
    return virtual;
})();
/* 调用方法- #id 需要插入的位置--- - -*/
box1.render("#box1");





