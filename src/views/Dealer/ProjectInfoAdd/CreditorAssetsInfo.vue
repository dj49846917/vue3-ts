<template>
  <div class="manager_main">
    <span class="tip_text">抵押物情况</span>
    <form class="mt10">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>抵押物情况：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
        </div>
      </div>
    </form>
    <!--土地-->
    <div class="pm_form_zw pb25">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>类目：</label>
          <div class="form_value">
            <select>
              <option value="土地">土地</option>
              <option value="房产">房产</option>
              <option value="股权">股权</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择类目</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
          </div>
          <p class="error">请输入名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
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
        <div class="form_item mt10 mb10 ofw form-group has-feedback">
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
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>土地性质：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择土地性质</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>土地规划用途：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择土地规划用途</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>土地面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入土地面积" />
            <span class="gray9">平方米</span>
          </div>
          <p class="error">请输入建筑面积</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">建筑面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入建筑面积" />
            <span class="gray9">平方米</span>
          </div>
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
      <form class="">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">有无查封：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">有无租赁：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押人名称：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押顺位：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="第一顺位">第一顺位</option>
              <option value="第二顺位">第二顺位</option>
              <option value="其他顺位">其他顺位</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">抵押物详细描述：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <div class="form_value">
        <a class="btn btn_r" href=""
          ><i class="iconfont icon-del2 red"></i> 删除</a
        >
      </div>
    </div>
    <!--房产-->
    <div class="pm_form_zw pb25">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>类目：</label>
          <div class="form_value">
            <select>
              <option value="房产">房产</option>
              <option value="土地">土地</option>
              <option value="股权">股权</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择类目</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
          </div>
          <p class="error">请输入名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
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
        <div class="form_item mt10 mb10 ofw form-group has-feedback">
          <label class="form_name">编号：</label>
          <div class="form_value">
            <input type="text" placeholder="建议编号，便于统计和归档" name="" />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>物业类型：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">物业类型</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name"><i class="red">*</i>土地面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入土地面积" />
            <span class="gray9">平方米</span>
          </div>
          <p class="error">请输入建筑面积</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 col-lg-6 form-group has-feedback">
          <label class="form_name">建筑面积：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入建筑面积" />
            <span class="gray9">平方米</span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
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
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入详细地址" />
            <span class="gray9"></span>
          </div>
          <p class="error" style="margin-left: 130px">请选择省市区</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">有无查封：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="">
        <div class="form_item ofw">
          <label class="form_name">有无租赁：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押人名称：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押顺位：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="第一顺位">第一顺位</option>
              <option value="第二顺位">第二顺位</option>
              <option value="其他顺位">其他顺位</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">抵押物详细描述：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <div class="form_value">
        <a class="btn btn_r" href=""
          ><i class="iconfont icon-del2 red"></i> 删除</a
        >
      </div>
    </div>
    <!--股权-->
    <div class="pm_form_zw pb25">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>类目：</label>
          <div class="form_value">
            <select>
              <option value="股权">股权</option>
              <option value="房产">房产</option>
              <option value="土地">土地</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">请选择类目</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
          </div>
          <p class="error">请输入名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
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
        <div class="form_item mt10 mb10 ofw form-group has-feedback">
          <label class="form_name">编号：</label>
          <div class="form_value">
            <input type="text" placeholder="建议编号，便于统计和归档" name="" />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>上市情况：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="上市">上市</option>
              <option value="非上市">非上市</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">物业类型</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>企业类型：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="国有控股">国有控股</option>
              <option value="私有经济">私有经济</option>
              <option value="其他">其他</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error">物业类型</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>企业名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
          </div>
          <p class="error">请输入企业名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
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
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入详细地址" />
            <span class="gray9"></span>
          </div>
          <p class="error" style="margin-left: 130px">请选择省市区</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">有无查封：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">有无租赁：</label>
          <div class="form_value">
            <label><input type="radio" name="radio" />有</label>
            <label><input type="radio" name="radio" />无</label>
            <label><input type="radio" name="radio" />未知</label>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押人名称：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" />
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">抵押顺位：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="第一顺位">第一顺位</option>
              <option value="第二顺位">第二顺位</option>
              <option value="其他顺位">其他顺位</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">抵押物详细描述：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <div class="form_value">
        <a class="btn btn_r" href=""
          ><i class="iconfont icon-del2 red"></i> 删除</a
        >
      </div>
    </div>
    <div class="text-center mt20 mb20">
      <a class="btn bg-red white" href="">
        <i class="iconfont icon-add"></i> 添加抵押物信息</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>