import{j as s}from"./Compact.BnC6XZYP.js";import{r as o,R as k}from"./index.C--6pZtI.js";/* empty css                           */import{u as n}from"./Respose.Cnp37uwy.js";import{L}from"./LoginPopUp.fO3nRrgP.js";import{B as l}from"./button.DmgfHEG2.js";import"./preload-helper.ygWHROA3.js";/* empty css                           */const Z=({user_id:r,topicId:i})=>{const[a,p]=o.useState(""),[u,x]=o.useState(!1),[f,h]=o.useState(!1),t=o.useRef(null),c=n(e=>e.response_id),g=n(e=>e.content),y=n(e=>e.username),d=n(e=>e.clearResponse),w=s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",className:"CloseIcon",fill:"black",width:"24",height:"24",children:s.jsx("path",{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"})}),m=e=>{e.style.height="1px",e.style.height=`${25+e.scrollHeight}px`},j=()=>{m(t.current)},S=e=>{p(e.target.value),m(t.current)},b=()=>{p(""),d();const e=t.current;e.style.height="1px",e.style.height="50px"},C=e=>{e.preventDefault(),N()},N=async()=>{try{console.log("Submitting new response with values:",{topicId:i,authorId:r,content:a,quoted_response_id:c});const e=await fetch("http://localhost:1234/forum/response",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topicId:i,authorId:r,content:a,quoted_response_id:c})});if(e.ok){const v=await e.json();console.log("New response added:",v),x(!0)}else console.error("Error adding a new response:",e.statusText)}catch(e){console.error("Error posting the request:",e)}};k.useEffect(()=>{u&&window.location.reload()},[u]);const R=()=>{r==null&&h(!0)};return s.jsxs("form",{className:"form",onSubmit:C,children:[f&&s.jsx(L,{setIsOpen:h}),c&&s.jsxs("div",{className:"responseQuoted-container",children:[s.jsxs("p",{id:"responseQuoted",className:"responseQuoted",children:["@",y," wrote: ",g]}),s.jsx(l,{type:"secondary",shape:"circle",icon:w,onClick:()=>d()}),s.jsx(Message,{})]}),s.jsx("textarea",{ref:t,value:a,onChange:S,onKeyUp:j,onClick:R,rows:"1",placeholder:"Write your response here...",className:"response-input",id:"textarea-adjust",style:{overflow:"hidden"}}),s.jsx(l,{htmlType:"button",className:"buttonOutline",type:"primary",ghost:!0,onClick:b,children:"Cancel"}),s.jsx(l,{className:"submit",type:"submit",htmlType:"submit",children:"Submit"})]})};export{Z as default};