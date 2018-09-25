<template>
  <main-layout>
    <!--<p>New page</p>-->
    		<div class="zTreeDemoBackground left" style='width:16%;padding-top:10px;'>
					<div class='search-box' >
						<a href='javascript:;' class='left'>
							<i class="fa fa-search " style='color: #AAA;position:absolute;left: 17px;margin-top: 7px;'></i>
						</a>
						<input type="text" id='key' class="empty" placeholder='搜索成员、部门'  style='margin-left:10px;width:85%;border:1px solid #B4BEC8;border-radius:2px;text-align:left;padding: 3px 4px 3px;line-height:12px;padding-left:8px' />
						<input type="radio" id="name" name="keyType" class="radio first hide" checked />												
						<input type="radio" id="getNodesByParamFuzzy" name="funType" class="radio hide" checked />
						<i class='ace-icon glyphicon glyphicon-plus tree-add' style='font-weight:bold;margin-right:10px;float:right;cursor: pointer;color: #AAA;margin-top:5px;'></i>
					</div>
					<ul id="treeDemo" class="ztree" ></ul>
				</div>
				<div class="left main-right" style='width:84%;overflow-y: auto;'>
					
					<div class='outer-box' style='padding:10px'>
						<p style='overflow: hidden;'>
							<span class='left' style='font-size:16px;'>云南猎鹰科技有限公司(19人)</span>
							<span style='float:right;margin-top:4px;color:#0C4C7F'><a style='color:#0C4C7F;margin-right:5px;' href='javascript:;'>在职在岗</a>|<a href='javascript:;' style='color:#0C4C7F;margin-left:5px;'>离职离岗</a></span>
						</p>
						<!--主页面开始-->
						<div class='inner-box' >
							<div class='' style='width:100%;padding:8px 0;background-color: #DFE9F5;'>
								<button  class='btn btn-xs person-add' style='margin-left:10px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									添加成员
								</button>
									<button  class='btn btn-xs daochu' id='daochu1' style='position:relative;margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
										批量导入/导出
										<img class='' src='../assets/dropdown_arrow_down1.png' style='vertical-align:1px;'/>
										<ul class='dropdown-menu1'  style='min-width:80px;'>
											<li ><a href='javascript:;'>文件导入</a></li>
											<li ><a href='javascript:;'>导入通讯录</a></li>
											<li ><a href='javascript:;'>导出通讯录</a></li>
										</ul>
									</button>
								<button  class='btn btn-xs shezhi' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									设置所在部门
								</button>
								<button  class='btn btn-xs delete' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									删除
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs huishou' style='margin-left:1px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									回收站
								</button>
							</div>
							<table id="sample-table-1" class="table table-striped table-bordered table-hover" >
								<thead>
			                        <tr>
			                            <th class="noclick center " > 
			                            	<div>
			                            		<label class="position-relative" >
				                                    <input type="checkbox" />
				                                    <span class="lbl"></span>
				                                </label> 
			                            	</div>
			                            </th>
			                            <th><div>姓名</div></th>
			                            <th><div>岗位</div></th>
			                            <th><div>部门</div></th>
			                            <th><div>手机</div></th>
			                            <th><div>邮箱</div></th>
			                            <th class='noclick' style='width:28px'>
			                            	<div class='btn-group' id='btn_dropdown'>
												<img src='../assets/zTreeStyle/img/down.png' class='btn_dropdown' style='margin-left:3px;cursor: pointer;vertical-align: -3px;'>
												<ul class='dropdown-menu dropdown-danger' style='top:21px;right:-8px;z-index:1001;min-width:80px;'>
													<li class='menu-title'>筛选</li>
													<li class='menu-list menu-selected'><a href='javascript:;' ><span >√</span><span >全部</span></a></li>
													<li class='menu-list menu-unselected'><a href='javascript:;' ><span >√</span><span >未加入企业</span></a></li>
													<li class='menu-list menu-unselected'><a href='javascript:;' ><span >√</span><span >已禁用</span></a></li>
													<li class='menu-list menu-unselected'><a href='javascript:;' ><span >√</span><span >已退出</span></a></li>
													<li class='menu-list menu-unselected'><a href='javascript:;' ><span >√</span><span >可添加外部联系人</span></a></li>
													<li style="border-bottom:1px solid #E4E6E9;padding-bottom:8px;"></li>
													<li class='menu-title' style='margin-top:7px;'>列表设置</li>
													<li class='menu-setup'><a href='javascript:;' ><span ></span>列表显示字段</a></li>
													<li class='menu-setup'><a href='javascript:;' ><span ></span>每页显示成员数</a></li>
												</ul>
											</div>
			                            </th>
			                        </tr>
			                    </thead>
			                    <tbody id="tableContainer">
			                        <tr>
			                           <td class="noclick center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >张丽</td>                          
			                            <td>c++工程师</td>
			                            <td>财务部</td>                           
			                            <td>13457572321</td>                           
			                            <td >642322@qq.com</td>                           
										<td class='noclick'>
											<div class='btn-group' id='btn_dropdown'>
												<img class='btn_dropdown  hide' style='position:absolute;top:-8px;margin-left:5px;cursor: pointer;' src='../assets/zTreeStyle/img/table-more.png'/>
												<ul class='dropdown-menu dropdown-danger' style='min-width:80px;top:7px;right:-15px;'>
													<li class='edict1'><a href='javascript:;' >编辑</a></li>
													<li ><a href='javascript:;' >置顶</a></li>
												</ul>
											</div>
										</td>
			                        </tr>
			                        <tr>
			                           <td class="noclick center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >刘慧</td>                          
			                            <td>java工程师</td>
			                            <td>研发部</td>                           
			                            <td>15434223263</td>                           
			                            <td >123134@qq.com</td>                           
			                            <td class='noclick'>
											<div class='btn-group' id='btn_dropdown'>
												<img class='btn_dropdown  hide' style='position:absolute;top:-8px;margin-left:5px;cursor: pointer;' src='../assets/zTreeStyle/img/table-more.png'/>
												<ul class='dropdown-menu dropdown-danger' style='min-width:80px;top:7px;right:-15px;'>
													<li class='edict1'><a href='javascript:;' >编辑</a></li>
													<li ><a href='javascript:;' >置顶</a></li>
												</ul>
											</div>
										</td>
			                        </tr>
			                        <tr>
			                           <td class="noclick center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >李琳</td>                          
			                            <td>java工程师</td>
			                            <td>研发部</td>                           
			                            <td>13457572321</td>                           
			                            <td >325771344@qq.com</td>                           
			                           <td class='noclick'>
											<div class='btn-group' id='btn_dropdown'>
												<img class='btn_dropdown  hide' style='position:absolute;top:-8px;margin-left:5px;cursor: pointer;' src='../assets/zTreeStyle/img/table-more.png'/>
												<ul class='dropdown-menu dropdown-danger' style='min-width:80px;top:7px;right:-15px;'>
													<li class='edict1'><a href='javascript:;' >编辑</a></li>
													<li ><a href='javascript:;' >置顶</a></li>
												</ul>
											</div>
										</td>
			                        </tr><tr>
			                           <td class="noclick center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >张进</td>                          
			                            <td>销售</td>
			                            <td>销售部</td>                           
			                            <td>13457576552</td>                           
			                            <td >13553322213@qq.com</td>                           
			                           <td class='noclick'> 
											<div class='btn-group' id='btn_dropdown'>
												<img class='btn_dropdown  hide' style='position:absolute;top:-8px;margin-left:5px;cursor: pointer;' src='../assets/zTreeStyle/img/table-more.png'/>
												<ul class='dropdown-menu dropdown-danger' style='min-width:80px;top:7px;right:-15px;'>
													<li class='edict1'><a href='javascript:;' >编辑</a></li>
													<li ><a href='javascript:;' >置顶</a></li>
												</ul>
											</div>
										</td>
			                        </tr><tr>
			                           <td class="noclick center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >王飞</td>                          
			                            <td>UI工程师</td>
			                            <td>研发部</td>                           
			                            <td>13453248739</td>                           
			                            <td >32423421@qq.com</td>                           
			                            <td class='noclick'>
											<div class='btn-group' id='btn_dropdown'>
												<img class='btn_dropdown  hide' style='position:absolute;top:-8px; margin-left:5px;cursor: pointer;' src='../assets/zTreeStyle/img/table-more.png'/>
												<ul class='dropdown-menu dropdown-danger' style='min-width:80px;top:7px;right:-15px;'>
													<li class='edict1'><a href='javascript:;' >编辑</a></li>
													<li ><a href='javascript:;' >置顶</a></li>
												</ul>
											</div>
										</td></tr>
			                    </tbody>
							</table>
							
							<div class='' style='width:100%;padding:8px 0;background-color: #DFE9F5;border-bottom: 1px solid #bdc9d6;'>
								<button  class='btn btn-xs person-add' style='margin-left:10px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									添加成员
								</button>
								<button  class='btn btn-xs daochu' id='daochu2' style='position:relative;margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
										批量导入/导出
										<img class='' src='../assets/dropdown_arrow_down1.png' style='vertical-align:1px;'/>
										<ul class='dropdown-menu1'  style='min-width:80px;'>
											<li ><a href='javascript:;'>文件导入</a></li>
											<li ><a href='javascript:;'>导入通讯录</a></li>
											<li ><a href='javascript:;'>导出通讯录</a></li>
										</ul>
									</button>
								<button  class='btn btn-xs shezhi' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									设置所在部门
								</button>
								<button  class='btn btn-xs delete' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									删除
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs huishou' style='margin-left:1px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									回收站
								</button>
							</div>
						</div>	
						<!--主页面结束-->
						<!--回收站开始-->
						<div class='inner-box hide' >
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;border-bottom: 1px solid #bdc9d6;'>
								<button  class='btn btn-xs delete' style='margin-left:10px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									批量删除
								</button>
								<button  class='btn btn-xs ' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									恢复
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs fanhui' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									返回
								</button>
							</div>
							<table id="sample-table-2" class="table table-striped table-bordered table-hover">
								<thead>
                    <tr>
                        <th class="center th_first" style="width:40px"> 
                        	<div>
                        		<label class="position-relative">
                                    <input type="checkbox" />
                                    <span class="lbl"></span>
                                </label>
                            </div>
                        </th>
                       <!-- <th class='th_first ho'>序号</th>-->
                        <th><div>姓名</div></th>
                        <th><div>职务</div></th>
                        <th><div>部门</div></th>
                        <th><div>手机</div></th>
                        <th><div>邮箱</div></th>
                        <!--<th class='ho'><img src='../../assets/zTreeStyle/img/down.png'></th>-->
                    </tr>
                </thead>
			                    <tbody id="tableContainer">
			                        <tr>
			                           <td class="center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >张丽</td>                          
			                            <td>c++工程师</td>
			                            <td>财务部</td>                           
			                            <td>13457572321</td>                           
			                            <td >642322@qq.com</td>                           
			                            
			                        </tr>
			                        <tr>
			                           <td class="center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox"/>
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >刘慧</td>                          
			                            <td>java工程师</td>
			                            <td>研发部</td>                           
			                            <td>15434223263</td>                           
			                            <td >123134@qq.com</td>                           
			                            
			                        </tr>
			                        <tr>
			                           <td class="center th_first" > 
			                            	<label class="position-relative">
			                                    <input type="checkbox" />
			                                    <span class="lbl"></span>
			                                </label> 
			                            </td>
			                           	<td >王飞</td>                          
			                            <td>UI工程师</td>
			                            <td>研发部</td>                           
			                            <td>13453248739</td>                           
			                            <td >32423421@qq.com</td>                           
			                        </tr>    
			                    </tbody>
							</table>
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;border-bottom: 1px solid #bdc9d6;'>
								<button  class='btn btn-xs delete' style='margin-left:10px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									批量删除
								</button>
								<button  class='btn btn-xs ' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									恢复
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs fanhui' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									返回
								</button>
							</div>
						</div>	
						<!--回收站结束-->
						
					</div>
					
  
  				<!--添加成员开始-->
					<div class='outer-box hide' style='padding:10px'>
						<p style='overflow: hidden;'>
							<span class='left' style='font-size:16px;'>添加成员</span>
						</p>
						<div class='inner-box' >
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;'>
								<button class='' style='vertical-align:-2px;margin-left:10px;border: none;padding: 3px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>保存并继续添加</button>
								
								<button  class='btn btn-xs ' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									保存
								</button>
								<button  class='btn btn-xs person-quxiao' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>
								
							</div>
							<div style='padding: 10px'>
								<img src='../assets/person.png' class='left' style='margin:20px 20px 20px 10px;'/>
								<div class='left'>
									<input type="text" placeholder="姓名" style='padding-left:5px;margin:23px 10px 10px 0;border:1px solid #c7c7c7;width:296px;height:25px;'/><br>
									<input type="text" placeholder="英文名" style='padding-left:5px;margin:7px 10px 10px 0;border:1px solid #c7c7c7;width:296px;height:25px;'/>
								</div>
								<div style='clear:both;color:#787878'>
									<span style='color:red;margin-left:20px'>*</span>
									账号<img src='../assets/ID.png' style='margin:4px 7px;vertical-align:-6px;'/>:
									<input type="text" placeholder="成员唯一标识，设定以后不支持修改" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/>
								</div>
								<div style='margin:10px 52px;'>
									<span style='color:#787878'>性别：</span>
									<span><input name='sex' type='radio' checked style='vertical-align: -2px;margin-right:4px;'/>男</span>
									<span><input name='sex' type='radio' style='vertical-align: -2px;margin:0 4px 0 13px;'/>女</span>
								</div>
								<div style='padding:16px 52px ;width:100%;margin-top:20px;border-top: 1px dashed #E4E6E9;'>
									<div style="padding:7px 0px">
										<span style='color:#787878'>手机：</span>
										<select style='vertical-align: top;padding: 3px 2px;height:25px;width:95px;border-radius: 2px;font-size:10px;'>
											<option>+86</option>
											<option>也门+967</option>
											<option>赞比亚+236</option>
										</select>
										<input type="text" placeholder="成员通过验证该手机后可加入企业" style='padding-left:5px;margin-left:-5px;border:1px solid #c7c7c7;width:203px;height:25px;'/>
									</div>
									<div style='color:#787878'>座机：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
									<div style='color:#787878'>邮箱：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
								</div>
								<div style='padding:16px 52px ;width:100%;border-top: 1px dashed #E4E6E9;border-bottom: 1px dashed #E4E6E9;'>
									<span style='color:#787878'><span style='color:red;margin-right:4px;margin-left:-9px;'>*</span>部门：</span>
									<span style='position:relative;' class='xuanze-left'>
										<input placeholder="云南猎鹰科技有限公司" style='padding-left:21px;margin:7px 10px 10px 0px;border:1px solid #c7c7c7;width:203px;height:25px;'/>
										<img style='position:absolute;left:5px;top:3px;' src='../assets/zTreeStyle/img/doc.png'/>
										<img style='position:absolute;right:17px;top:3px;cursor: pointer;' src='../assets/quxiao.png' class='fanwei-quxiao'/>
									</span>
									<span style='color:#0C4C7F;cursor: pointer;' class='xuanze'>修改</span>
									<!--<div style='color:#787878;margin:10px 0'>标签：<span style='color:#0C4C7F;margin-left:5px;'>修改</span></div>-->
									<div style='color:#787878'>职务：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
									<div style='margin:10px 0;'>
										<span style='color:#787878'>身份：</span>
										<span><input name='shenfens' type='radio' checked style='vertical-align: -2px;margin-right:4px;'/>普通成员</span>
										<span><input name='shenfens' type='radio' style='vertical-align: -2px;margin:0 4px 0 13px;'/>上级</span>
									</div>
								</div>
							</div>
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;'>
								<button class='' style='vertical-align:-2px;margin-left:10px;border: none;padding: 3px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>保存并继续添加</button>
								
								<button  class='btn btn-xs ' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									保存
								</button>
								<button  class='btn btn-xs person-quxiao' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>						
							</div>
						</div>											
					</div>
					<!--添加成员结束-->
					
					<!--成员详情开始-->
					<div class='outer-box hide' style='padding:10px'>
						<p style='overflow: hidden;'>
							<span class='left' style='font-size:16px;'>成员详情</span>
						</p>
						<div class='inner-box' >
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;border-bottom: 1px solid #bdc9d6;'>
								<button  class='btn btn-xs fanhui1' style='margin-left:10px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									<img src='../assets/fanhui.png' style='margin-right:5px;vertical-align: 0px;'/>返回
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs edict' style='padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									编辑
								</button>
								<button  class='btn btn-xs' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									置顶
								</button>
								<span style='margin-left:5px;border-left: 1px solid #B9C8D5;height: 26px;display: inline-block;margin-right: 6px;vertical-align: top;'></span>
								<button  class='btn btn-xs ' style='padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									禁用
								</button>
								<button  class='btn btn-xs  delete1' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									删除
								</button>												
							</div>
							<div style='padding:30px 10px'>
								<img src='../assets/person1.png' class='left' style='margin:0px 20px 20px 3px;'/>
								<div class='left' style='margin-top:2px;'>
									<h4 style='margin: 3px 0'>张三</h4>
									<div style='color:#888;'>账号：Zhangshan</div>
								</div>
								
								<div style='clear:both;padding:16px 38px ;width:100%;margin-top:20px;border-top: 1px dashed #E4E6E9;'>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>手机：</span><span>17323752321</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>座机：</span><span>未设置</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>邮箱：</span><span>325435@qq.com</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>微信：</span><span>凡飞</span></div>
								</div>
								<div style='padding:16px 38px ;width:100%;border-top: 1px dashed #E4E6E9;'>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>部门：</span><span style='color:#0C4C7F'>云南猎鹰科技有限公司</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>标签：</span><span>未设置</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>职务：</span><span>未设置</span></div>
									<div style='padding:7px 0'><span style='color:#787878;margin-right:5px;'>身份：</span><span>上级</span></div>
								</div>
							</div>
						</div>							
					</div>
					<!--成员详情结束-->
					<!--编辑成员开始-->
					<div class='outer-box hide' style='padding:10px'>
						<p style='overflow: hidden;'>
							<span class='left' style='font-size:16px;'>编辑成员信息</span>
						</p>
						<div class='inner-box' >
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;'>												
								<button class='' style='vertical-align:-2px;margin-left:10px;border: none;padding: 3px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>保存</button>
								<button  class='btn btn-xs edict-quxiao' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>
								<button  class='btn btn-xs edict-quxiao1 hide' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>
							</div>
							<div style='padding: 10px'>
								<img src='../assets/person.png' class='left' style='margin:20px 20px 20px 10px;'/>
								<div class='left'>
									<input type="text" placeholder="张三" style='padding-left:5px;margin:23px 10px 10px 0;border:1px solid #c7c7c7;width:296px;height:25px;'/><br>
									<input type="text" placeholder="英文名" style='padding-left:5px;margin:7px 10px 10px 0;border:1px solid #c7c7c7;width:296px;height:25px;'/>
								</div>
								<div style='clear:both;color:#787878'>
									<span style='color:red;margin-left:20px'>*</span>
									账号<img src='../assets/ID.png' style='margin:4px 7px;vertical-align:-6px;'/>:
									<input type="text" placeholder="katharine" style='padding-left:5px;margin:7px 10px 10px 0;border:1px solid #c7c7c7;width:296px;height:25px;'/>
									<span style='color:#888'>此帐号由系统生成，只允许修改一次</span>
								</div>
								<div style='margin:10px 52px;'>
									<span style='color:#787878'>性别：</span>
									<span><input name='sex' type='radio' checked style='vertical-align: -2px;margin-right:4px;'/>男</span>
									<span><input name='sex' type='radio' style='vertical-align: -2px;margin:0 4px 0 13px;'/>女</span>
								</div>
								<div style='padding:16px 52px ;width:100%;margin-top:20px;border-top: 1px dashed #E4E6E9;'>
									<div style='margin:10px 0'><span style='color:#787878'>手机：</span>
									18600025074（该成员已登录过企业微信，需由成员自行修改手机号）
									</div>
									<div style='color:#787878'>座机：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
									<div style='color:#787878'>邮箱：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
								</div>
								<div style='padding:16px 52px ;width:100%;border-top: 1px dashed #E4E6E9;border-bottom: 1px dashed #E4E6E9;'>
									<span style='color:#787878'><span style='color:red;margin-right:4px;margin-left:-9px;'>*</span>部门：</span>
									<span style='position:relative;' class='xuanze-left'>
										<input placeholder="云南猎鹰科技有限公司" style='padding-left:21px;margin:7px 10px 10px 0px;border:1px solid #c7c7c7;width:203px;height:25px;'/>
										<img style='position:absolute;left:5px;top:3px;' src='../assets/zTreeStyle/img/doc.png'/>
										<img style='position:absolute;right:17px;top:3px;cursor: pointer;' src='../assets/quxiao.png' class='fanwei-quxiao'/>
									</span>
									<span style='color:#0C4C7F;cursor: pointer;' class='xuanze'>修改</span>
									<div style='color:#787878;margin:10px 0'>标签：<span style='color:#0C4C7F;margin-left:5px;'>修改</span></div>
									<div style='color:#787878'>职务：<input type="text" placeholder="" style='padding-left:5px;margin:7px 10px 10px 5px;border:1px solid #c7c7c7;width:296px;height:25px;'/></div>
									<div style='margin:10px 0;'>
										<span style='color:#787878'>身份：</span>
										<span><input name='shenfen' type='radio' checked style='vertical-align: -2px;margin-right:4px;'/>普通成员</span>
										<span><input name='shenfen' type='radio' style='vertical-align: -2px;margin:0 4px 0 13px;'/>上级</span>
									</div>
								</div>
							</div>
							<div class='btn-group' style='width:100%;padding:8px 0;background-color: #DFE9F5;'>
								<button class='' style='vertical-align:-2px;margin-left:10px;border: none;padding: 3px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>保存</button>
								<button  class='btn btn-xs edict-quxiao' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>
								<button  class='btn btn-xs edict-quxiao1 hide' style='margin-left:5px;padding: 3px 12px;text-shadow: none!important;border-radius: 2px;border:1px solid #AAA;background-color:#fff!important;color:#222!important'>
									取消
								</button>
							</div>
						</div>											
					</div>
					<!--编辑成员结束-->
				</div>
				<div class="tankuang">
			未选择任何成员！
		</div>
		<!--删除-->
				<div class='delete_content' style='display:none;z-index:20;background: rgba(0,0,0,.4);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);position:fixed;top:0;right:0;width:100%;height:100%;'>
					<div style='position:absolute;width:400px;height:200px;position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-120px;'>
						<div style='background: #335884;color:#fff;height:20%;line-height:40px;padding-left:10px'>删除成员
							<i class='ace-icon glyphicon glyphicon-remove close_icon ' style='float:right;cursor:pointer;margin:13px 10px 0 0 '></i>
						</div>
						<div style='background: #fff;height:60%;'>
							<div style='padding-top:50px;margin-left:58px;'><img src='../assets/delelte.png' style='margin-top:-9px;margin-right:5px;'/>删除后，成员的信息将完全被清除。</div>
						</div>
						<div class='popup-footer' style='background: #F8F8F8;border-top:1px solid #ccc;height:24%;'>
							<div style='float:right;margin-top:8px;margin-right:10px'>
								<button class='save1' style='margin-right:5px;border: none;padding: 5px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>确定</button>
								<button class='quxiao'>取消</button>
							</div>
						</div>
					</div>
				
				</div>
				
				<!--选择范围-->
				<div class='scope-modal' style='display:none;z-index:20;background: rgba(0,0,0,.4);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);position:fixed;top:0;right:0;width:100%;height:100%;'>
					<div style='position:absolute;width:600px;height:500px;position:absolute;left:50%;top:50%;margin-left:-300px;margin-top:-250px;'>
						<div style='background: #335884;color:#fff;height:8%;line-height:40px;padding-left:10px'>选择范围
							<i class='ace-icon glyphicon glyphicon-remove close_icon ' style='float:right;cursor:pointer;margin:13px 10px 0 0 '></i>
						</div>
						<div style='background: #fff;height:60%;padding:20px 30px'>
							<div class='left' style='height:100%;width:60%;border-right:1px solid #E4E6E9;'>
								<div >
									<a href='javascript:;' class='left'>
										<i class="fa fa-search " style='color: #AAA;position:absolute;left: 37px;margin-top: 7px;'></i>
									</a>
									<input type="text" id='search' placeholder='搜索部门'  style='font-size:10px;width:95%;border:1px solid #B4BEC8;border-radius:2px!important;text-align:left;padding:4px;line-height:12px;padding-left:22px' />
									<ul id="treeDemo1" class="ztree" style='margin-top:10px'></ul>
								</div>
							</div>
							<div class='left fanwei-right' style='height:100%;width:40%;'>
								<span style='margin-left:20px;color:#787878'>已选择的部门</span>
							</div>
						</div>
						<div class='popup-footer' style='background: #F8F8F8;border-top:1px solid #E4E6E9;height:50px;padding-top:4px;'>
							<div style='float:right;margin-top:8px;margin-right:10px'>
								<button class='save1' style='margin-right:5px;border: none;padding: 5px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>确定</button>
								<button class='quxiao'>取消</button>
							</div>
						</div>
					</div>
				
				</div>
				
				<!--新建部门-->
				<div class='add_content' style='display:none;z-index:20;background: rgba(0,0,0,.4);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);position:fixed;top:0;right:0;width:100%;height:100%;'>
					<div style='position:absolute;width:400px;height:200px;position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-120px;'>
						<div style='background: #335884;color:#fff;height:20%;line-height:40px;padding-left:10px'>新建部门
							<i class='ace-icon glyphicon glyphicon-remove close_icon ' style='float:right;cursor:pointer;margin:13px 10px 0 0 '></i>
						</div>
						<div style='background: #fff;height:60%;'>
							<div style='padding-top:46px;margin-left:58px;'>部门名称:<input type="text" class='oinput' style='margin-left:10px;width:66%'/></div>
						</div>
						<div class='popup-footer' style='background: #F8F8F8;border-top:1px solid #ccc;height:24%;'>
							<div style='float:right;margin-top:8px;margin-right:10px'>
								<button class='save' style='margin-right:5px;border: none;padding: 5px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>确定</button>
								<button class='quxiao'>取消</button>
							</div>
						</div>
					</div>
					
				</div>
				
				<!--修改名称-->
				<div class='edict_content' style='display:none;z-index:20;background: rgba(0,0,0,.4);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);position:fixed;top:0;right:0;width:100%;height:100%;'>
					<div style='position:absolute;width:400px;height:200px;position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-120px;'>
						<div style='background: #335884;color:#fff;height:20%;line-height:40px;padding-left:10px'>修改名称
							<i class='ace-icon glyphicon glyphicon-remove close_icon ' style='float:right;cursor:pointer;margin:13px 10px 0 0 '></i>
						</div>
						<div style='background: #fff;height:60%;'>
							<div style='padding-top:46px;margin-left:58px;'>名称:<input type="text" class='oinput1' style='margin-left:10px;width:66%'/></div>
						</div>
						<div class='popup-footer' style='background: #F8F8F8;border-top:1px solid #ccc;height:24%;'>
							<div style='float:right;margin-top:8px;margin-right:10px'>
								<button class='save1' style='margin-right:5px;border: none;padding: 5px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>确定</button>
								<button class='quxiao'>取消</button>
							</div>
						</div>
					</div>
				
				</div>
				
				
				
				<!--新建部门-->
				<div class='add_content1' style='display:none;z-index:20;background: rgba(0,0,0,.4);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);position:fixed;top:0;right:0;width:100%;height:100%;'>
					<div style='position:absolute;width:400px;height:200px;position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-120px;'>
						<div style='background: #335884;color:#fff;height:20%;line-height:40px;padding-left:10px'>新建部门
							<i class='ace-icon glyphicon glyphicon-remove close_icon' style='float:right;cursor:pointer;margin:13px 10px 0 0 '></i>
						</div>
						<div style='background: #fff;height:40%;'>
							<div style='padding-top:37px;margin-left:58px;'>部门名称:<input type="text" class='oinput' style='margin-left:10px;width:66%'/></div>
						</div>
						<div style='background: #fff;height:57%;'>
							<div style='padding:15px 0 32px 0;margin-left:58px;'>所属部门:
								<span class="editable sel_tree7" >
									<select class="easyui-combotree"  data-options="url:'../assets/data/city_data.json',valueField:'id',textField:'text',method:'get',animate:true"  name="city1" style="width:259px;"></select>
								</span>
							</div>
						<div class='popup-footer' style='background: #F8F8F8;border-top:1px solid #ccc;height:47px;'>
							<div style='float:right;margin-top:8px;margin-right:10px'>
								<button class='' style='margin-right:5px;border: none;padding: 5px 9px;border-radius:2px;border-color:#335884;background: #335884;color:#fff;'>确定</button>
								<button class='quxiao'>取消</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
				
  </main-layout>
