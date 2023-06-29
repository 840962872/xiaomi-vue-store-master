<template>
  <div>
    <img :src="require('../../public/imgs/ContactUs/contact.jpg')">
    <div>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">环境设施</div>
        <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———Environment———</div>
        <div align="center" style="font-size: 20px;margin-top: 20px;">
          <div align="center" style="padding-bottom: 50px;padding-top: 10px">
            <el-button @click="GoBack" type="info" plain>返回></el-button>
            <el-button @click="HuliEnv" type="info" plain>护理院环境></el-button>
          </div>
        </div>
      </el-row>
    </div>

    <div style="display: flex;flex-wrap: wrap;justify-content: center;max-width: 1200px; margin: auto">
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url4"
            :preview-src-list="srcList4">
        </el-image>
        <div style="text-align: center">心电图仪</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url22"
            :preview-src-list="srcList22">
        </el-image>
        <div style="text-align: center">制氧仪</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url7"
            :preview-src-list="srcList7">
        </el-image>
        <div style="text-align: center">测量仪</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px;"
            :src="url19"
            :preview-src-list="srcList19">
        </el-image>
        <div style="text-align: center">康复床</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url9"
            :preview-src-list="srcList9">
        </el-image>
        <div style="text-align: center">立体动态干扰电治疗仪</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url10"
            :preview-src-list="srcList10">
        </el-image>
        <div style="text-align: center">极超短波治疗机</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url15"
            :preview-src-list="srcList15">
        </el-image>
        <div style="text-align: center">平衡训练装置</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url8"
            :preview-src-list="srcList8">
        </el-image>
        <div style="text-align: center">电脑中频治疗仪</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url4: require('../../public/imgs/Kangfu/4.jpg'),
      srcList4: [
        require('../../public/imgs/Kangfu/4.jpg'),
      ],
      url22: require('../../public/imgs/Kangfu/22.jpg'),
      srcList22: [
        require('../../public/imgs/Kangfu/22.jpg'),
      ],
      url7: require('../../public/imgs/Kangfu/7.jpg'),
      srcList7: [
        require('../../public/imgs/Kangfu/7.jpg'),
      ],
      url8: require('../../public/imgs/Kangfu/8.jpg'),
      srcList8: [
        require('../../public/imgs/Kangfu/8.jpg'),
      ],
      url9: require('../../public/imgs/Kangfu/9.jpg'),
      srcList9: [
        require('../../public/imgs/Kangfu/9.jpg'),
      ],
      url10: require('../../public/imgs/Kangfu/10.jpg'),
      srcList10: [
        require('../../public/imgs/Kangfu/10.jpg'),
      ],
      url15: require('../../public/imgs/Kangfu/15.jpg'),
      srcList15: [
        require('../../public/imgs/Kangfu/15.jpg'),
      ],
      url19: require('../../public/imgs/Kangfu/19.jpg'),
      srcList19: [
        require('../../public/imgs/Kangfu/19.jpg'),
      ],

    };
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
    HuliEnv(){
      this.$router.push('/env/huli')
    },
    GoBack(){
      this.$router.push('/env')
    },
  }
};

</script>
