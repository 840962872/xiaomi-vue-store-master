<template>
  <div style="text-align: center; padding: 0px 20px;">
    <div>
      <el-row style="background-color: rgba(241,239,239,0.36)">
        <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">接收人群</div>
        <div align="center" style="font-size: 15px;margin-top: 10px;font-family: 'Times New Roman'">———Nursing home residents———</div>
        <div align="center" style="font-size: 20px;margin-top: 20px;">
        </div>
      </el-row>
    </div>
    <p style="margin: 35px;font-family: 楷体;font-size: 18pt; text-indent: 10px; letter-spacing: 5px;  text-indent: 2.5em; text-align:justify;">
      主要收治失智、半失能、全失能、各种术后、植物状态、肿瘤晚期、临终关怀、各种慢性病患者，提供药物治疗、中医传统康复、现代康复、心理治疗、营养治疗、
    专业护理等综合治疗，桥接综合医院重症监护室转来生命体征平稳需要进一步康复患者。护理院为石家庄市医保定点单位，遵循医保政策为患者提供中长期康复护理服务。</p>

    <div class="project_content2">
      <div class="newBox">
        <h4 class="text2">医疗就诊 &middot; 康复护理 &middot; 持续照护</h4>
        <div class="project_content2_text">
          <div class="ptct2t"><img src="../assets/imgs/logo.jpg" alt="" />
          </div>
          <i>&nbsp;</i></div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>

.project_content2 {
  background: url(../../public/imgs/environment/hu14.jpg) no-repeat center center;
  background-size: cover;
  padding-top: 90px;
  padding-bottom: 150px;
}
.text2 {
  color: #333;
  line-height: 76px;
  position: relative;
}

.text2::after {
  content: "";
  width: 38px;
  height: 3px;
  background: #79be47;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
.project_content2_text {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  margin-top: 110px;
  border-radius: 50%;
  position: relative;
}
.project_content2_text::after {
  content: "";
  display: block;
  width: 120%;
  height: 120%;
  background-color: #79be47;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -moz-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  -o-transform: translateY(-50%) translateX(-50%);
  z-index: 0;
}
.project_content2_text::before {
  content: "";
  display: block;
  width: 150%;
  height: 150%;
  background-color: #79be47;
  border-radius: 50%;
  opacity: 0.2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -moz-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  -o-transform: translateY(-50%) translateX(-50%);
  z-index: 0;
}
.project_content2_text i {
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -moz-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  -o-transform: translateY(-50%) translateX(-50%);
  z-index: 99;
}
.ptct2t {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  z-index: 100;
}
.ptct2t img {
  max-width: 70%;
}
.ptct2t p {
  color: rgb(0, 140, 255);
  display: none;
}
</style>