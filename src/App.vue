<!--
 * @Description: 项目根组件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-12 19:30:36
 -->
<template>
  <div id="app" name="app">
    <el-container style="">


      <!-- 顶部导航栏 -->
      <!--
      <div class="topbar">
        <div class="nav" >
          <ul>
            <li v-if="!this.$store.getters.getUser">
              <el-button type="text" @click="login">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text" @click="register = true">注册</el-button>
            </li>
            <li v-else>
              欢迎
              <el-popover placement="top" width="180" v-model="visible">
                <p>确定退出登录吗？</p>
                <div style="text-align: right; margin: 10px 0 0">
                  <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="logout">确定</el-button>
                </div>
                <el-button type="text" slot="reference">{{this.$store.getters.getUser.username}}</el-button>
              </el-popover>
            </li>
            <li>
              <router-link to="/order">我的订单</router-link>
            </li>
            <li>
              <router-link to="/collect">我的收藏</router-link>
            </li>
            <li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
              <router-link to="/shoppingCart">
                <i class="el-icon-shopping-cart-full"></i> 购物车
                <span class="num">({{getNum}})</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      -->
      <!-- 顶部导航栏END -->

      <!-- 顶栏容器 -->
      <el-header  style="display: flex; height: 100%; flex-wrap: wrap; justify-content: center;align-items: center">
        <div class="logo">
          <router-link to="/">
            <img src="./assets/imgs/logo.jpg" width="100px" height="100px" alt />
          </router-link>
        </div>
        <div style="margin-right: 0px">
          <router-link to="/">
            <img src="./assets/imgs/home.jpg" width="80%" height="80px" />
          </router-link>
        </div>
        <div style="font-size: 80px; color: #0366d6" >
          <i class="el-icon-first-aid-kit" ></i>
        </div>
        <div style="font-size: 20px;width: 60px; margin-right: 20px; color: #0366d6;">医养康共同体</div>
        <div style="font-size: 80px; color: #0366d6" >
          <i class="el-icon-phone-outline" ></i>
        </div>
        <div style="font-size: 13px;width: 60px; color: black;">咨询电话
          <div style="font-size: 20px;width: 60px; color: #0366d6;">84546120</div>
          <div style="font-size: 20px;width: 60px; color: #0366d6;">18003213705</div>
        </div>
        <div style="margin-left: 5%;font-size: 80px; color: #0366d6" >
          <i class="el-icon-paperclip" ></i>
        </div>
        <div style="font-size: 20px; color: #0366d6;" >
          <a href="https://www.jyyy.com.cn/" target="_blank">

            河北医科大学第一医院
          </a>
        </div>



      </el-header>


      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#0366d6"
          router
          text-color="#fff"
          style="display: flex; height: 100%;background-color: rgba(132,174,231,0.99); flex-wrap: wrap; justify-content: center;align-items: center"
      >

        <div ><el-menu-item index="/" style="font-size: 20px; margin-right: 20px;margin-left: 20px" >福缘首页</el-menu-item> </div>
        <div ><el-menu-item index="/goods" style="font-size: 20px;margin-right: 20px;margin-left: 20px">关于福缘</el-menu-item> </div>
        <div ><el-menu-item index="/seckill" style="font-size: 20px;margin-right: 20px;margin-left: 20px">接收人群</el-menu-item> </div>
        <div ><el-menu-item index="/env" style="font-size: 20px;margin-right: 20px;margin-left: 20px">环境设施</el-menu-item> </div>
        <div ><el-menu-item index="/teams" style="font-size: 20px;margin-right: 20px;margin-left: 20px">专家团队</el-menu-item> </div>
        <div ><el-menu-item index="/news" style="font-size: 20px;margin-right: 20px;margin-left: 20px">福缘新闻</el-menu-item> </div>
        <div ><el-menu-item index="/careers" style="font-size: 20px;margin-right: 20px;margin-left: 20px">招贤纳士</el-menu-item> </div>
        <div ><el-menu-item index="/contactus" style="font-size: 20px;margin-right: 10px;margin-left: 10px">联系我们</el-menu-item> </div>


        <!--
         <div class="so" style="float: right">
          <el-input placeholder="请输入搜索内容" v-model="search">
            <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
          </el-input>
        </div>
         -->


      </el-menu>
      <!-- 顶栏容器END -->

      <!-- 登录模块 -->
      <MyLogin></MyLogin>
      <!-- 注册模块 -->
      <MyRegister :register="register" @fromChild="isRegister"></MyRegister>

      <!-- 主要区域容器 -->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!-- 主要区域容器END -->

      <!-- 底栏容器 -->
      <el-footer>
        <div class="footer">
          <div class="ng-promise-box">
            <div class="ng-promise">
              <p class="text">
                <a class="icon1" href="javascript:;">医护共同体</a>
                <a class="icon2" href="javascript:;">资源共享</a>
                <a class="icon3" style="margin-right: 0" href="javascript:;">100%品质保证</a>
              </p>
            </div>
          </div>
          <!--
          <div class="github">
            <a href="https://github.com/840962872/fuyuan-vue" target="_blank">
              <div class="github-but"></div>
            </a>
          </div>
          -->
          <div class="mod_help">
            <p>
              <router-link to="/">首页</router-link>
              <span>|</span>
              <router-link to="/goods">关于福缘</router-link>
              <span>|</span>
              <router-link to="/teams">专家团队</router-link>
              <span>|</span>
              <router-link to="/news">福缘新闻</router-link>
              <span>|</span>
              <router-link to="/env">环境设施</router-link>
              <span>|</span>
              <router-link to="/contactus">联系我们</router-link>
            </p>
            <p class="coty">最终版权归福缘所有 &copy; 2022-2023</p>
          </div>
        </div>
      </el-footer>
      <!-- 底栏容器END -->
    </el-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  beforeUpdate() {
    this.activeIndex = this.$route.path;
  },
  data() {
    return {
      activeIndex: "", // 头部导航栏选中的标签
      search: "", // 搜索条件
      register: false, // 是否显示注册组件
      visible: false // 是否退出登录
    };
  },
  created() {
    // 对用户信息进行校验，并刷新cookie
    if (this.getCookie('XM_TOKEN') != null) {
      //console.log(this.getCookie)
      this.$axios
        .get("/api/user/token")
        .then(res => {
          if (res.data.code === "001") {
            // 001 为成功
            this.setUser(res.data.data);
          }
        });
      let cookie = this.getCookie('XM_TOKEN');
      let user = {};
      user.userId = cookie.split("|")[1];
      user.username = cookie.split("|")[2];
      this.setUser(user);
    }
    if (this.getCookie('XM_TOKEN') == null){
      //console.log('token是空的！！！！！！')
    }

    // window.setTimeout(() => {
    //   this.$message({
    //     duration: 0,
    //     showClose: true,
    //     message: `
    //     <p>如果觉得这个项目还不错，</p>
    //     <p style="padding:10px 0">您可以给项目源代码仓库点Star支持一下，谢谢！</p>
    //     <p><a href="https://github.com/hai-27/vue-store" target="_blank">Github传送门</a></p>`,
    //     dangerouslyUseHTMLString: true,
    //     type: "success"
    //   });
    // }, 1000 * 60);
  },
  computed: {
    ...mapGetters(["getUser", "getNum"])
  },
  watch: {
    // 获取vuex的登录状态
    getUser: function(val) {
      if (val === "") {
        // 用户没有登录
        this.setShoppingCart([]);
      } else {
        // 用户已经登录,获取该用户的购物车信息
        this.$axios
          .get("/api/cart/user/" + val.userId)
          .then(res => {
            if (res.data.code === "001") {
              // 001 为成功, 更新vuex购物车状态
              this.setShoppingCart(res.data.data);
            } else {
              // 提示失败信息
              this.notifyError(res.data.msg);
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }
    }
  },
  methods: {
    ...mapActions(["setUser", "setShowLogin", "setShoppingCart"]),
    login() {
      // 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
      this.setShowLogin(true);
    },
    // 退出登录
    logout() {
      this.visible = false;
      // 清空cookie中的token
      this.delCookie("XM_TOKEN");
      // 清空vuex登录信息
      this.setUser("");
      this.notifySucceed("成功退出登录");
    },
    // 接收注册子组件传过来的数据
    isRegister(val) {
      this.register = val;
    },
    // 点击搜索按钮
    searchClick() {
      if (this.search != "") {
        // 跳转到全部商品页面,并传递搜索条件
        this.$router.push({ path: "/goods", query: { search: this.search } });
        this.search = "";
      }
    },
    getCookie(name) { //获取指定名称的cookie值
      // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
      let arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
      if(arr != null) {
        return unescape(arr[2]);
      }
      return null;
    },
    delCookie(name) {
      let exp = new Date();
      exp.setTime(exp.getTime() - 1);
      let cval = this.getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  }
};
</script>

<style>
/* 全局CSS */
* {
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}
#app .el-header {
  padding: 0;
}
#app .el-main {
  min-height: 300px;
  padding: 0px 0;
}
#app .el-footer {
  padding: 0;
}

