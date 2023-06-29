<template>
  <div>
    <img :src="require('../../public/imgs/ContactUs/contact.jpg')">
    <div>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">环境设施</div>
        <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———Environments & Facilities———</div>
        <div align="center" style="font-size: 20px;margin-top: 20px;">
          <div align="center" style="padding-bottom: 50px;padding-top: 10px">
            <el-button @click="KangfuEnv" type="info" plain>康复设备></el-button>
            <el-button @click="HuliEnv" type="info" plain>护理院环境></el-button>
          </div>
        </div>
      </el-row>
    </div>
    <div style="display: flex;flex-wrap: wrap;justify-content: center;max-width: 1200px; margin: auto">
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url"
            :preview-src-list="srcList">
        </el-image>
        <div style="text-align: center">门诊楼</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url2"
            :preview-src-list="srcList2">
        </el-image>
        <div style="text-align: center">花海</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url3"
            :preview-src-list="srcList3">
        </el-image>
        <div style="text-align: center">办公区</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px;"
            :src="url4"
            :preview-src-list="srcList4">
        </el-image>
        <div style="text-align: center">福缘护理院</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url13"
            :preview-src-list="srcList13">
        </el-image>
        <div style="text-align: center">住院处</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url6"
            :preview-src-list="srcList6">
        </el-image>
        <div style="text-align: center">护士站</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url7"
            :preview-src-list="srcList7">
        </el-image>
        <div style="text-align: center">门诊区</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url21"
            :preview-src-list="srcList21">
        </el-image>
        <div style="text-align: center">休息区</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require('../../public/imgs/environment/1.jpg'),
      srcList: [
        require('../../public/imgs/environment/1.jpg'),
      ],
      url2: require('../../public/imgs/environment/2.jpg'),
      srcList2: [
        require('../../public/imgs/environment/2.jpg'),
      ],
      url3: require('../../public/imgs/environment/3.jpg'),
      srcList3: [
        require('../../public/imgs/environment/3.jpg'),
      ],
      url4: require('../../public/imgs/environment/4.jpg'),
      srcList4: [
        require('../../public/imgs/environment/4.jpg'),
      ],
      url13: require('../../public/imgs/environment/13.jpg'),
      srcList13: [
        require('../../public/imgs/environment/13.jpg'),
      ],
      url6: require('../../public/imgs/environment/6.jpg'),
      srcList6: [
        require('../../public/imgs/environment/6.jpg'),
      ],
      url7: require('../../public/imgs/environment/7.jpg'),
      srcList7: [
        require('../../public/imgs/environment/7.jpg'),
      ],
      url21: require('../../public/imgs/environment/21.jpg'),
      srcList21: [
        require('../../public/imgs/environment/21.jpg'),
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
    KangfuEnv(){
      this.$router.push('/env/kangfu')
    },
    HuliEnv(){
      this.$router.push('/env/huli')
    }
  }
};

</script>
