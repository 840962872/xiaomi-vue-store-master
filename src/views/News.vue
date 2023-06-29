<template>
  <div>
    <img :src="require('../../public/imgs/ContactUs/contact.jpg')">
    <div>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">福缘新闻</div>
        <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———News———</div>
      </el-row>
    </div>

    <div style="display: flex;flex-wrap: wrap;justify-content: center;max-width: 1200px; margin: auto">
      <div style="margin:20px">
        <el-image style="width: 250px" :src="require('../../public/imgs/news/new1.jpg')" :preview-src-list="srcList"></el-image>

        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年6月1日，福缘护理院为长者们带来了一场精彩纷呈的文艺演出！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
      <div style="margin:20px">
        <img width="250px" :src="require('../../public/imgs/environment/1.jpg')">
        <div style="text-align: left;font-family: 华文行楷;font-size: 20px">福缘护理院</div>
        <div style="text-align: center;max-width: 250px" >2023年X月X日是学雷锋日，志愿者们为福缘护理院长者们带来了一场精彩纷呈的慰问演出及义剪活动！</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      srcList: [
        require('../../public/imgs/news/new1.jpg'),
        require('../../public/imgs/news/new2.jpg'),
        require('../../public/imgs/news/new3.jpg'),
        require('../../public/imgs/news/new4.jpg'),

      ],
    }
  }
}
</script>