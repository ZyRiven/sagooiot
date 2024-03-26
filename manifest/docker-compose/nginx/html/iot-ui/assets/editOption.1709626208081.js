import{a as e}from"./index.170962620808122.js";import l from"./typeItem.1709626208081.js";import{_ as a,C as t,D as u,F as p,E as o}from"./index.1709626208081.js";import{v as r}from"./validator.1709626208081.js";import{d as n,h as s,a1 as y,aa as d,a as m,Y as i,S as f,e as v,ah as T,o as c,b as g,W as b,X as h,F,a7 as V,R as D,V as S}from"./vue.1709626208081.js";const _={unit:null,decimals:null,trueText:null,falseText:null,trueValue:null,falseValue:null,type:null,maxLength:null},k={..._,properties:[{key:"",name:"",desc:"",valueType:{..._,elements:[{text:"",value:""}]}}],elements:[{text:"",value:""}]},x=n({name:"deviceEditPro",components:{Plus:t,Minus:u,Right:p,TypeItem:l},setup(l,{emit:a}){const t=s(null),u=y({isShowDialog:!1,typeData:[],type:"",types:"",valueType:JSON.parse(JSON.stringify(k)),elementType:JSON.parse(JSON.stringify(k)),properties:[JSON.parse(JSON.stringify(k))],enumdata:[{text:"",value:""}],ruleForm:{id:0,name:"",key:"",transportProtocol:"",accessMode:"0",status:1,valueType:{},desc:""},rules:{name:[{required:!0,message:"参数名称不能为空",trigger:"blur"},{max:32,message:"参数名称不能超过32个字符",trigger:"blur"},{validator:r,message:"参数名称不能包含空格",trigger:"blur"}],key:[{required:!0,message:"参数标识不能为空",trigger:"blur"}],accessMode:[{required:!0,message:"请选择是否只读",trigger:"blur"}]}}),p=()=>{u.ruleForm={name:"",desc:""},u.valueType=JSON.parse(JSON.stringify(k)),u.enumdata=[{text:"",value:""}],u.elementType=JSON.parse(JSON.stringify(k))},n=()=>{u.isShowDialog=!1};return{openDialog:l=>{if(p(),e.product.getDataType({status:-1}).then((e=>{const l=Object.values(e.dataType);l.forEach(((e,a)=>{0==a?(l[a].label="基础类型",l[a].options=e):(l[a].label="扩展类型",l[a].options=e)})),u.typeData=l||[]})),l){if("undefined"!=typeof l.valueType){u.type=l.valueType.type,"undefined"!=typeof l.valueType.elementType&&(u.elementType=l.valueType.elementType),"undefined"!=typeof l.valueType.elements&&(u.enumdata=l.valueType.elements),"undefined"!=typeof l.valueType.properties&&(u.properties=l.valueType.properties),"undefined"!=typeof l.valueType.type&&(u.valueType.type=l.valueType.type);Object.keys(l.valueType).length>1&&(u.valueType=l.valueType)}u.ruleForm=l}u.isShowDialog=!0},addEnum:()=>{u.enumdata.push({text:"",value:""})},delEnum:e=>{u.enumdata.splice(e,1)},seletChange:e=>{u.type=e},seletChanges:e=>{u.types=e},closeDialog:n,onCancel:()=>{n()},onSubmit:()=>{const e=v(t);e&&e.validate((e=>{e&&("undefined"!=typeof u.ruleForm.valueType?("array"==u.type&&(u.valueType.elementType=u.elementType),u.ruleForm.valueType=u.valueType,n(),a("editTypeList",u.ruleForm,u.ruleForm.type_data)):("array"==u.type&&(u.valueType.elementType=u.elementType),u.ruleForm.valueType=u.valueType,o.success("参数类型添加成功"),n(),a("typeList",u.ruleForm,u.ruleForm.type_data)))}))},formRef:t,...d(u)}}}),C={"class":"system-edit-dic-container"},O={key:0},J={"class":"dialog-footer"};var N=a(x,[["render",function(e,l,a,t,u,p){const o=T("el-input"),r=T("el-form-item"),n=T("el-option"),s=T("el-option-group"),y=T("el-select"),d=T("TypeItem"),v=T("el-form"),_=T("el-button"),k=T("el-dialog");return c(),m("div",C,[i(k,{title:("undefined"!=typeof e.ruleForm.valueType?"修改":"添加")+"参数",modelValue:e.isShowDialog,"onUpdate:modelValue":l[5]||(l[5]=l=>e.isShowDialog=l),width:"769px"},{footer:f((()=>[g("span",J,[i(_,{onClick:e.onCancel},{"default":f((()=>[b("取 消")])),_:1},8,["onClick"]),i(_,{type:"primary",onClick:e.onSubmit},{"default":f((()=>[b(h("undefined"!=typeof e.ruleForm.valueType?"修 改":"添 加"),1)])),_:1},8,["onClick"])])])),"default":f((()=>[i(v,{model:e.ruleForm,ref:"formRef",rules:e.rules,"label-width":"120px"},{"default":f((()=>[i(r,{label:"参数标识",prop:"key"},{"default":f((()=>[i(o,{modelValue:e.ruleForm.key,"onUpdate:modelValue":l[0]||(l[0]=l=>e.ruleForm.key=l),placeholder:"请输入参数标识"},null,8,["modelValue"])])),_:1}),i(r,{label:"参数名称",prop:"name"},{"default":f((()=>[i(o,{modelValue:e.ruleForm.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.ruleForm.name=l),placeholder:"请输入参数名称"},null,8,["modelValue"])])),_:1}),i(r,{label:"数据类型",prop:"type"},{"default":f((()=>[i(y,{modelValue:e.valueType.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.valueType.type=l),placeholder:"请选择数据类型",onChange:e.seletChange},{"default":f((()=>[(c(!0),m(F,null,V(e.typeData,(e=>(c(),D(s,{key:e.label,label:e.label},{"default":f((()=>[(c(!0),m(F,null,V(e.options,(e=>(c(),D(n,{key:e.type,label:e.title,value:e.type},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),i(d,{valueType:e.valueType,typeData:e.typeData},null,8,["valueType","typeData"]),"array"==e.type?(c(),m("div",O,[i(r,{label:"元素类型",prop:"type"},{"default":f((()=>[i(y,{modelValue:e.elementType.type,"onUpdate:modelValue":l[3]||(l[3]=l=>e.elementType.type=l),placeholder:"请选择元素类型",onChange:e.seletChanges},{"default":f((()=>[(c(!0),m(F,null,V(e.typeData,(e=>(c(),D(s,{key:e.label,label:e.label},{"default":f((()=>[(c(!0),m(F,null,V(e.options,(e=>(c(),D(n,{key:e.type,label:e.title,value:e.type,disabled:["array","enum"].includes(e.type)},null,8,["label","value","disabled"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),i(d,{valueType:e.elementType,typeData:e.typeData},null,8,["valueType","typeData"])])):S("",!0),i(r,{label:"参数描述\t",prop:"desc"},{"default":f((()=>[i(o,{modelValue:e.ruleForm.desc,"onUpdate:modelValue":l[4]||(l[4]=l=>e.ruleForm.desc=l),type:"textarea",placeholder:"请输入参数描述"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])])}],["__scopeId","data-v-3206bb7d"]]);export{N as default};