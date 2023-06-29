<!--
 * @Description: 首页组件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:36:12
 -->
<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <el-card style="padding: 20px 20px">
      <div class="block">
        <el-carousel :height="bannerHeight+'px'" style="width:auto;margin-left: 2%;margin-right: 2%">
          <el-carousel-item v-for="item in carousel" :key="item.carouselId">
            <img style="width: 100%; height:100%;" :src="require('../../public/imgs/LunBoTu/'+item.Path)" :alt="item.describes" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>

    <!-- 轮播图END -->

    <div class="main-box">
      <!--
      <el-row :gutter="24">
        <el-col :span="6">
          <el-card shadow="hover" align="center"  style="height: 100%; background-color: #2cc1d4">
            <div><i class="el-icon-phone-outline"></i></div>
            预约挂号
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" align="center"  style="height: 100%; background-color: #2cc1d4">
            <div><i class="el-icon-s-home"></i></div>
            医院简介
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-button @click="contactus" style="height: 100%; background-color: #2cc1d4"> <div><i class="el-icon-phone"></i></div>医院地址</el-button>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" align="center"  style="height: 100%; background-color: #2cc1d4">
            <div><i class="el-icon-phone"></i></div>
            联系电话
          </el-card>
        </el-col>
      </el-row>
      -->

      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">关于福缘</div>
        <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———About Us———</div>
        <div style="display: flex">
          <div style="font-family: 楷体;font-size: 18pt;text-indent : 2em;letter-spacing:2px;padding-top: 50px;padding-bottom: 50px;margin:auto; max-width: 1200px;justify-content: center">“石家庄福缘护理院”位于元氏县马村镇聊村村西、风景秀丽的福瑞祥合颐养园内。护理院北距石家庄市区15公里，东临红旗大街南延线，西临南水北调水渠，交通便利。石家庄福缘护理院大楼建筑面积达7779.82平方米，包括地下一层至地上三层，配有四部电梯和一个步行梯。从地下一层到三层，每个楼层均装有闭门器，通向其他楼层的楼梯进行隔板隔离，整个护理院通道独立，自成一体。护理院设有内科、中医科、康复医学科三个独立的诊室，符合一人一诊室的要求。其中，门诊、药房及行政办公用房在护理院大楼东侧二层配楼，与病区隔离开。</div>
        </div>

      </el-row>
      <el-row>
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">选择福缘</div>
        <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———Choose Us———</div>
        <div style="display: flex">
          <div style="display: inline-block;font-family: 楷体;font-size: 18pt;letter-spacing:2px;padding-top: 50px;padding-bottom: 20px;margin:auto;" ><p style="max-width: 1100px;padding-left: 60px; text-indent: -1.7em;" v-html="'①&nbsp;&emsp;福缘养老院与医大一院元氏院区（三甲综合医院）、福缘护理院同处一个院区，资源共享，让每位老人享受从急诊重症到慢性病等长期护理的全方位服务。'"></p></div>
        </div>
        <div style="display: flex">
          <div style="font-family: 楷体;font-size: 18pt;text-indent : 20px;letter-spacing:2px;padding-top: 20px;padding-bottom: 20px;margin:auto;justify-content: center"><p style="max-width: 1100px;padding-left: 60px; text-indent: -1.7em;" v-html="'②&nbsp;&emsp;五星级宾馆环境，五星级服务设施，五星级服务关怀。福缘养老院按五星级养老院标准进行配置，每个房间都带有直供氧气的治疗带，配备独立卫生间、中央空调、电动医疗床，24小时热水，数字电视机，无线上网等设施。'"></p></div>
        </div>
        <div style="display: flex">
          <div style="font-family: 楷体;font-size: 18pt;text-indent : 20px;letter-spacing:2px;padding-top: 20px;padding-bottom: 50px;margin:auto; justify-content: center"><p style="max-width: 1100px;padding-left: 60px; text-indent: -1.7em;" v-html="'③&nbsp;&emsp;田园牧歌式的休养环境。南侧北沙河湿地，芦苇荡内荷花丛集、鱼翔浅底、钓者自娱，采菊东篱；西部300亩果园，苹果、葡萄、雪梨等各种应季水果应有尽有；菜畦耕作，让休养者找到回归田园的感觉。'"></p></div>
        </div>
      </el-row>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">环境设施</div>
        <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———Environments & Facilities———</div>
        <div style="display: flex;flex-wrap: wrap;justify-content: center">
          <div style="margin:20px">
            <img width="250px" :src="require('../../public/imgs/environment/13.jpg')">
            <div style="text-align: center">住院处</div>
          </div>
          <div style="margin:20px">
            <img width="250px" :src="require('../../public/imgs/environment/6.jpg')">
            <div style="text-align: center">护士站</div>
          </div>
          <div style="margin:20px">
            <img width="250px" :src="require('../../public/imgs/environment/7.jpg')">
            <div style="text-align: center">门诊区</div>
          </div>
          <div style="margin:20px">
            <img width="250px" :src="require('../../public/imgs/environment/21.jpg')">
            <div style="text-align: center">休息区</div>
          </div>
        </div>
        <div align="center" style="padding-bottom: 50px;padding-top: 50px">
          <el-button @click="Environment" type="info" plain>查看更多></el-button>
        </div>
      </el-row>



      <el-row >
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">最新资讯</div>
        <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———The Lastest News ———</div>
        <div style="display: flex;flex-wrap: wrap;justify-content: center">
          <div style="margin:20px;">
            <img style="max-width:400px;" :src="require('../../public/imgs/environment/1.jpg')">
            <div style="text-align: center;">福缘护理院</div>
          </div>

          <div style="margin:20px;">
            <div>
              <div style="display: inline-block; margin: 30px;font-size: 20px;" align="center">
                1
                <div style="font-size: 12px">2023-06</div>
              </div>
              <div style="display: inline-block;" >
                石家庄福缘护理院举行文艺演出
                <div style="margin-top: 10px;font-size: 10px"><p>2023年6月1日，福缘护理院为长者们带来了一场精彩纷呈的文艺演出！</p></div>
              </div>
            </div>
            <div>
              <div style="display: inline-block; margin: 30px;font-size: 20px;" align="center">
                11
                <div style="font-size: 12px">2023-02</div>
              </div>
              <div style="display: inline-block;" >
                石家庄福缘护理院举行xxxx大会
                <div style="margin-top: 10px;font-size: 10px"><p>2023年x月x日石家庄福缘护理院xxxx大会圆满举行！会议表彰了优秀员工及先进部门，并进行了多轮抽奖环节！</p></div>
              </div>
            </div>
            <div>
              <div style="display: inline-block; margin: 30px;font-size: 20px;" align="center">
                11
                <div style="font-size: 12px">2023-02</div>
              </div>
              <div style="display: inline-block;" >
                石家庄福缘护理院举行xxxx大会
                <div style="margin-top: 10px;font-size: 10px"><p>2023年x月x日石家庄福缘护理院xxxx大会圆满举行！会议表彰了优秀员工及先进部门，并进行了多轮抽奖环节！</p></div>
              </div>
            </div>
          </div>
        </div>
        <div align="center" style="padding-bottom: 50px;padding-top: 50px">
          <el-button @click="News" type="info" plain>查看更多></el-button>
        </div>

      </el-row>


      <div class="main" >
        <!-- 医院信息展示区域 -->
        <div>
          <div>
            <IntroList></IntroList>
          </div>
        </div>


        <!-- 手机商品展示区域 -->
        <!--
        <div class="phone">
          <div class="box-hd">
            <div class="title">手机特卖</div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/phone/phone.png'" />
              </router-link>
            </div>
            <div class="list">
              <MyList :list="phoneList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        -->

        <!-- 手机商品展示区域END -->

        <!-- 电视商品展示区域
        <div class="phone">
          <div class="box-hd">
            <div class="title">电视影音</div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/phone/phone.png'" />
              </router-link>
            </div>
            <div class="list">
              <MyList :list="miTvList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        -->

        <!-- 电视商品展示区域END -->

        <!-- 配件商品展示区域
        <div class="accessory" id="promo-menu">
          <div class="box-hd">
            <div class="title">热门商品</div>
            <div class="more" id="more">
              <MyMenu :val="3" @fromChild="getChildMsg2">
                <span slot="1">热门</span>
                <span slot="2">保护套</span>
                <span slot="3">充电器</span>
              </MyMenu>
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img :src="$target +'public/imgs/accessory/accessory-promo1.png'" alt />
                </li>
                <li>
                  <img :src="$target +'public/imgs/accessory/accessory-promo2.png'" alt />
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="accessoryList" :isMore="true"></MyList>
            </div>
          </div>
        </div>

        -->
        <!-- 配件商品展示区域END -->

      </div>
    </div>
  </div>
