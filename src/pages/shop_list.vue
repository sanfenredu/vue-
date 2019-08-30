<template>
    <el-table
    :data="get_shop_list_data"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺 logo">
              <img style = "width: 50px;height: 50px;" :src="'http://localhost:3000/upload/' + props.row.filename[0]" alt="">
          </el-form-item>
          <el-form-item label="营业许可证">
            <img style = "width: 50px;height: 50px;" :src="'http://localhost:3000/upload/' + props.row.filename[1]" alt="">
          </el-form-item>
          <el-form-item label=" 餐饮许可证">
            <img style = "width: 50px;height: 50px;" :src="'http://localhost:3000/upload/' + props.row.filename[2]" alt="">
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row._id }}</span>
          </el-form-item>
          <el-form-item label="店铺分类">
            <span>{{ props.row.shop_category }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.shop_slogan }}</span>
          </el-form-item>
          <el-form-item label="配送费">
            <span>{{ props.row.delivery_cost }}</span>
          </el-form-item>
           <el-form-item label="营业时间">
            <span>{{ props.row.shop_hours }}</span>
          </el-form-item>
           <el-form-item label="联系电话">
            <span>{{ props.row.phone_number }}</span>
          </el-form-item>
          <el-form-item label="活动区域">
            <span>{{ props.row.shop_area }}</span>
          </el-form-item>
          <el-form-item label="店铺特点">
            <span>{{ props.row.shop_feature_flag_0 && '品牌保证' || ''}}</span>
            <span>{{ props.row.shop_feature_flag_1 && '蜂鸟专送'|| ''}}</span>
            <span>{{ props.row.shop_feature_flag_2 && '新开店铺'|| '' }}</span>
            <span>{{ props.row.shop_feature_flag_3 && '外卖保'|| ''}}</span>
            <span>{{ props.row.shop_feature_flag_4 && '准时达'|| ''}}</span>
            <span>{{ props.row.shop_feature_flag_5 &&  '开发票'|| '' }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="shop_name">
    </el-table-column>
    <el-table-column
      label="店铺名地址"
      prop="shop_address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="shop_info">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="handle">
      <template slot-scope="props">
        <el-button
          size="mini"
          @click = "edit ( props.row._id )"
        >
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click = "deleteItem(props.row._id )"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    data() {
      return {
        tableData: null
      }
    },
    methods:{
      ...mapActions(['getShopList','deleteShopListItem']),
            deleteItem( id ){
              console.log(id)
              this.deleteShopListItem( id )
            },
            edit( id ){
                this.$router.push(`/shop_edit/${id}`)
            },
    },
    computed:{
        ...mapGetters(['get_shop_list_data'])
    },
    created(){
        this.getShopList()
    }
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