a,
a:hover {
  text-decoration: none;
}
/* 全局CSS END */

/* 顶部导航栏CSS */
.topbar {
  height: 45px;
  background-color: #3d3d3d;
  margin-bottom: 0px;
}
.topbar .nav {
  width: 100%;
  margin: 0 auto;
}
.topbar .nav ul {
  float: right;
}
.topbar .nav li {
  float: left;
  height: 40px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}
.topbar .nav .sep {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 5px;
}
.topbar .nav li .el-button {
  color: #b0b0b0;
}
.topbar .nav .el-button:hover {
  color: #fff;
}
.topbar .nav li a {
  color: #b0b0b0;
}
.topbar .nav a:hover {
  color: #fff;
}
.topbar .nav .shopCart {
  width: 120px;
  background: #424242;
}
.topbar .nav .shopCart:hover {
  background: #fff;
}
.topbar .nav .shopCart:hover a {
  color: #ff6700;
}
.topbar .nav .shopCart-full {
  width: 120px;
  background: #ff6700;
}
.topbar .nav .shopCart-full a {
  color: white;
}
/* 顶部导航栏CSS END */

/* 顶栏容器CSS */
.el-header .el-menu {
  max-width: 1225px;
  margin: 0 auto;
}
.el-header .logo {
  float: left;
  margin: 10px;
  display: flex;
}
.el-header .so {
  margin-top: 10px;
  width: 200px;
  float: right;
}
/* 顶栏容器CSS END */

/* 底栏容器CSS */
.footer {
  width: 100%;
  text-align: center;
  background: rgba(132, 174, 231, 0.99);
  padding-bottom: 20px;
}
.footer .ng-promise-box {
  margin: 0 auto;
  border-bottom: 2px solid #ffffff;
  line-height: 80px;
}
.footer .ng-promise-box .ng-promise p a {
  color: #fff;
  font-size: 20px;
  margin-right: 210px;
  padding-left: 44px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  text-decoration: none;
  background: url("./assets/imgs/us-icon.png") no-repeat left 0;
}
.footer .github {
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
}
.footer .github .github-but {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background: url("./assets/imgs/github.png") no-repeat;
}
.footer .mod_help {
  text-align: center;
  color: #ffffff;
}
.footer .mod_help p {
  margin: 20px 0 16px 0;
}

.footer .mod_help p a {
  color: #ffffff;
  text-decoration: none;
}
.footer .mod_help p a:hover {
  color: #fff;
}
.footer .mod_help p span {
  padding: 0 22px;
}
/* 底栏容器CSS END */

</style>