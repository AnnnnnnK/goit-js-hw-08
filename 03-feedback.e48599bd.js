!function(){var e,t=document.querySelector(".feedback-form"),a=document.querySelector(".input"),r=document.querySelector("textarea"),o={};t.addEventListener("input",(function(e){o[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),t.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(o)})),(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&(console.log(e),a.value=o.email||"",r.value=o.message||"")}();
//# sourceMappingURL=03-feedback.e48599bd.js.map
