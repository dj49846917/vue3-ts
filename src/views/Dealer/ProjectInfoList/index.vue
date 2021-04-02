<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">标的物列表</span>
    </div>
    <div class="manager_main">
      <div class="manager_filter">
        <ul class="ofw form-group has-feedback">
          <li class="fl form_value mb10">
            <p class="fl title">标的物名称:</p>
            <input
              type="text"
              class="fl"
              maxlength="30"
              placeholder="请输入"
              name=""
            />
          </li>
          <li class="fl form_value mb10">
            <p class="fl title">竞拍时间:</p>
            <select class="fl">
              <option value="请选择">请选择</option>
            </select>
            <p class="fl title">至:</p>
            <select class="fl">
              <option value="请选择">请选择</option>
            </select>
          </li>
          <li class="fl form_value mb10">
            <p class="fl title">拍卖状态:</p>
            <select class="fl">
              <option value="请选择">请选择</option>
            </select>
          </li>
        </ul>
        <div class="btn_box mt10">
          <a href="">查询</a>
          <a class="reset" href="">重置</a>
        </div>
      </div>
    </div>
    <div class="manager_list mt10">
      <table>
        <thead>
          <tr>
            <th width="10%">编号</th>
            <th width="10%">主图</th>
            <th>名称</th>
            <th>竞价起止时间</th>
            <th width="20%">竞拍规则</th>
            <th width="10%">拍卖状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">正在进行</td>
            <td class="v-m operate">
              <a class="blue" href="">查看</a><br />
              <a class="blue" href="">复制拍品</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">未开始</td>
            <td class="v-m operate">
              <a class="blue" href="">查看</a><br />
              <a class="blue" href="">复制拍品</a><br />
              <a class="blue" href="">撤回</a><br />
              <a class="blue" href="">中止</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">
              中止
              <div class="deal_detail blue">
                理由<i class="iconfont icon-right"></i>
                <div class="a-m-tip a-m-tip2">
                  <i><s></s></i>
                  <div class="tip-wrap">
                    中止理由:价格没有优势，不算优质房源
                  </div>
                </div>
              </div>
            </td>
            <td class="v-m operate"><a class="blue" href="">查看</a><br /></td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">已成交</td>
            <td class="v-m operate">
              <a class="blue" href="">继续处置</a><br />
              <a class="blue" href="">复制拍品</a><br />
              <a class="blue" href="">查看费用</a><br />
              <a class="blue" href="">生成完整报告PDF</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
              <div class="deal_detail blue">
                成交详情<i class="iconfont icon-right"></i>
                <div class="a-m-tip">
                  <i><s></s></i>
                  <div class="tip-wrap">
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;号: </label
                      ><span>C3643</span>
                    </p>
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;人: </label
                      ><span>卢坤</span>
                    </p>
                    <p>
                      <label>身份证号: </label><span>510212198207126712</span>
                    </p>
                    <p>
                      <label>成&nbsp;&nbsp;交&nbsp;&nbsp;价: </label
                      ><span>25000</span>
                    </p>
                    <p>
                      <label>成交时间: </label><span>2020.12.25 10:14</span>
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td class="v-m">已结束待确认</td>
            <td class="v-m operate">
              <a class="blue" href="">确认成交</a><br />
              <a class="blue" href="">交易未履行</a><br />
              <a class="blue" href="">复制拍品</a><br />
              <a class="blue" href="">查看费用</a><br />
              <a class="blue" href="">生成完整报告PDF</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">5123</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">
              撤回
              <div class="deal_detail blue">
                理由<i class="iconfont icon-right"></i>
                <div class="a-m-tip a-m-tip2">
                  <i><s></s></i>
                  <div class="tip-wrap">
                    撤回理由:价格没有优势，不算优质房源
                  </div>
                </div>
              </div>
            </td>
            <td class="v-m operate">
              <a class="blue" href="">查看</a><br />
              <a class="blue" href="">复制拍品</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">54523</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank">关于对刘XX的债权转让</a>
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m">已流拍</td>
            <td class="v-m operate">
              <a class="blue" href="">继续处置</a><br />
              <a class="blue" href="">查看费用</a><br />
            </td>
          </tr>
          <tr>
            <td class="v-m"><div class="t-l">4523</div></td>
            <td class="v-m">
              <img
                class="p-img"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
            </td>
            <td class="v-m">
              <a href="" class="blue" target="_blank"
                >北碚区北温泉街道金华路385号</a
              >
            </td>
            <td class="v-m">
              <div class="t-l">2020.12.24 10:00 -2020.12.25 10:00</div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">3000</span> 元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">32000</span> 元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">1000</span> 元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price">延时5分钟</span>
              </div>
              <div class="t-l">
                保留价：<span class="p-price">32000</span> 元
              </div>
            </td>
            <td class="v-m red">待发布</td>
            <td class="v-m operate">
              <a class="blue" href="">去发布</a><br />
              <a class="blue" href="">编辑标的物</a><br />
              <a class="blue" href="">删除</a><br />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page-wrap">
        <div class="ui-pager">
          <a class="ui-pager-current">1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <a>5</a>
          <span>...</span>
          <a>150</a>
          <a class="ui-pager-next">下一页</a>
        </div>
      </div>
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