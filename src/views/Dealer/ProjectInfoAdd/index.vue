<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">添加标的物</span>
      <ul class="step_list fr" style="display: none">
        <li class="step_list_item fl">
          <span class="num">1</span>
          <span>创建公告</span>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="step_list_item fl active">
          <span class="num">2</span>
          <span>填写信息详情</span>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="step_list_item fl">
          <span class="num">3</span>
          <span>提交成功</span>
        </li>
      </ul>
    </div>
    <!--创建公告-->
    <div class="manager_main">
      <span class="tip_text">创建公告</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>公告标题：</label>
          <div class="form_value">
            <span class="useful-text">关于</span>
            <input
              class="big_input"
              type="text"
              placeholder="填写公告标题，不超过150字"
            />
            <select style="min-width: 100px">
              <option value="（第一次）">（第一次）</option>
              <option value="（第二次）">（第二次）</option>
              <option value="（第三次）">（第三次）</option>
              <option value="（末次）">（末次）</option>
              <option value="（重新处置）">（重新处置）</option>
              <option value="（再次）">（再次）</option>
            </select>
            <span>的公告</span>
          </div>
          <p class="error">请输入公告标题</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">项目编号：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="填写项目编号"
              name=""
            />
            <span class="gray9">建议自行编号，便于统计和归档</span>
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>公告详情：</label>
          <div class="form_value">
            <textarea class="editor"></textarea>
          </div>
          <p class="error" style="margin-left: 130px">请输入公告详情</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">上传附件：</label>
          <div class="form_value">
            <div class="ofw">
              <a class="btn" href="">上传附件</a>
              <span class="gray9"
                >仅限上传txt、doc、docx、xls、xlsx、pdf格式，大小不超过30M</span
              >
              <!--上传内容展示-->
              <ul class="update_list">
                <li class="ofw">
                  <a class="omit" href=""
                    >文档标题.docx<i class="iconfont icon-gou"></i
                    ><i class="del">×</i></a
                  >
                </li>
                <!--点击文档标题可下载-->
                <li class="ofw">
                  <a class="omit" href=""
                    >文档标题.docx<i class="iconfont icon-gou"></i
                    ><i class="del">×</i></a
                  >
                </li>
              </ul>
              <!--上传内容展示 end-->
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--资产类型-->
    <div class="manager_main">
      <span class="tip_text">资产类型</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>选择类目：</label>
          <div class="form_value">
            <select>
              <option value="房产">房产</option>
              <option value="债权">债权</option>
            </select>
            <span class="gray9">请选择正确类目，以便买家快速找到</span>
          </div>
          <p class="error">请选择类目</p>
          <!--错误提示-->
        </div>
      </form>
    </div>
    <!--基本描述-->
    <div class="manager_main">
      <span class="tip_text">基本描述</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>名称：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="建议包含资产名称和特征关键词，最多可输入30个汉字"
              name=""
            />
            <span class="gray9"></span>
          </div>
          <p class="error">请输入标的物名称</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>上传图片：</label>
          <div class="form_value">
            <div class="ofw">
              <a class="btn" href="">上传图片</a>
              <span class="gray9 block"
                >支持批量上传，最多5张图，至少1张，10MB单张限制，尺寸在5500x5500以内，支持JPG、PNG、JPEG、BMP格式。</span
              >
              <p class="error">请上传图片</p>
              <!--错误提示-->
              <!--上传内容展示-->
              <ul class="updateP_list ofw">
                <li class="fl">
                  <img src="content/uploads/1.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p>主图</p>
                </li>
                <li class="fl">
                  <img src="content/uploads/1.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p class="set"><a href="">设为主图</a></p>
                </li>
                <li class="fl">
                  <img src="content/uploads/1.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p class="set"><a href="">设为主图</a></p>
                </li>
                <li class="fl">
                  <img src="content/uploads/1.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p class="set"><a href="">设为主图</a></p>
                </li>
                <li class="fl">
                  <img src="content/uploads/2.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p class="set"><a href="">设为主图</a></p>
                </li>
              </ul>
              <!--上传内容展示 end-->
            </div>
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">上传视频：</label>
          <div class="form_value">
            <div class="ofw">
              <a class="btn" href="">上传视频</a>
              <span class="gray9 block" style="word-break: break-all"
                >上传视频不能大于200M，只能上传1个，支持的格式包括：wmv,avi,mpg,mpeg,3gp,mov,mp4,flv,f4v,m4v,m2t,mts,rmvb,vob,mkv</span
              >
              <!--上传内容展示-->
              <ul class="updateP_list ofw">
                <li class="fl">
                  <img src="content/uploads/1.jpg" width="100%" height="100%" />
                  <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                  <p>成功</p>
                </li>
              </ul>
              <!--上传内容展示 end-->
            </div>
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">编号：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="建议编号，便于统计和归档"
              name=""
            />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
    </div>
    <!--资产属性-->
    <div class="manager_main">
      <span class="tip_text">资产属性</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>流转方式：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="转让">转让</option>
              <option value="出租">出租</option>
              <option value="转租">转租</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择流转方式</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>物业类型：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="住宅用房">住宅用房</option>
              <option value="工业用房">工业用房</option>
              <option value="商业用房">商业用房</option>
              <option value="其他用房">其他用房</option>
              <option value="车位">车位</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择物业类型</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>房屋用途：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="商住房">商住房</option>
              <option value="商铺">商铺</option>
              <option value="写字楼">写字楼</option>
              <option value="其他">其他</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择房屋用途</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>所在地：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <div class="form_value input_box">
            <input
              class="big_input"
              type="text"
              placeholder="请输入详细地址"
              name=""
            />
            <span class="gray9"></span>
            <ul class="input_list bg-white">
              <li class="omit">财富中心</li>
              <li class="omit">财富中心财富中心</li>
              <li class="omit">
                财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心
              </li>
              <li class="omit">财富中心财富中心财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
              <li class="omit">财富中心财富中心财富中心</li>
            </ul>
          </div>
          <p class="error" style="margin-left: 130px">请选择省市区</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-5 form-group has-feedback">
          <label class="form_name">经度：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
          </div>
        </div>
        <div class="form_item mb10 col-lg-5 form-group has-feedback ofw">
          <label class="form_name" style="width: auto">纬度：</label>
          <div class="form_value">
            <input class="" type="text" placeholder="请输入" name="" />
            <a
              class="btn"
              href=""
              style="height: 36px; margin-top: 0; line-height: 26px"
              >查看地图</a
            >
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>小区名称：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="请输入详细地址"
              name=""
            />
            <span class="gray9"></span>
          </div>
          <p class="error">请输入小区名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>朝向：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="东">东</option>
              <option value="南">南</option>
              <option value="西">西</option>
              <option value="北">北</option>
              <option value="东南">东南</option>
              <option value="东北">东北</option>
              <option value="西北">西北</option>
              <option value="西南">西南</option>
              <option value="东西">东西</option>
              <option value="南北">南北</option>
              <option value="其他朝向">其他朝向</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择朝向</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>户型：</label>
          <div class="form_value">
            <select>
              <option value="">室</option>
            </select>
            <select>
              <option value="">厅</option>
            </select>
            <select>
              <option value="">卫</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error" style="margin-left: 130px">请选择户型</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>房源类型：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="新房">新房</option>
              <option value="二手房">二手房</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择房源类型</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>装修程度：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="毛坯">毛坯</option>
              <option value="精装">精装</option>
              <option value="普通装修">普通装修</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择装修程度</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>建筑面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入建筑面积" name="" />
            <span class="gray9">平方米</span>
          </div>
          <p class="error">请输入建筑面积</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">土地面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入土地面积" name="" />
            <span class="gray9">平方米</span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">所在楼层：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
            <span class="gray9">层</span>
          </div>
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>总楼层：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
            <span class="gray9">层</span>
          </div>
          <p class="error">请输入总楼层</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name">税费情况：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="有营业税">有营业税</option>
              <option value="无营业税">无营业税</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name">建成时间：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name">权属性质：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="商品房">商品房</option>
              <option value="经济适用房">经济适用房</option>
              <option value="已购公有住房">已购公有住房</option>
              <option value="其他">其他</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name">房产证登记日期：</label>
          <div class="form_value">
            <select>
              <option value=""></option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
    </div>
    <!--资产详细描述-->
    <div class="manager_main">
      <span class="tip_text">资产详细描述</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>描述内容：</label>
          <div class="form_value">
            <textarea class="editor"></textarea>
          </div>
          <p class="error" style="margin-left: 130px">请输入描述内容</p>
          <!--错误提示-->
        </div>
      </form>
    </div>
    <!--权利及限制情况-->
    <div class="manager_main">
      <span class="tip_text">权利及限制情况</span>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">诉讼情况：</label>
          <div class="form_value">
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-add red"></i> 增加诉讼信息</a
            >
            <a class="btn" href="">
              <i class="iconfont icon-del2 red"></i> 删除诉讼信息</a
            >
            <!--默认只显示增加按钮，有无诉讼及补充说明隐藏，点击增加后，有无诉讼及补充说明展示出来，并且按钮变为删除按钮-->
          </div>
        </div>
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>有无诉讼：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div class="form_item mb10 form-group has-feedback">
          <label class="form_name">诉讼案号：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
          </div>
        </div>
        <div class="mt10 ofw">
          <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
            <label class="form_name"><i class="red">*</i>执行情况：</label>
            <div class="form_value">
              <select>
                <option value="请选择">请选择</option>
                <option value="未执行">未执行</option>
                <option value="执行中">执行中</option>
                <option value="执行终结">执行终结</option>
                <option value="其他">其他</option>
              </select>
              <span class="gray9"></span>
            </div>
          </div>
          <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
            <label class="form_name">执行案号：</label>
            <div class="form_value">
              <input type="text" placeholder="请输入" name="" />
            </div>
          </div>
        </div>
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">诉讼补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">查封情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加查封信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除查封信息</a
            >
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name"><i class="red">*</i>有无查封：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name">查封补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">抵押情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加抵押信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除抵押信息</a
            >
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: block"
        >
          <label class="form_name"><i class="red">*</i>有无抵押：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>抵押人名称：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
            <span class="gray9"></span>
          </div>
          <p class="error">请输入抵押人名称</p>
          <!--错误提示-->
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: block"
        >
          <label class="form_name">抵押补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">经营情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加经营信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除经营信息</a
            >
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name"><i class="red">*</i>有无经营：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name">经营补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">租赁情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加租赁信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除租赁信息</a
            >
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name"><i class="red">*</i>有无租赁：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name">租赁补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10 form_line">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">过户情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加过户信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除过户信息</a
            >
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name"><i class="red">*</i>有无过户：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div
          class="form_item ofw form-group has-feedback"
          style="display: none"
        >
          <label class="form_name">过户补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">共有情况：</label>
          <div class="form_value">
            <a class="btn" href="">
              <i class="iconfont icon-add red"></i> 增加共有信息</a
            >
            <a class="btn" href="" style="display: none">
              <i class="iconfont icon-del2 red"></i> 删除共有信息</a
            >
          </div>
        </div>
        <div class="form_item ofw" style="display: none">
          <label class="form_name"><i class="red">*</i>有无共有：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
        <div class="form_item ofw" style="display: none">
          <label class="form_name">共有补充说明：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
    </div>
    <!--相关附件-->
    <div class="manager_main">
      <span class="tip_text">相关附件</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">上传附件：</label>
          <div class="form_value">
            <div class="ofw">
              <a class="btn" href="">上传附件</a>
              <span class="gray9"
                >txt、doc、docx、xls、xlsx、pdf、png、jpg、jpeg格式，大小不超过10M</span
              >
              <!--上传内容展示-->
              <ul class="update_list">
                <li class="ofw">
                  <a class="omit" href=""
                    >文档标题.docx<i class="iconfont icon-gou"></i
                    ><i class="del">×</i></a
                  >
                </li>
                <!--点击文档标题可下载-->
                <li class="ofw">
                  <a class="omit" href=""
                    >文档标题.docx<i class="iconfont icon-gou"></i
                    ><i class="del">×</i></a
                  >
                </li>
              </ul>
              <!--上传内容展示 end-->
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--竞价时间-->
    <div class="manager_main">
      <span class="tip_text">竞价时间</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>处置阶段：</label>
          <div class="form_value">
            <select>
              <option value="第一次">第一次</option>
              <option value="第二次">第二次</option>
              <option value="第三次">第三次</option>
              <option value="末次">末次</option>
              <option value="重新处置">重新处置</option>
              <option value="再次">再次</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择处置阶段</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>竞价开始时间：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择竞价开始时间</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>竞价结束时间：</label>
          <div class="form_value ofw">
            <label><input type="radio" name="radio" />竞价开始起24小时</label>
            <label><input type="radio" name="radio" />竞价开始起12小时</label>
            <label
              ><input
                type="radio"
                name="radio"
              />自定义&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select style="display: none">
                <!--该下拉框默认隐藏，选择自定义后下拉框显示-->
                <option value="请选择">请选择</option>
              </select>
            </label>
          </div>
          <p class="error" style="margin-left: 130px">请选择竞价结束时间</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">延时周期：</label>
          <div class="form_value">
            <p class="mt10">5分钟</p>
            <span class="gray9"
              >若有竞拍者在拍卖结束前5分钟内出价，则延时5分钟</span
            >
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>成交规则：</label>
          <div class="form_value ofw">
            <label><input type="radio" name="radio" />至少一人报名</label>
            <label><input type="radio" name="radio" />至少二人报名</label>
          </div>
          <p class="error" style="margin-left: 130px">请选择成交规则</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>优先购买权人：</label>
          <div class="form_value ofw">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
          </div>
          <p class="error" style="margin-left: 130px">请选择优先购买权人</p>
          <!--错误提示-->
        </div>
      </form>
    </div>
    <!--资金信息设置-->
    <div class="manager_main">
      <span class="tip_text">资金信息设置</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name mt10" style="line-height: 20px"
            ><i class="red">*</i>尾款线上支付关闭时间：</label
          >
          <div class="form_value">
            <span class="useful-text">竞价结束后</span>
            <input type="text" placeholder="请输入" />
            <span>天</span>
            <span class="gray9">请给买受人留充足的时间</span>
          </div>
          <p class="error">请设置尾款线上支付关闭时间</p>
          <!--错误提示-->
        </div>
      </form>
    </div>
    <!--竞买要求-->
    <div class="manager_main">
      <span class="tip_text">竞买须知</span>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>竞买须知：</label>
          <div class="form_value">
            <textarea class="editor"></textarea>
          </div>
          <p class="error" style="margin-left: 130px">请输入竞买须知</p>
          <!--错误提示-->
        </div>
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>竞买人资质：</label>
          <div class="form_value">
            <div class="ofw">
              <label><input type="radio" name="radio" checked />无要求</label>
              <label
                ><input
                  type="radio"
                  name="radio"
                />有要求，无需审核&nbsp;&nbsp;&nbsp;<span class="gray9"
                  >竞买人知晓资质要求即可</span
                ></label
              >
            </div>
            <div class="ofw sh_main" style="">
              <ul>
                <li class="ofw mb10">
                  <input
                    class="fl big_input"
                    type="text"
                    placeholder="请输入资质要求"
                  />
                  <a href="" class="btn"
                    ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                  >
                </li>
                <li class="ofw mb10">
                  <input
                    class="fl big_input"
                    type="text"
                    placeholder="请输入资质要求"
                  />
                  <a href="" class="btn"
                    ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                  >
                </li>
                <li class="ofw mb10">
                  <input
                    class="fl big_input"
                    type="text"
                    placeholder="请输入资质要求"
                  />
                  <a href="" class="btn"
                    ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                  >
                </li>
              </ul>
              <a href="" class="btn" style="margin-left: 0"
                ><i class="iconfont icon-add red"></i>&nbsp;添加更多</a
              >
              <p class="error mt10">请输入竞买人资质要求内容</p>
              <!--错误提示-->
              <p class="zhuyi mt10 gray6">
                <i class="iconfont icon-zhuyi"></i
                >&nbsp;&nbsp;注意：竞买人将在报名时，被要求阅读资质要求并进行勾选确认已知，方可缴纳保证金。
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--价格设置-->
    <div class="manager_main">
      <span class="tip_text">价格设置</span>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">评估价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="gray9">如无评估价，可不填</p>
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">确认评估价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">市场价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
            <span class="gray9">元</span>
          </div>
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">确认市场价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
            <span class="gray9">元</span>
          </div>
        </div>
      </form>
      <p class="gray9" style="margin-left: 130px">
        如无市场价，可不填；同时填写评估价与市场价，优先展示市场价
      </p>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>起始价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="error">请输入起始价</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>确认起始价：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="error">请输入确认起始价</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>保证金：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="error">请输入保证金</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>确认保证金：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="error">请输入确认保证金</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>加价幅度：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">元</span>
          </div>
          <p class="error">请输入加价幅度</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">买家佣金：</label>
          <div class="form_value ofw">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" checked />无</label>
          </div>
          <div class="form_item mb10 col-lg-12 form-group has-feedback">
            <label class="form_name"></label>
            <div class="form_value">
              <span>按成交比例</span>
              <input type="text" placeholder="请输入" value="0.00" name="" />
              <span class="gray9">%</span>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--联系方式-->
    <div class="manager_main">
      <span class="tip_text">联系方式</span>
      <form class="mt10 ofw">
        <div class="form_item mb10">
          <label class="form_name"><i class="red">*</i>联系人名称：</label>
          <div class="form_value">
            <input type="text" placeholder="姓名" />
          </div>
          <p class="error">请输入联系人名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10">
          <label class="form_name"><i class="red">*</i>联系人号码：</label>
          <div class="form_value">
            <input type="text" placeholder="手机号" />
            <span class="">或</span>
            <input type="text" placeholder="座机号" />
          </div>
          <p class="error">请输入联系人号码</p>
          <!--错误提示-->
        </div>
      </form>
    </div>

    <div class="btn_box mt35">
      <a href="">保存草稿</a>
      <a href="">提交</a>
      <!--提交按钮默认灰色，点保存按钮后，下一步变红可点击-->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>