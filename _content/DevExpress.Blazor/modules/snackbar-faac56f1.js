class e{}e.Snackbar="dx-blazor-snackbar",e.Container=e.Snackbar+"-container",e.ContainerShown=e.Container+"-shown";const n=new class{constructor(){this.timeout=void 0,this.cloneElement=null}};function o(o){clearTimeout(n.timeout),n.cloneElement&&(n.cloneElement.remove(),n.cloneElement=null);const t=o.cloneNode(!0);document.body.appendChild(t),n.cloneElement=t,t.classList.add(e.ContainerShown),n.timeout=setTimeout((()=>{var o;null===(o=n.cloneElement)||void 0===o||o.classList.remove(e.ContainerShown),setTimeout((()=>{var e;null===(e=n.cloneElement)||void 0===e||e.remove(),n.cloneElement=null}),200)}),3e3)}const t={showSnackbar:o};export{t as default,o as showSnackbar};
