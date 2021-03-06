import axios from "../utils/request"
import Qs from 'qs'   //引入方式

const api = {
    
    getRegister(params){
        let readyData=Qs.stringify({
            username:params.username,
            password:params.password,
            email: params.email
        });
       return axios.post("/api/v1/register",readyData);
    },

    getLogin(params){
        let readyData=Qs.stringify({
            username:params.username,
            password:params.password
        });
        return axios.patch("/api/v1/login",readyData);
    },
    
    getLogout(){
        return axios.patch("/api/v1/logout");
    },


    //成为设备提供者申请
    upgrade_apply(params){
        let readyData=Qs.stringify(params);
        return axios.put("/api/v1/upgrade",readyData)
    },

    
   
    /**
     * provider
     */
    getMyEquipmentList(params){
        return axios.get("/api/v2/equipmentlist",{params})
    },
    //修改设备
    modifyEquipment(params){
        // console.log(params);
        let readyData=Qs.stringify({
            id:params.id,
            name:params.name,
            description: params.description,
            count: params.count
        });
        return axios.put("/api/v2/edit",readyData);
    },
    addEquipment(params){
        // console.log(params);
        let readyData=Qs.stringify({
            id: params.id,
            count: params.count
        });
        return axios.post("/api/v2/increase",readyData);
    },
    minusEquipment(params){
        // console.log(params);
        let readyData=Qs.stringify({
            id: params.id,
            count: params.count
        });
        return axios.post("/api/v2/decrease",readyData);
    },
    onShelfApply(params){
        console.log(params);
        let readyData=Qs.stringify({
            name: params.name,
            description: params.description,
            remarks: params.remarks,
            count: params.count,
        });
        return axios.post("/api/v2/onshelf",readyData);
    },
    offShelf(params){
        console.log(params);
        let readyData=Qs.stringify({
            equipment_id:params.equipment_id,
        });
        return axios.post("/api/v2/offshelf",readyData)
    },
    getBorrowApplyList(){
        return axios.get("/api/v2/borrowapplylist")
    },
    agreeBorrowApply(params){
        console.log(params);
        let readyData=Qs.stringify({
            id:params.id,
            flag:params.flag
        });
        return axios.put("/api/v2/whether/agree",readyData);
    },
    getLendList(params){
        return axios.get("/api/v2/lendlist",{params})
    },
    confirmReturn(params){
        console.log(params);
        let readyData=Qs.stringify({
            id:params.id
        });
        return axios.put("/api/v2/confirm",readyData);
    },

    //获取设备列表
    getequipmentlist(page,name)
    {
        // console.log(name)
        return axios.get("/api/v1/search?"+"page="+String(page)+"&name="+name)
    },
    //申请信息列表
    getapplylist()
    {
        return axios.get("/api/v1/applylist")
    },
    //租借成功列表
    getborrowlist()
    {
        return axios.get("/api/v1/borrowlist")
    },
    //发送消息
    sendmessage(params)
    {
        let readyData=Qs.stringify({
            receiver_name:params.receiver_name,
            content:params.content
        });
        return axios.post("/api/v1/sendmessage",readyData)
    },

    getmessages()
    {
        return axios.get("/api/v1/getmessages")
    },
    
    readmessages()
    {
        return axios.put("api/v1/readmessages")
    },

    //申请租借设备
    apply(params)
    {
        let readyData=Qs.stringify({
            id:params.id,
            endtime:params.endtime,
            reason:params.reason,
            count:params.count
        });
        return axios.post("api/v1/apply",readyData)
    },

    //获取通知
    notice()
    {
        return axios.get("api/v1/notification")
    }



    
}

export default api;