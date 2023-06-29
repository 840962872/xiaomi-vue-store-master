<template>
  <div>
    <img :src="require('../../public/imgs/ContactUs/contact.jpg')">
    <div>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">环境设施</div>
        <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———Environment———</div>
        <div align="center" style="font-size: 20px;margin-top: 20px;">
          <div align="center" style="padding-bottom: 50px;padding-top: 10px">
            <el-button @click="KangfuEnv" type="info" plain>康复设备></el-button>
            <el-button @click="GoBack" type="info" plain>返回></el-button>
          </div>
        </div>
      </el-row>
    </div>

    <div style="display: flex;flex-wrap: wrap;justify-content: center;max-width: 1200px; margin: auto">
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url23"
            :preview-src-list="srcList23">
        </el-image>
        <div style="text-align: center">油菜花海</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url21"
            :preview-src-list="srcList21">
        </el-image>
        <div style="text-align: center">休息环境</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url18"
            :preview-src-list="srcList18">
        </el-image>
        <div style="text-align: center">独立卫浴</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url17"
            :preview-src-list="srcList17">
        </el-image>
        <div style="text-align: center">休息设备</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url12"
            :preview-src-list="srcList12">
        </el-image>
        <div style="text-align: center">电视</div>
      </div>
      <div style="margin:20px">
        <el-image
            style="width: 250px; "
            :src="url25"
            :preview-src-list="srcList25">
        </el-image>
        <div style="text-align: center">果园</div>
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
            style="width: 250px; "
            :src="url24"
            :preview-src-list="srcList24">
        </el-image>
        <div style="text-align: center">室外环境</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url23: require('../../public/imgs/environment/23.jpg'),
      srcList23: [
        require('../../public/imgs/environment/23.jpg'),
      ],
      url21: require('../../public/imgs/environment/21.jpg'),
      srcList21: [
        require('../../public/imgs/environment/21.jpg'),
      ],
      url18: require('../../public/imgs/environment/18.jpg'),
      srcList18: [
        require('../../public/imgs/environment/18.jpg'),
      ],
      url17: require('../../public/imgs/environment/17.jpg'),
      srcList17: [
        require('../../public/imgs/environment/17.jpg'),
      ],
      url12: require('../../public/imgs/environment/12.jpg'),
      srcList12: [
        require('../../public/imgs/environment/12.jpg'),
      ],
      url25: require('../../public/imgs/environment/25.jpg'),
      srcList25: [
        require('../../public/imgs/environment/25.jpg'),
      ],
      url3: require('../../public/imgs/environment/3.jpg'),
      srcList3: [
        require('../../public/imgs/environment/3.jpg'),
      ],
      url24: require('../../public/imgs/environment/24.jpg'),
      srcList24: [
        require('../../public/imgs/environment/24.jpg'),
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
    GoBack(){
      this.$router.push('/env')
    },
  },
};

</script>