</template>
<script>
import IntroList from "@/components/IntroList";
export default {
  components: {IntroList},
  data() {
    return {
      carousel: "", // 轮播图数据
      phoneList: "", // 手机商品列表
      miTvList: "", // 小米电视商品列表
      // applianceList: "", // 家电商品列表
      // applianceHotList: "", //热门家电商品列表
      accessoryList: "", //配件商品列表
      accessoryHotList: "", //热门配件商品列表
      protectingShellList: "", // 保护套商品列表
      chargerList: "", //充电器商品列表
      applianceActive: 1, // 家电当前选中的商品分类
      accessoryActive: 1, // 配件当前选中的商品分类
      bannerHeight: 0,
    };
  },
  watch: {
    // // 家电当前选中的商品分类，响应不同的商品数据
    // applianceActive: function(val) {
    //   // 页面初始化的时候把applianceHotList(热门家电商品列表)直接赋值给applianceList(家电商品列表)
    //   // 所以在切换商品列表时判断applianceHotList是否为空,为空则是第一次切换,把applianceList赋值给applianceHotList
    //   if (this.applianceHotList == "") {
    //     this.applianceHotList = this.applianceList;
    //   }
    //   if (val == 1) {
    //     // 1为热门商品
    //     this.applianceList = this.applianceHotList;
    //     return;
    //   }
    //   if (val == 2) {
    //     // 2为电视商品
    //     this.applianceList = this.miTvList;
    //     return;
    //   }
    // },
    accessoryActive: function(val) {
      // 页面初始化的时候把accessoryHotList(热门配件商品列表)直接赋值给accessoryList(配件商品列表)
      // 所以在切换商品列表时判断accessoryHotList是否为空,为空则是第一次切换,把accessoryList赋值给accessoryHotList
      if (this.accessoryHotList == "") {
        this.accessoryHotList = this.accessoryList;
      }
      if (val == 1) {
        // 1为热门商品
        this.accessoryList = this.accessoryHotList;
        return;
      }
      if (val == 2) {
        // 2为保护套商品
        this.accessoryList = this.protectingShellList;
        return;
      }
      if (val == 3) {
        //3 为充电器商品
        this.accessoryList = this.chargerList;
        return;
      }
    }
  },
  created() {
    // 获取轮播图数据
    this.$axios
      .get("/api/resources/carousel", {})
      .then(res => {
        this.carousel = res.data.data;
        // console.log(res)
      })
      .catch(err => {
        return Promise.reject(err);
      });
    // 获取各类商品数据
    this.getPromo(1, "phoneList");
    this.getPromo(2, "miTvList");
    this.getPromo(5, "protectingShellList");
    this.getPromo(7, "chargerList");
    // this.getHot(
    //   "applianceList"
    // );
    this.getHot(
      "accessoryList"
    );
  },
  mounted() {
    // 首次加载时,初始化高度
    this.screenWidth = window.innerWidth
    this.bannerHeight = 600 / 1550 * this.screenWidth
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.bannerHeight = 600 / 1550 * this.screenWidth
    }
  },
  methods: {
    // 获取家电模块子组件传过来的数据
    // getChildMsg(val) {
    //   this.applianceActive = val;
    // },
    // 获取配件模块子组件传过来的数据
    getChildMsg2(val) {
      this.accessoryActive = val;
    },
    contactus(){
      this.$router.push('/contactus')
    },
    Environment(){
      this.$router.push('/env')
    },
    News(){
      this.$router.push('/news')
    },
    // 获取各类商品数据方法封装
    getPromo(categoryId, val) {
      let api = "/api/product/category/limit/" + categoryId;
      this.$axios
        .get(api)
        .then(res => {
          this[val] = res.data.data;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    getHot(val) {
      let api = "/api/product/category/hot";
      this.$axios
        .get(api)
        .then(res => {
          this[val] = res.data.data;

        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  }
};
</script>
<style scoped>
.main-box {
  background-color: #FFFfff;
  padding-bottom: 20px;
}

.main {
  margin: 0 auto;
  max-width: 80%;
}

/* 轮播图CSS */
.block {
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 轮播图CSS END */

.box-hd {
  height: 58px;
  margin: 20px 0 0 0;
}

.box-hd .title {
  float: left;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.box-hd .more {
  float: right;
}

.box-hd .more a {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
}

.box-hd .more a:hover {
  color: #ff6700;
}

.box-bd {
  height: 615px;
}

.box-bd .promo-list {
  float: left;
  height: 615px;
  width: 234px;
}

.box-bd .promo-list li {
  z-index: 1;
  width: 234px;
  height: 300px;
  margin-bottom: 14.5px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.box-bd .promo-list li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}

.box-bd .promo-list li img {
  width: 234px;
  height: 300px;
}

.box-bd .promo-list img {
  width: 234px;
}

.box-bd .list {
  float: left;
  height: 615px;
  width: 991px;
}
</style>