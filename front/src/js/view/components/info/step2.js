import {InputItem,ImagePicker,Toast,Picker,List,Modal} from "antd-mobile";
import url from "../../config/config";
import {compress} from "../../../utils/imgCompress";
import bank from "../method/bank";

export default React.createClass({
    getInitialState(){
        return {
            files:[],
            bankcard:"",
            creditcard:"",
            imgurl:"images/images/icon_09.jpg",
            imgurl2:"images/images/icon_10.jpg",
            imgurl3:"images/images/icon_09.jpg",
            imgurl4:"images/images/icon_10.jpg",
            imgup1:"",
            imgup2:"",
            imgup3:"",
            imgup4:"",
            value:["中国工商银行"],//银行名称
            value2:["中国工商银行"],//信用卡名称
            banklist:[],
        }
    },
    componentWillMount(){
    },
    componentWillUnmount(){
        sessionStorage.ste=JSON.stringify(this.state);
        
    },
    componentWillMount(){
        if(sessionStorage.ste){
            this.setState(JSON.parse(sessionStorage.ste))
        } 
        this.setState({modal1:false});//每次进来确保加载框不出来      
        var that=this;
         fetch(url.url+"/api/act/mine/bank/list.htm",{
            headers:{
                token:localStorage.Token
            },
            method:"get"})
            .then(r=>r.json())
            .then((data)=>{
                // console.log(data);
                if(data.code=="410"){
                    Toast.info("您的账号已在其他设备登录", 2);
                    setTimeout(function(){
                        hashHistory.push("login")
                    },2000) 
                }else if(data.code=="411"){
                    Toast.info("登录已失效,请重新登录", 2);
                    setTimeout(function(){
                        hashHistory.push("login")
                    },2000) 
                }else if(data.code=="408"){
                    Toast.info("系统响应超时", 2);
                  }else if(data.code=="500"){
                    Toast.info("系统错误", 2);
                  }else{
                    var newlist=data.data.map((con)=>{
                        return {
                            label:con.bankName,
                            value:con.bankName
                        }
                    })
                    that.setState({
                        banklist:newlist,
                        creditcardlist:data.data
                    })
                  }
                
                
            }).catch(function(e) {
                console.log("Oops, error");
                Toast.info("服务器响应超时", 2);
        });
            
       
    },
    btn(){
        console.log(this.state)
        if(!this.state.bankcard){
            Toast.info("请填写银行卡号", 2);
            
        }else if(!bank(this.state.bankcard)){
            Toast.info("请填写正确的银行卡号", 2);
        }
        else if(!this.state.imgup1){
            Toast.info("请上传银行卡正面", 2);
        }else if(!this.state.imgup2){
            Toast.info("请上传银行卡背面", 2);
        }else if(!this.state.creditcard){
            Toast.info("请填写信用卡", 2);
            
        }else if(this.state.creditcard==this.state.bankcard){
            Toast.info("请填写正确的信用卡", 2);
        }
        else if(!this.state.imgup3){
            Toast.info("请上传信用卡正面", 2);            
        }else if(!this.state.imgup4){
            Toast.info("请上传信用卡背面", 2);
            
        }
        
        
        else{

        
        console.log(this.state);
        console.log(localStorage.userId)
        var that=this;//保存银行卡信用卡接口
        var data=new FormData();
        data.append("backImg",this.state.imgup2);
        data.append("bank",this.state.value[0]);
        data.append("cardNo",this.state.bankcard);
        data.append("creditBank",this.state.value2[0]);
        data.append("creditNo",this.state.creditcard);
        data.append("creditbackImg",this.state.imgup3);
        data.append("creditfrontImg",this.state.imgup4);
        data.append("frontImg",this.state.imgup1);
        data.append("userId",localStorage.userId);


        fetch(url.url+"/api/act/mine/bank/save.htm",{
        headers:{
            token:localStorage.Token
        },
        method:"POST",body:data})
        .then(r=>r.json())
        .then((data)=>{
            console.log(data);
            if(data.code=="200"){
                that.props.step(3)
            }else if(data.code=="400"){
                Toast.info(data.msg, 2);
            }
        }).catch(function(e) {
                console.log("Oops, error");
                Toast.info("服务器响应超时", 2);
        });
    }
    },
    upimg(files){
        var that=this;
        return new Promise(function(suc,err){
        var data=new FormData();
        that.setState({modal1:true},()=>{
            data.append("img",files[0].url);   
            fetch(url.url+"/api/act/mine/userInfo/saveImg.htm",{
                headers:{
                    token:localStorage.Token
                },
                method:"POST",body:data})
                .then(r=>r.json())
                .then((data)=>{
                    that.setState({modal1:false});
                    if(!data.data){
                        
                        if(data.code==400){
                            // Toast.info("上传图片格式仅支持jpg，jpeg，png格式", 2);
                        }else{
                            Toast.info("图片上传错误", 2);
                        }
                    }else{
                        suc(data)
                    }
                    
                    
                }).catch(function(e) {
                console.log("Oops, error");
                Toast.info("服务器响应超时", 2);
                that.setState({modal1:false});  
            });
        });
    })     
           
    },
    onChange(files, type, index){
        
        var that=this;
        // if(this.judgeImgType(files[0].file.type)){
        //      Toast.info("上传图片格式仅支持jpg，jpeg，png格式", 2);
        //      return
        // }
        this.upimg(files).then((data)=>{
            that.setState({
                // imgurl:files[0].url,
                imgurl:data.data,
                imgup1:data.data
            })
        })
      },
    onChange2(files, type, index){
        console.log(2)
        var that=this;
        if(!this.judgeImgType(files[0].file.type)){
             Toast.info("上传图片格式仅支持jpg，jpeg，png格式", 2);
             return
        }
        this.upimg(files).then((data)=>{
            that.setState({
                // imgurl2:files[0].url,
                imgurl2:data.data,
                imgup2:data.data
            })
        })
      },
    onChange3(files, type, index){
        var that=this;
        if(!this.judgeImgType(files[0].file.type)){
             Toast.info("上传图片格式仅支持jpg，jpeg，png格式", 2);
             return
        }
        this.upimg(files).then((data)=>{
            that.setState({
                // imgurl3:files[0].url,
                imgurl3:data.data,
                imgup3:data.data
            })
        })
      },
    onChange4(files, type, index){
        var that=this;
        if(!this.judgeImgType(files[0].file.type)){
             Toast.info("上传图片格式仅支持jpg，jpeg，png格式", 2);
             return
        }
        this.upimg(files).then((data)=>{
            that.setState({
                // imgurl4:files[0].url,
                imgurl4:data.data,
                imgup4:data.data
            })
        })
    },
    judgeImgType(file){
        var array = file.split('/');
        var index = array.length-1;
        if(array[index]=='jpg'||array[index]=='png'||array[index]=='jpeg'||array[index]=='JPG'||array[index]=='JPEG'||array[index]=='PNG'){
            return true;
        }else{
            return false;
        }
    },
    onClose(){
        this.setState({
        modal1: false,
        });
    },
    render(){
        const {files}=this.state;
        var showbox=this.props.page==2?"":"none";
        return (
            <div className="step_2" style={{display:showbox}}>
                 <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose}
                    title="提示"
                    className="imgInfo"
                    >
                    <div>                        
                        <img src="images/images/loading.gif" alt=""/>
                        <p>图片正在上传中...</p>
                    </div>
                </Modal>
                <div className="title">
                    <img src="images/images/title.jpg" />
                </div>
                <div className="con">
                    <div className="tip">
                    <img src="images/images/icon_05.png" />
                        银行卡信息
                    </div>
                    <div className="wrap">
                        <div className="price">
                            <div className="top">
                                <span>银行名称</span>
                                <Picker extra="请选择银行"
                                    
                                    data={this.state.banklist}
                                    cols="1" 
                                    value={this.state.value}                                  
                                    onOk={e => {this.setState({value:e})}}
                                    onDismiss={e => console.log('dismiss', e)}
                                    >
                                    <List.Item
                                        style={{width:"4rem"}}
                                    ></List.Item>
                                    </Picker>
                            </div>
                            <div className="top">
                                <span>银行卡号</span><InputItem
                                style={{color: "#888"}}
                                value={this.state.bankcard}
                                onChange={(e)=>{
                                    this.setState({
                                        bankcard:e
                                    })
                                }} 
                                style={{height:"0.52rem",fontSize:"0.28rem",width:"4rem"}}
                                placeholder="请输入银行卡号" />
                            </div>
                            <div className="upimg">
                                上传银行卡照片
                            </div>
                            <div className="img_box">
                                <div className="left">
                                    <div 
                                        style={{position:"relative",overflow:"hidden"}}
                                    >
                                        <img src={this.state.imgurl} />
                                        <ImagePicker
                                        style={{position:"absolute",top:"0",left:"0",width:"16rem",height:"15rem",opacity:"0"}}
                                        files={files}
                                        onChange={this.onChange}
                                        onImageClick={(index, fs) => console.log(index, fs)}
                                        selectable={files.length <1}
                                        />
                                    </div>
                                    
                                    <p>银行卡正面</p>
                                </div>
                                <div className="right">
                                    <div
                                        style={{position:"relative",overflow:"hidden"}}
                                    >
                                        <img src={this.state.imgurl2} />
                                        <ImagePicker
                                        style={{position:"absolute",top:"0",left:"0",width:"16rem",height:"15rem",opacity:"0"}}
                                        files={files}
                                        onChange={this.onChange2}
                                        onImageClick={(index, fs) => console.log(index, fs)}
                                        selectable={files.length <1}
                                        />
                                    </div>
                                    
                                    <p>银行卡背面</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tip">
                    <img src="images/images/icon_05.png" />
                        信用卡信息
                    </div>
                    <div className="wrap">
                        <div className="price">
                            <div className="top">
                                <span>发卡行</span>
                                <Picker extra="请选择发卡行"
                                    
                                    data={this.state.banklist}
                                    cols="1" 
                                    value={this.state.value2}                                  
                                    onOk={e => {this.setState({value2:e})}}
                                    onDismiss={e => console.log('dismiss', e)}
                                    >
                                    <List.Item
                                        style={{width:"4rem"}}
                                    ></List.Item>
                                    </Picker>
    
                            </div>
                            <div className="top">
                                <span>信用卡号</span><InputItem
                                value={this.state.creditcard}
                                onChange={(e)=>{
                                    this.setState({
                                        creditcard:e
                                    })
                                }} 
                                style={{height:"0.52rem",fontSize:"0.28rem",width:"4rem"}}
                                placeholder="请输入信用卡号" />
                            </div>
                            <div className="upimg">
                                上传银行卡照片
                            </div>
                            <div className="img_box">
                                <div className="left">
                                    <div 
                                        style={{position:"relative",overflow:"hidden"}}
                                    >
                                        <img src={this.state.imgurl3} />
                                        <ImagePicker
                                        style={{position:"absolute",top:"0",left:"0",width:"16rem",height:"15rem",opacity:"0"}}
                                        files={files}
                                        onChange={this.onChange3}
                                        onImageClick={(index, fs) => console.log(index, fs)}
                                        selectable={files.length <1}
                                        />
                                    </div>
                                    
                                    <p>信用卡正面</p>
                                </div>
                                <div className="right">
                                    <div
                                        style={{position:"relative",overflow:"hidden"}}
                                    >
                                        <img src={this.state.imgurl4} />
                                        <ImagePicker
                                        style={{position:"absolute",top:"0",left:"0",width:"16rem",height:"15rem",opacity:"0"}}
                                        files={files}
                                        onChange={this.onChange4}
                                        onImageClick={(index, fs) => console.log(index, fs)}
                                        selectable={files.length <1}
                                        />
                                    </div>
                                    
                                    <p>信用卡背面</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <button onClick={                                                      
                            ()=>{this.props.step(1)}}>上一步</button> <button onClick={
                                
                                this.btn
                                
                                }>下一步</button>
                    </div>  
                </div>
            </div>
        )
    }
})
