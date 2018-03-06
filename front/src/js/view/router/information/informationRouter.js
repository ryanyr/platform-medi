import Top from "../../components/public/title";
import Footer from "../../components/public/footer_3.2";
import Step1 from "../../components/info/step1";
import Step2 from "../../components/info/step2";
import Step3 from "../../components/info/step3";
import "./style.less";
import store from "../../../store/store";
export default React.createClass({
    getInitialState(){
        return {
            page:1
        }
    },
    submit(){
        // console.log(this.refs.step_1.state)
    },
    componentWillMount(){
        console.log(sessionStorage.info)
        if(sessionStorage.info){
            this.setState(JSON.parse(sessionStorage.info))
        }
    },
    componentWillUnmount(){

        sessionStorage.info=JSON.stringify(this.state)
    },
    btn(w,rrr){
        
        // window.scrollTo(0,0);
        this.setState({
            page:rrr
        })
        
    },
   
    render:function(){
        var content=null;
        if(this.state.page==1){
            content=<Step1 ddd={(w,eee)=>{this.btn(w,eee)}} />
        }else if(this.state.page==2){
            content=<Step2 step={(w)=>{this.setState({page:w})}} />
        }else if(this.state.page==3){
            content=<Step3 />
        }
        return (
            <div className="information">
                <Top back={true} title="完善个人信息" />
                <Step1 page={this.state.page} step={(w)=>{
                    window.scrollTo(0,0);
                    this.setState({page:w})}} ref="step_1" />
                <Step2 page={this.state.page} step={(w)=>{
                    window.scrollTo(0,0);
                    this.setState({page:w})}}  />
                <Step3 page={this.state.page} step={(w)=>{
                    window.scrollTo(0,0);
                    this.setState({page:w})}} submit={this.submit} changepage={()=>{
                    this.setState({page:1})
                    // console.log(1)
                }} />
                <Footer />
            </div>
        )
    }
})