</template>

<script>

	import '../assets/zTreeStyle/js/jquery-1.4.4.min.js'
	
	import '../assets/zTreeStyle/js/jquery.ztree.core.js'
	import '../assets/zTreeStyle/js/jquery.ztree.excheck.js'
	import '../assets/zTreeStyle/js/jquery.ztree.exedit.js'
//	import '../assets/js/jquery.easyui.min.js'
	
//	import '../assets/zTreeStyle/js/jquery-1.4.4.min.js'

  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
    data() {
        return {
            selectedNode: {},
            zNodes :[
							{ id:1, pId:0, name:"云南猎鹰科技有限公司", open:true},
							{ id:11, pId:1, name:"研发部",open:true},
							{ id:111, pId:11, name:"敏感项目线"},
							{ id:112, pId:11, name:"教育项目线"},
							{ id:12, pId:1, name:"销售部",open:true},
							{ id:121, pId:12, name:"华北战区"},
							{ id:122, pId:12, name:"华南战区"},
							{ id:123, pId:12, name:"华东战区"}
						],
            setting: {
                view: {
                    showIcon: true
                    
                },
                edit: {
                    enable: true,
                    showRemoveBtn: true,
                    showRenameBtn:true
                },
                data: {
                    keep: {
                        parent: true,
                        leaf: true
                    },
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    onClick: this.zTreeOnClick,
                    onRename: this.zTreeOnRename,
                    addDiyDom: this.addDiyDom,
                    addHoverDom: this.addHoverDom,
										removeHoverDom: this.removeHoverDom,
										beforeClick: this.beforeClick
                }
            }
        };
    },
    methods: {
        // 初始化ztree
        init() {
            $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            $.fn.zTree.init($("#treeDemo1"), this.setting, this.zNodes);
        },

        // 树节点点击事件
        zTreeOnClick: function(event, treeId, treeNode) {
        /*	alert(1)*/
            this.selectedNode = treeNode;
            this.$emit("treeClick", treeNode);
        },
				beforeClick: function(treeId, treeNode) {
					
         
       },

        // 树节点编辑名称回调
        zTreeOnRename(event, treeId, treeNode, isCancel) {
            this.$emit("addNode", treeNode);
        },
       addDiyDom :function(treeId, treeNode) {
       	
					let spaceWidth = 5;
					let switchObj = $("#" + treeNode.tId + "_switch"),
					icoObj = $("#" + treeNode.tId + "_ico");
					switchObj.remove();
					icoObj.before(switchObj);
		
					if (treeNode.level > 1) {
						let spaceStr = "<span style='display:none'></span>";
						switchObj.before(spaceStr);
					}
				},
				/*显示操作框*/
		addHoverDom:function(treeId, treeNode) {
alert(1)
			let sObj = $("#" + treeNode.tId + "_span");
			if ($("#addBtn_"+treeNode.tId).length>1) return;
			let addStr = "<p class='button obutton' id='addBtn_" + treeNode.tId+ "'   style='display:none;display:inline;width:20px;right:0px;position:absolute;'><img  style='margin:-3px 0 0 10px;' src='../assets/zTreeStyle/img/more.png'/></p>"; 
			sObj.after(addStr);
			let btn = $("#addBtn_"+treeNode.tId);
			$('.curSelectedNode .obutton').bind("mouseover", function(){
				$(this).css('background','#335884')
			})
			$('#treeDemo a').bind("mouseover", function(){
				$('#treeDemo .obutton').not($(this).children('.obutton')).hide();
//				$('.curSelectedNode').children('.obutton').eq(0).show();
			})
			btn.bind("mouseover", function(){
				$('#treeDemo .obutton').not($(this)).hide();
				/*$('.curSelectedNode').children('.obutton').eq(0).show();*/
			})
			btn.bind("mouseout", function(){
				$(this).hide();
			})
			btn.bind("click", function(){
				$("#rMenu").remove();
				
					$(this).parent().append('<div id="rMenu">'
						+'<ul>'
							+'<li class="m_add" >增加子部门</li>'
							+'<li class="m_edict" onclick="edit()">修改名称</li>'
							+'<li class="m_del" onclick="removeTreeNode();">删除</li>'
							+'<li class="up" onclick="up()">上移</li>'
							+'<li class="down" onclick="down()">下移</li>'
						+'</ul>'
					+'</div>')
					$("#rMenu").show();
					let zTree = $.fn.zTree.getZTreeObj("treeDemo");
					$('.m_add').click(function(){
						$('.add_content').show()
						$('#rMenu').hide();
						$('.oinput').val('');
						let oHtml=$('.oinput').val();
					$('.add_content .save').one("click", function(){
						$('.add_content').hide()
						let oHtml=$('.oinput').val();
						
						zTree.addNodes(treeNode, { pId:treeNode.id, name:oHtml });
						zTree.updateNode(treeNode);
	//					if(oHtml==''){
	//						alert('请输入名称');
	//					}else{
	//						alert('正确');
	//						$('.add_content').hide()
	//						 zTree.expandNode(treeNode, true);
	//						
	//						zTree.addNodes(treeNode, { pId:treeNode.id, name:oHtml });
	//						 zTree.reAsyncChildNodes(treeNode, "refresh");
	//					}
					})
					$('.m_edict').click(function(event){
						event.stopPropagation();//阻止事件冒泡即可
					})
			})												
				$('.quxiao').click(function(){
					$('.add_content').hide()
				})
				$("body").bind("mousedown", onBodyMouseDown);
			});
			return false;	
		},
		
		removeHoverDom:function(treeId, treeNode) {
			$("#addBtn_"+treeNode.tId).unbind().remove();
		},
		
		onBodyMouseDown:function(event){
			if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
				$("#rMenu").css({"display" : "none"});
			}
		},
		/*hideRMenu() {
			if ($("#rMenu"))$("#rMenu").css({"display": "none"});
			$("body").unbind("mousedown", onBodyMouseDown);
		},*/
        // 点击添加按钮事件
        add() {
            let newCount = 1;
            let zTree = $.fn.zTree.getZTreeObj("treeDemo"),
            nodes = zTree.getSelectedNodes(),
            treeNode = nodes[0];
            if (treeNode) {
                if (treeNode.level === 2) {
                    this.$message("分类不能超过三级");
                    return;
                } else {
                    treeNode = zTree.addNodes(treeNode, {
                        id: 100 + newCount,
                        isParent: true,
                        pId: treeNode.id,
                        name: "new node" + newCount++
                    });
                }
            } else {
                treeNode = zTree.addNodes(null, {
                    id: 100 + newCount,
                    isParent: true,
                    pId: 0,
                    name: "new node" + newCount++
                });
             }
            zTree.editName(treeNode[0]);
        },

        // 点击删除按钮事件
        remove() {
            let zTree = $.fn.zTree.getZTreeObj("treeDemo"),
            nodes = zTree.getSelectedNodes(),
            treeNode = nodes[0];
            if (nodes.length == 0) {
                this.$message("请先选择一个节点");
                return;
            } else {
                this.$confirm("此操作将永久删除该节点, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                .then(() => {
                    this.$emit("removeNode", treeNode);
                })
                .catch(() => {});
            }
        }
    },
    watch: {
        // 监听树节点的变化更新树
        zNodes: function(val) {
            this.init();
        },
    },
    mounted() {
        this.init();
        let winHeight=$(window).height();
				$('.ztree').height(winHeight-150);
				
				function xuan(tb){
					 //控制表格的全选及反选
						let thr = tb+' thead tr'; 
				    let tbr = tb+' tbody tr';
				    let checkAll=tb+' thead tr th input';
						$(checkAll).click(function(event){
				       /*将所有行的选中状态设成全选框的选中状态*/  
				        $(tbr).find('input').attr('checked',$(this).attr('checked'));  
				        /*并调整所有选中行的CSS样式*/  
				       if ($(this).attr('checked')) {  
				           $(tbr).find('input').parent().parent().parent().addClass('warning');  
				        } else{  
				            $(tbr).find('input').parent().parent().parent().removeClass('warning');  
				       }  
				       /*阻止向上冒泡，以防再次触发点击操作*/  
				        event.stopPropagation();  
				    });
				    /*点击每一行的选中复选框时*/  
				    $(tbr).find('input').click(function(event){  
				       /*调整选中行的CSS样式*/  
				        $(this).parent().parent().parent().toggleClass('warning');  
				       /*如果已经被选中行的行数等于表格的数据行数，将全选框设为选中状态，否则设为未选中状态*/  
				      $(checkAll).attr('checked',$(tbr).find('input:checked').length == $(tbr).length ? true : false);  
				        /*阻止向上冒泡，以防再次触发点击操作*/  
				       event.stopPropagation();  
				    }); 
					 }
					 xuan('#sample-table-1');
					 xuan('#sample-table-2');
					 
					  $('.btn').mouseover(function(){
			    	$(this).css('background-color','#f2f2f2')
			    })
			    $('.btn').mouseout(function(){
			    	$(this).css('background-color','#fff')
			    });
			    $('.close_icon').click(function(){
			    	$('.add_content').hide();
			    	$('.edict_content').hide();
			    	$('.add_content1').hide();
			    	$('.scope-modal').hide();
			    	$('.delete_content').hide();
			    })
			    $('.quxiao').click(function(){
			    	$('.add_content1').hide();
			    	$('.scope-modal').hide();
			    	$('.delete_content').hide();
			    })
			    $('.huishou').click(function(){
			    	$('.inner-box').eq(0).addClass('hide');
			    	$('.inner-box').eq(1).removeClass('hide');
			    })
			    $('.fanhui').click(function(){
			    	$('.inner-box').eq(1).addClass('hide');
			    	$('.inner-box').eq(0).removeClass('hide');
			    });
			    
			    
			    //点击空白或者其他区域时divTop隐藏
			    $(document).bind('click', function(e) {  
			        var e = e || window.event; //浏览器兼容性   
			        var elem = e.target || e.srcElement;  
			        while (elem) { //循环判断至跟节点，防止点击的是div子元素   
			            if (elem.id &&elem.id== 'btn_dropdown'||elem.id== 'daochu1'||elem.id== 'daochu2'||elem.id== 'treeDemo') {  
			                return;  
			            }  
			            elem = elem.parentNode;  
			        }  
			       $('.dropdown-menu').hide();
			       $('.dropdown-menu1').hide();
			       $('#rMenu').hide();
			    });	
			    $('.daochu').click(function(){
			    	$(this).find('.dropdown-menu1').toggle()
			    })
			    $('.menu-list').mouseover(function(){
			    	$(this).find('span').css('color','#fff')
			    })
			    $('.menu-list').click(function(){
			    	$('.dropdown-menu').hide();
			    	$(this).removeClass('menu-unselected').addClass('menu-selected');
			    	$(this).find('span').eq(0).removeClass('hide');
			    	$(this).siblings('.menu-list').addClass('menu-unselected').removeClass('menu-selected');
			    	$(this).siblings('.menu-list').find('span').eq(0).addClass('hide');
			    })
			    
			    $('.menu-list').mouseout(function(){
			    	$(this).find('span').eq(0).css('color','#335884')
			    	$(this).find('span').eq(1).css('color','#333333')
			    });
			    $('.tree-add').click(function(){
			    	$('.add_content1').show()
			    })
			   //添加成员
			   $('.person-add').click(function(){
				   	$('.outer-box').eq(0).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(1).removeClass('hide');
			   })
			   //添加成员取消
			   $('.person-quxiao').click(function(){
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(0).removeClass('hide');
			   })
			   //编辑成员
			   $('.edict').click(function(){
				   	$('.outer-box').eq(0).addClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
				   	$('.outer-box').eq(3).removeClass('hide');
				   	$('.edict-quxiao1').addClass('hide');
				   	$('.edict-quxiao').removeClass('hide');
			   })
			   $('.edict1').click(function(){
				   	$('.outer-box').eq(0).addClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
				   	$('.outer-box').eq(3).removeClass('hide');
				   	$('.edict-quxiao1').removeClass('hide');
				   	$('.edict-quxiao').addClass('hide');
			   })
			   //编辑成员取消
			   /*返回详情页面*/
			   $('.edict-quxiao').click(function(){
				   	$('.outer-box').eq(0).addClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(2).removeClass('hide');
			   })
			   /*返回主页面*/
			   $('.edict-quxiao1').click(function(){
				   	$('.outer-box').eq(0).removeClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
			   })
			   //设置所在部门
				$(".shezhi").click(function(){
					if($("#sample-table-1 input[type='checkbox']").is(':checked')){
						$('.scope-modal').show();	
					}else {
						$(".tankuang").fadeIn(10);
						$(".tankuang").fadeOut(2000);
					}
			
				});
				$('.xuanze').click(function(){
					$('.scope-modal').show();	
				})
				$('.fanwei-quxiao').click(function(){
					$('.xuanze-left').hide();	
				})
				//删除
				$(".delete").click(function(){
					if($("#sample-table-1 input[type='checkbox']").is(':checked')){
						$('.delete_content').show()	
					}else {
						$(".tankuang").fadeIn(10);
						$(".tankuang").fadeOut(2000);
					}
			
				});
				$(".delete1").click(function(){
					$('.delete_content').show()									
				});
				
				$('table tbody tr').mouseover(function(){
					$(this).find('.btn_dropdown').removeClass('hide');
				});
				$('table tbody tr').not('.tableSelected').mouseout(function(){
						$(this).find('.btn_dropdown').addClass('hide');					
				});
				$('.btn_dropdown').click(function(){
					$(this).parent().parent().parent().addClass('tableSelected');
					$(this).parent().parent().parent().siblings().removeClass('tableSelected')
			    	$(this).next().toggle();
			    	$(this).parent().parent().parent().siblings().find('.dropdown-menu').css('display','none')
			    })
				/*点击表格一行出详情*/
				$('#sample-table-1 tbody tr td').not('.noclick').click(function(){
					$('.outer-box').eq(0).addClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(2).removeClass('hide');
				});
				$('.fanhui1').click(function(){
					$('.outer-box').eq(0).removeClass('hide');
				   	$('.outer-box').eq(1).addClass('hide');
				   	$('.outer-box').eq(3).addClass('hide');
				   	$('.outer-box').eq(2).addClass('hide');
				})
			
	/*$('#treeDemo a').hover(function(){
		$(this).append("<img  style='margin:-3px 0 0 10px;' src='../assets/zTreeStyle/img/more1.png'/>")
	})*/
		
		/*修改节点*/
	
		/*查找节点*/
		
		var key;
		$(document).ready(function(){
			/*$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			$.fn.zTree.init($("#treeDemo1"), setting1, zNodes);*/
			$('#treeDemo a').eq(0).click();
			$('#treeDemo1 a').eq(0).click();
//			rMenu = $("#rMenu");
			
			$('#treeDemo a span').click(function(){
				$(this).parent().next().toggle();
				if($(this).parent().children().eq(0).hasClass('roots_close')){
					$(this).parent().children().eq(0).removeClass('roots_close').addClass('roots_open')
				}else if($(this).parent().children().eq(0).hasClass('roots_open')){
					$(this).parent().children().eq(0).addClass('roots_close').removeClass('roots_open')
				}
				if($(this).parent().children().eq(0).hasClass('root_close')){
					$(this).parent().children().eq(0).removeClass('root_close').addClass('root_open')
				}else if($(this).parent().children().eq(0).hasClass('root_open')){
					$(this).parent().children().eq(0).addClass('root_close').removeClass('root_open')
				}
				else if($(this).parent().children().eq(0).hasClass('center_close')){
					$(this).parent().children().eq(0).removeClass('center_close').addClass('center_open')
				}else if($(this).parent().children().eq(0).hasClass('center_open')){
					$(this).parent().children().eq(0).addClass('center_close').removeClass('center_open')
				}
				else if($(this).parent().children().eq(0).hasClass('bottom_close')){
					$(this).parent().children().eq(0).removeClass('bottom_close').addClass('bottom_open')
				}else if($(this).parent().children().eq(0).hasClass('bottom_open')){
					$(this).parent().children().eq(0).addClass('bottom_close').removeClass('bottom_open')
				}
			})
			
		/*	winHeight1=$(window).height()-221 ;
		    $('#treeDemo').css('max-height',winHeight1);
		    $('#treeDemo').css('height',winHeight1);
		    if($('#treeDemo').clientHeight>winHeight1)
			 {
			  $('#treeDemo').style.overflow="scroll";
			 }*/
			
			
		});
		
		
    }
  }
