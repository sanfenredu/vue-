<template>
    <Form ref="formInline" 
    :model="formInline" 
    :rules="ruleInline" inline
    >
        <FormItem prop="user">
            <iv-input type="text" v-model="formInline.user" name=" user_name" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </iv-input>
        </FormItem>
        <FormItem prop="password">
            <iv-input type="password" v-model="formInline.password" name="password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </iv-input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">Signin</Button>
           
        </FormItem>
    </Form>
</template>
<script>
import { Form,Input,FormItem,Button,Icon } from 'iview'
import axios from 'axios'
    export default {
        components:{
            'iv-input':Input,
            // 'iv-form':Form,
            Form,FormItem,Button,Icon
        },
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                var params = new URLSearchParams()
                params.append( 'user_name', this.formInline.user )
                params.append( 'password', this.formInline.password )
                // console.log(this.formInline.user,this.formInline.password)
               axios({
                    url: 'http://localhost:3000/user',
                    method: 'post',
                    headers: {
                    'Content-Type': "application/x-www-form-urlencoded" //请求头设置为表单提交的请求头
                    },
                    data: params
                    })
                    .then( res => console.log( res ))
                    // .then( res=>{
                    //     if(res.data.status===1){
                    //         alert( '注册成功')
                    //        this.$router.push('/login')
                    //     }else{
                    //         alert( '用户名已存在，请重新注册')
                    //     }
                    // })
                    .catch( error => console.log( error ))
            }
        }
    }
</script>

