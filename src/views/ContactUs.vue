<template>
  <div>
    <img :src="require('../../public/imgs/ContactUs/contact.jpg')">
    <div>
      <div>
        <el-row style="background-color: rgba(241,239,239,0.36)">
          <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">石家庄福缘护理院</div>
          <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———FUYUAN———</div>
          <div align="center" style="font-size: 20px;margin-top: 20px;">咨询热线①：84546120</div>
          <div align="center" style="font-size: 20px;margin-top: 20px;">咨询热线②：18003213705</div>
          <div align="center" style="font-size: 20px;margin-top: 20px;">地址：河北省石家庄市红旗北大街790号河北医科大学元氏院区（元氏县聊村）</div>
          <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">交通路线</div>
          <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———Transportation———</div>
          <div align="center" style="font-size: 20px;margin-top: 20px;">公交：福缘养老院可提供大巴车乘坐</div>
          <div align="center" style="font-size: 20px;margin-top: 20px;">自驾：河北省石家庄市河北医科大学元氏院区</div>
          <div style="display: flex">
            <div style="font-family: 楷体;font-size:18pt;text-indent : 2em;letter-spacing:2px;padding-top: 50px;padding-bottom: 50px;margin:auto; max-width: 1200px;justify-content: center">“石家庄福缘护理院”位于元氏县马村镇聊村村西、风景秀丽的福瑞祥合颐养园内。护理院北距石家庄市区15公里，东临红旗大街南延线，西临南水北调水渠，交通便利。石家庄福缘护理院大楼建筑面积达7779.82平方米，包括地下一层至地上三层，配有四部电梯和一个步行梯。从地下一层到三层，每个楼层均装有闭门器，通向其他楼层的楼梯进行隔板隔离，整个护理院通道独立，自成一体。护理院设有内科、中医科、康复医学科三个独立的诊室，符合一人一诊室的要求。其中，门诊、药房及行政办公用房在护理院大楼东侧二层配楼，与病区隔离开。</div>
          </div>
        </el-row>
      </div>
      <baidu-map
          class="map"
          :center="center" :zoom="zoom"
          :scroll-wheel-zoom="true"
          @ready="handler"
          style="height: 500px; width: 1200px;margin: auto" >
        <bm-marker :position="markerPoint" :dragging="dragging"
                   :raiseOnDrag="raiseOnDrag" animation="BMAP_ANIMATION_BOUNCE"
                   :icon="{url: pointIcon, size: {width: 30, height: 30}}">
        </bm-marker>

        <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" ></bm-city-list>
      </baidu-map>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return{
      center: {lng: 0, lat: 0},
      zoom: 3,
      map: null,
      BMap: null,

      markerPoint: {lng: 118.7995, lat: 31.9663}, // 点的位置
      dragging: true, // 是否可以拖拽点
      raiseOnDrag: true, // 拖拽时是否有动画效果
      pointIcon: require('../../public/point.jpg')
    }
  },
  methods:{
    handler ({BMap, map}) {
      this.map = map
      this.BMap = BMap
      this.center.lng = 114.47942
      this.center.lat = 37.87617
      this.zoom = 20
    },
  }
}
</script>
<style>

</style>