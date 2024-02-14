import{_ as t}from"./_tslib-6e8ca86b.js";import{DxDropDownBase as e}from"./dropdown-77e2511c.js";import{p as i,g as o,P as r,C as n,h as s,B as a,i as l,j as p,a as h,b as c,k as u,Z as d,l as m}from"./popup-a1c2390a.js";import{r as f,D as g}from"./dropdowncomponents-7a505f98.js";import{P as w}from"./point-e4ec110e.js";import{y as b}from"./lit-element-70cf14f4.js";import{e as y}from"./property-d3853089.js";import{e as j}from"./custom-element-267f9a21.js";import"./thumb-3dd919b6.js";import"./data-qa-utils-8be7c726.js";import"./eventhelper-8570b930.js";import"./browser-f8f6e902.js";import"./layouthelper-1d804c8c.js";import"./constants-58283e53.js";import"./custom-events-helper-e7f279d3.js";import"./query-44b9267f.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-d7595cd2.js";import"./branch-bf06b0d2.js";import"./capturemanager-89a507c8.js";import"./dispatcheraction-19309c7b.js";import"./logicaltreehelper-99f1adf9.js";import"./portal-9686dca9.js";import"./constants-058ebb50.js";import"./dx-html-element-pointer-events-helper-1bf230d1.js";import"./dom-e3fa5208.js";import"./common-eb095e4d.js";import"./devices-9f03a976.js";import"./dx-ui-element-db9e89a3.js";import"./lit-element-base-7a85dca5.js";import"./nameof-factory-64d95f5b.js";import"./key-fa0d8a82.js";import"./dx-keyboard-navigator-38aff319.js";import"./focus-utils-6f61e33c.js";import"./touch-167bb2e4.js";import"./disposable-d2c2d283.js";import"./dom-utils-751497ba.js";import"./css-classes-f45f6949.js";import"./popupportal-baf3cf8a.js";import"./events-interseptor-e0b24870.js";function x(){return new Promise(((t,e)=>{requestAnimationFrame((()=>{setTimeout(t)}))}))}var z,A,C;!function(t){t.Center="Center",t.Left="Left",t.Right="Right"}(A||(A={})),function(t){t.Top="Top",t.Center="Center",t.Bottom="Bottom"}(C||(C={}));let S=class extends o{constructor(){super(...arguments),this.allowResize=!1}render(){return this.allowResize?b`<dxbl-popup-resizable-container><slot></slot></dxbl-popup-resizable-container>`:b`<slot></slot>`}};t([y({type:Boolean,attribute:"allow-resize",reflect:!1})],S.prototype,"allowResize",void 0),S=t([j("dxbl-window-dialog")],S);let T=class extends g{constructor(){super()}};T=t([j("dxbl-window-root")],T);let P=z=class extends e{constructor(){super(),this.actualSize=null,this.actualPosition=null,this.initialSize=null,this.initialPosition=null,this.actualMinWidth=null,this.actualMaxWidth=null,this.actualMinHeight=null,this.actualMaxHeight=null,this.sizeDirty=!1,this.positionYDirty=!1,this.positionXDirty=!1,this.showAnchorElement=null,this._showOptionsToApply=null,this.isAdjustDialogEnabled=!0,this.horizontalAlignment=A.Center,this.verticalAlignment=C.Center,this.closeOnEscape=!1,this.zIndex=0,this.placement=r.Custom,this.closeMode=n.None,s(this)}get branchType(){return a.Window}get canAdjustZIndexOnShow(){return!1}get positionY(){return this.offset.y}set positionY(t){this.positionYDirty=!0,this.offset=new w(this.positionX||0,t||0)}get positionX(){return this.offset.x}set positionX(t){this.positionXDirty=!0,this.offset=new w(t||0,this.positionY||0)}get showOptionsToApply(){return this._showOptionsToApply}set showOptionsToApply(t){this._showOptionsToApply=t,this.positionXDirty=!1,this.positionYDirty=!1}move(t){return this.showOptionsToApply=t,this.forceReposition(),x()}showAt(t){return this.showOptionsToApply=t,super.show(),x()}show(){this.showAt(this.showOptionsToApply).catch((t=>{}))}static getPlacementTargetClientRect(t){if(null!==t){if(null!==t.targetReference&&t.targetReference instanceof HTMLElement)return t.targetReference.getBoundingClientRect();if(null!==t.targetSelector){const e=document.querySelector(t.targetSelector);if(null!==e)return e.getBoundingClientRect()}}return{x:0,y:0,width:window.innerWidth,height:window.innerHeight}}static getShowAtBox(t){return null===t?null:null!==t.targetReference&&t.targetReference instanceof HTMLElement?z.getElementTopLeftPoint(t.targetReference):null!==t.targetSelector?z.getElementTopLeftPoint(document.querySelector(t.targetSelector)):t.targetPoint}static getElementTopLeftPoint(t){if(null===t)return null;const e=t.getBoundingClientRect();return new w(e.left,e.top)}canProcessEscapeKeyDown(){return this.closeOnEscape}renderTemplate(){return b`
            <dxbl-branch
                id="branch"
                branch-id="${this.branchId}"
                parent-branch-id="${this.parentBranchId}"
                type="${this.branchType}"
                style="${this.dragCssStyle}">
                <dxbl-window-root
                    id="root"
                    style="${this.rootCssStyle}"
                    ?resizing="${this.resizing}"
                    drop-opposite="${this.actualDropOpposite}"
                    drop-direction="${this.actualDropDirection}"
                    drop-alignment="${this.actualDropAlignment}">
                    ${this.renderDefaultSlot()}
                    ${this.renderAdditionalSlots()}
                    ${this.renderBridgeSlot()}
                </dxbl-window-root>
            </dxbl-branch>
        `}raiseResizeCompleted(t,e){this.sizeDirty=!0,super.raiseResizeCompleted(t,e)}processCustomPlacement(t,e){if(this.positionXDirty||this.positionYDirty||this.isInDragOperation||this.sizeDirty)return null;const i=this.showOptionsToApply;if(i){const t=i.targetPoint||this.calcShowPoint(i);return[new l(t,p.None,!1,h.Near,c.bottom)]}return null}calcShowPoint(t){const e=z.getPlacementTargetClientRect(t),i=this.getBoundingClientRect(),o=document.body.getBoundingClientRect(),r=this.calcShowXPoint(i,e),n=this.calcShowYPoint(i,e),s=o.y+o.height-i.height;return new w(Math.max(0,r+window.scrollX-Math.max(0,r-(o.x+o.width-i.width))),Math.max(0,n+window.scrollY-Math.max(0,n-s)))}calcShowXPoint(t,e){return Math.floor((()=>{switch(this.horizontalAlignment){case A.Left:return e.x;case A.Right:return e.x+e.width-t.width;case A.Center:return e.x+e.width/2-t.width/2}throw new Error("calcShowXPoint not supported for horizontalAlignment:"+this.horizontalAlignment)})())}calcShowYPoint(t,e){return Math.floor((()=>{switch(this.verticalAlignment){case C.Top:return e.y;case C.Bottom:return e.y+e.height-t.height;case C.Center:return e.y+e.height/2-t.height/2}throw new Error("calcShowYPoint not supported for horizontalAlignment:"+this.verticalAlignment)})())}updated(t){super.update(t),t.has("zIndex")&&this.zIndex&&this.raiseZIndexChange()}raiseZIndexChange(){this.updateComplete.then((t=>{this.dispatchEvent(new u(new d(this.zIndex)))}))}createKeyboardNavigationStrategy(){return new m(this.keyboardNavigator,this)}};function R(t){if(!t)throw new Error("failed");return t}t([y({type:A,attribute:"horizontal-alignment",reflect:!1})],P.prototype,"horizontalAlignment",void 0),t([y({type:A,attribute:"vertical-alignment",reflect:!1})],P.prototype,"verticalAlignment",void 0),t([y({type:Number,attribute:"position-y",reflect:!1})],P.prototype,"positionY",null),t([y({type:Number,attribute:"position-x",reflect:!1})],P.prototype,"positionX",null),t([y({type:Boolean,attribute:"close-on-escape"})],P.prototype,"closeOnEscape",void 0),t([y({type:Number,attribute:"z-index"})],P.prototype,"zIndex",void 0),P=z=t([j("dxbl-window")],P);export{P as DxWindow,R as getWindowRef};
