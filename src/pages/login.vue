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
               axios({
                    url: 'http://localhost:3000/user',
                    method: 'get',
                    params:{
                        user_name: this.formInline.user,
                        password:this.formInline.password
                    }
                    })
                    .then( res=>{
                         if( res.data.result===1){
                             alert('登录成功')
                             cookie.set('user_name',this.formInline.user)
                             this.$router.push('/home')
                         }else{
                             alert('登录失败，请重新登录')
                         }
                    })
                    .catch( error => console.log( error ))
            }
        }
    }
</script>