</script>
<style scoped>
	@import '../assets/zTreeStyle/zTreeStyle.css';
	@import '../assets/css/ace.css';
	@import '../assets/css/newwaction.css';
	@import '../assets/css/newwaction2.css';
	@import '../assets/css/bootstrap.css';
	@import '../assets/css/easyui.css';
	/*@import '../assets/css/font-awesome.css'*/
/*	@import '../assets/css/students.css';*/
	
</style>
<style>
	.menu-title {
    padding: 4px 11px 4px 26px;
    font-weight: normal;
    font-size: 12px;
}
	.dropdown-menu1 {
    padding: 5px 0;
    border-radius: 2px!important;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0,0,0,.3);
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.3);
    background: #fff;
    width: 100px;
    position: absolute;
    z-index: 10;
    left: 0;
    display: none;
    top: 28px;
}
.dropdown-menu1 li {
    padding: 3px 20px;
    text-align: left;
}	
.dropdown-menu1 li:hover {
   background: #335884;
  /*  color: #fff;*/
}	
.dropdown-menu1 li:hover a{
	 color: #fff;
}
.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
    text-decoration: none;
    color: #fff;
    background-color: #335884;
}
	.hide{
		display:none;
	}
	.zTreeDemoBackground{
	background:#F9FAFC;
	width:20%;
	height:100%;
	border-right: 1px dotted #DCE1E6;
	border-radius: 4px 0 0 4px;
}
#treeDemo a{
	width:100%;
}
.ztree li a.curSelectedNode {
    background-color: #335884;
    color:#fff;
    border: none;
}
.ztree li a.curSelectedNode:hover {
    background-color: #335884;
    color:#fff;
    border: none;
}
.ztree li a:hover{
	background: #edf1f5;
	color:#000;
	text-decoration: none;
}
	.ztree{
		/*width:200px;*/
		/*height:400px;*/
	}
	.ztree li{
		/*background: #fff;*/
	}
	
		#sample-table-1 thead tr th:nth-child(7) div{
			border-right: 0;
		}
		#sample-table-1 thead tr th:nth-child(7){
			padding:4px 8px 4px;
		}
		#sample-table-2 thead tr th:nth-child(6) div{
			border-right: 0;
		}
		#sample-table-2 thead tr th:nth-child(6){
			padding:5px 8px 5px;
		}
		.main-container{
		    overflow-y: hidden;
		}
		.tankuang{
			z-index: 4;
			width: 120px;
			height: 30px;
			line-height: 30px;
			background: #FB6500;
			position: absolute;
			left: 50%;
			top:12%;
			border-radius: 3px;
			text-align: center;
			display: none;
			color: white;
		}
	   	table tr{
			cursor: pointer;
		}
		.tableSelected{
			background-color: #f5f5f5!important;
		}
		.ztree li a.curSelectedNode {
		    color:#fff!important;
		}
		.ztree li span.button.root_open,.ztree li span.button.roots_open,.ztree li span.button.bottom_open,.ztree li span.button.center_open {
    background-image: url(../assets/zTreeStyle/img/dropdown_arrow_down.png);
		}
		.ztree li span.button.root_close,.ztree li span.button.roots_close,.ztree li span.button.bottom_close,.ztree li span.button.center_close {
		   background-image: url(../assets/zTreeStyle/img/dropdown_arrow_left.png);
		}
		.ztree a:hover{
			text-decoration: none;
		}
		.dropdown-menu1{
			display:none;
		}
</style>
