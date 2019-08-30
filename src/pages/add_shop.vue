<template>
    <div>
            <el-form 
            :model="ruleForm" :rules="rules"
            ref="ruleForm" label-width="100px"
            class="demo-ruleForm"
            @click.native="closeAddress"
            entype = "multipart/form-data"
            action = "http://localhost:3000/shop"
            method = "POST"
              >
                <el-form-item label="店铺名称" prop="shop_name">
                    <el-input v-model="ruleForm.shop_name" name="shop_name"></el-input>
                </el-form-item>
                 <el-form-item label="店铺地址" prop="shop_address">
                    <el-input
                    
                     v-model="ruleForm.shop_address"
                     @input.native="getAddress"
                     name="shop_address"
                     ></el-input>
                     <el-card class="box-card"
                     v-show="address_flag"
                     >
                    <div v-for="(item,index) in get_shop_address_data"
                     :key="item.latitude" 
                     class="text item"
                     :class="[address_index===index?'address_active':'']"
                     @mouseover="changeAddressIndex(index)"
                     @click="addressShow( item.address)"
                     >
                      {{item.address }}
                    </div>
                  </el-card>
                </el-form-item>
                 <el-form-item label="联系电话" prop="phone_number">
                    <el-input v-model="ruleForm.phone_number" name="phone_number"></el-input>
                </el-form-item>
                 <el-form-item label="店铺简介" prop="shop_info">
                    <el-input v-model="ruleForm.shop_info" name="shop_info"></el-input>
                </el-form-item>
                 <el-form-item label="店铺标语" prop="shop_slogan">
                    <el-input v-model="ruleForm.shop_slogan" name="shop_slogan"></el-input>
                </el-form-item>
                <el-form-item label = "店铺分类">
                    <Cascader :data="options"  name = "shop_category"></Cascader>
                </el-form-item>
                <el-form-item label="活动区域" prop="shop_area">
                    <el-select v-model="ruleForm.shop_area" placeholder="请选择活动区域" name="shop_area">
                    <el-option label="北京" value="北京"></el-option>
                    <el-option label="杭州" value="杭州"></el-option>
                    <el-option label="南京" value="南京"></el-option>
                    <el-option label="郑州" value="郑州"></el-option>
                    <el-option label="上海" value="上海"></el-option>
                    <el-option label="太原" value="太原"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="店铺特点" prop="delivery">
                    <div
                      v-for ='(item,index) in shop_feature'
                      :key = "item.id"
                    >
                      {{ item.text }} 
                      <iv-switch size="large"
                      v-model = "item.flag"
                      :name = "'shop_feature_flag_' + index"
                      >
                          <span slot="open">ON</span>
                          <span slot="close">OFF</span>
                      </iv-switch>
                    </div>
                </el-form-item>
                <el-form-item label="配送费">
                  <el-input-number v-model="delivery_cost" name="delivery_cost"  :min="1" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="营业时间">
                      <el-time-select
                        placeholder="起始时间"
                        v-model="startTime"
                        name = "shop_start_time"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30'
                        }">
                      </el-time-select>
                      <el-time-select
                        placeholder="结束时间"
                        v-model="endTime"
                        name = "shop_end_time"
                        :picker-options="{
                          start: '08:30',
                          step: '00:15',
                          end: '18:30',
                          minTime: startTime
                        }">
                      </el-time-select>
                </el-form-item>
                <el-form-item label="头像上传">
                  <input type="file" name="shop_logo" id="">
                </el-form-item>
                <el-form-item label="营业执照">
                  <input type="file" name="business_license" id="">
                </el-form-item>
                <el-form-item label="许可证">
                  <input type="file" name="catering_license" id="">
                </el-form-item>
                <el-form-item>
                    <button type = 'button' @click = "submitForm"> 立即添加 </button>
                </el-form-item>
                </el-form>
    </div>
</template>

<script>
import { Switch,Col,Row,TimePicker,Cascader } from 'iview'
import { mapActions,mapGetters} from 'vuex'
  export default {
    components:{
      'iv-switch': Switch,
        'iv-col':Col,
          Row,TimePicker,Cascader
    },
    data() {
      return {
        address_flag:false,
        address_index:0,
        startTime:'',
        endTime:'',
        imageUrl: '',
        ruleForm: {
          shop_name: '',
          shop_address: '',
          phone_number:'',
          shop_info:'',
          shop_slogn:'',
          shop_area:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        shop_feature: [
          {
            id: 1,
            text: '品牌保证',
            flag: false
          },
          {
            id: 2,
            text: '蜂鸟专送',
            flag: false
          },
          {
            id: 3,
            text: '新开店铺',
            flag: false
          },
          {
            id: 4,
            text: '外卖保',
            flag: false
          },
          {
            id: 5,
            text: '准时达',
            flag: false
          },
          {
            id: 6,
            text: '开发票',
            flag: false
          }
        ],
        delivery_cost:4,
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
          value: [],
        options: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
      };
    },
    computed:{
        ...mapGetters(['get_shop_address_data','get_shop_categroy_data'])
    },
    methods: {
      ...mapActions(['getShopAddress','getShopCategroy']),
      getAddress(){
        this.address_flag=true
        setTimeout(()=>{
          this.getShopAddress( this.ruleForm.shop_address)
        },1000)
      },
      changeAddressIndex( index){
        this.address_index=index
      },
      addressShow( address ){
        this.ruleForm.shop_address=address
      },
      closeAddress(){
         this.address_flag=false
      },
      submitForm() {
        var options = {
              "beforeSubmit" : this.checkForm,
              "success" : this.resultForm,
              "resetForm" : true,
              "dataType" : "json"
          };
          $(".demo-ruleForm").ajaxSubmit(options);


      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    
    },
    created(){
      this.getShopCategroy()
    }
  }
</script>
<style lang="stylus" scoped>
  .avatar-uploader 
    .el-upload 
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden
      border 1px dashed red
    
  .avatar-uploader 
    .el-upload
    &:hover 
      border-color #409EFF
    
  .avatar-uploader-icon 
    font-size 28px
    color #8c939d
    width 178px
    height 178px
    line-height 178px
    text-align center
  
  .avatar 
    width 178px
    height 178px
    display block

  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demo-ruleForm{
    width: 650px;
  }
  .address_active
      background  #ccc
      color:black
</style>

