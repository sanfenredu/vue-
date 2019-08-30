<template>
       <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-home-outline"></Icon>
                      
                       <router-link to="/home"> 首页</router-link>
                    </template>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                       数据管理
                    </template>
                    <MenuItem name="2-1"> <router-link to="/user_list">用户列表</router-link> </MenuItem>
                    <MenuItem name="2-2"> <router-link to="/shop_list">商家列表</router-link> </MenuItem>
                    <MenuItem name="2-3"> <a>食品列表</a> </MenuItem>
                    <MenuItem name="2-4"> <a>订单列表</a> </MenuItem>
                    <MenuItem name="2-5"> <a>管理员列表</a> </MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-medkit-outline"></Icon>
                       添加数据
                    </template>
                    <MenuItem name="3-1"> <router-link to="/add_shop">添加商铺</router-link> </MenuItem>
                    <MenuItem name="3-2"> <router-link to="/add_goods">添加商品</router-link > </MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-grid-outline"></Icon>
                       图表
                    </template>
                    <MenuItem name="4-1"> <router-link to="/visitor">用户分布</router-link> </MenuItem>
            
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-create-outline"></Icon>
                      编辑
                    </template>
                    <MenuItem name="5-1"> <router-link to="/edit">文本编辑</router-link> </MenuItem>
    
                </Submenu>
                 <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-settings-outline"></Icon>
                      设置
                    </template>
                    <MenuItem name="6-1"> <router-link to="admin_set">管理员设置</router-link> </MenuItem>
    
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-reorder"></Icon>
                      说明
                    </template>
                    <MenuItem name="7-1"> <router-link to="/explain">说明</router-link> </MenuItem>
    
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{ boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <p>欢迎来到 三分热度的后台管理系统</p>
                <div class="user-container">
                <div class="icon-box">
                  <Icon type="ios-person" />
                </div>
              </div>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>{{$route.path}}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div>
                       
                       <!-- 核心展示 --start -->
                       <router-view></router-view>
                       <!-- 核心展示 --end -->

                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import { 
        Sider,Menu,Submenu,Icon,MenuItem,Layout,Header,Content,Breadcrumb,BreadcrumbItem,Card
     } from "iview"
     import Home from 'pages/home'
     export default {
         components:{
             Sider,Menu,Submenu,Icon,MenuItem,Layout,Header,Content,Breadcrumb,BreadcrumbItem,Card,
             Home
         }
     }
</script>
<style scoped lang="stylus">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .ivu-layout-header
      display flex 
      background rgb( 44,62,80 )
      color white
      font-size 16px
      align-items center 
      .user-container 
        flex 1 
        display flex 
        justify-content flex-end
        .icon-box 
          width 40px 
          height 40px 
          background white 
          color black 
          border-radius 50%
          display flex 
          justify-content center
          align-items center   
</style>
