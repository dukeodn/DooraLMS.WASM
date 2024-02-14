import{_ as t}from"./_tslib-6e8ca86b.js";import{d as e}from"./dom-e3fa5208.js";import{F as s,v as i,G as o,I as n,l,R as r,h,u as a}from"./dom-utils-751497ba.js";import{d as u}from"./disposable-d2c2d283.js";import{U as c,R as d}from"./constants-6cceb8d1.js";import{initFocusHidingEvents as p}from"./focus-utils-6f61e33c.js";import{T as m}from"./toolbar-css-classes-49e6b0a8.js";import{C as g}from"./css-classes-f45f6949.js";import{S as f}from"./single-slot-element-base-4ab30292.js";import{e as y}from"./custom-element-267f9a21.js";import"./browser-f8f6e902.js";import"./common-eb095e4d.js";import"./key-fa0d8a82.js";import"./touch-167bb2e4.js";import"./logicaltreehelper-99f1adf9.js";import"./layouthelper-1d804c8c.js";import"./point-e4ec110e.js";import"./constants-58283e53.js";import"./data-qa-utils-8be7c726.js";import"./dx-ui-element-db9e89a3.js";import"./lit-element-base-7a85dca5.js";import"./lit-element-70cf14f4.js";import"./property-d3853089.js";class b{constructor(t){this.container=null,this.owner=t}querySelectorAll(t){var e;return this.querySelectorAllInternal(t||"#"+(null===(e=this.getContainer())||void 0===e?void 0:e.id))}toggleClassName(t,e,s){return this.owner?this.owner.toggleClassName(t,e,s):this.toggleClassNameInternal(t,e,s)}toggleClassNameInternal(t,e,s){}querySelectorAllInternal(t){return this.owner?this.owner.querySelectorAll(t):this.getNodes(t)}getNodes(t){const e=this.container;let s=e.querySelectorAll(t);return s.length||(t="#"+e.id+t,e.parentNode&&(s=e.parentNode.querySelectorAll(t))),s}getContainer(){return this.owner?this.owner.getContainer():this.container}getBoxSize(t){return Math.ceil(s(t))+this.getBoxOuterOffset(t)}getBoxInnerOffset(t){return i(t)}getBoxOuterOffset(t){return o(t)}getBoxOffset(t){return this.getBoxOuterOffset(t)+this.getBoxInnerOffset(t)}getNodeWidth(t,e=!1){const s=t;return s?Math.ceil(s.offsetWidth+(e?0:this.getBoxOuterOffset(s)))+n(s):0}dispose(){}setActive(t){}createLayoutEntity(t,...e){return null!==this.owner?this.owner.createLayoutEntity(t,...e):this.createLayoutEntityCore(t,...e)}createLayoutEntityCore(t,...e){return new(this.resolveLayoutEntityType(t))(...e)}resolveLayoutEntityType(t){return t}}const k=`.${m.ButtonToolbar}`,B=`.${m.ButtonEllipsis}`,C="data-dx-ribbon-toolbar-loaded";class x extends b{constructor(t,e,s){super(t),this.nextBlock=null,this.prevBlock=null,this.ribbonOwner=t,this.group=e,this.element=s,this.width=0,this.isActiveValue=null,this.index=e.blocks.length,this.nextBlock=null,this.prevBlock=s.layoutBlockObj||null,this._element=s,this._element.layoutBlockObj=this._element.layoutBlockObj?this._element.layoutBlockObj.nextBlock=this:this,this._element.onHide=()=>{this.toggleClassName(this.element,m.ToolbarHiddenItem,!0),this.toggleClassName(this.element,m.ToolbarItemCollapsed,!0)},this._element.onShow=()=>{this.toggleClassName(this.element,m.ToolbarHiddenItem,!1),this.toggleClassName(this.element,m.ToolbarItemCollapsed,!1)}}dispose(){delete this._element.onHide,delete this._element.onShow,this.ribbonOwner=null,super.dispose()}afterCreate(t){delete this._element.layoutBlockObj,t.maxWidth+=this.width,t.minWidth+=this.getMinWidth(),0===this.width&&this.raiseVisibilityChange(!1)}setActive(t){this.isActiveValue!==t&&(this.isActiveValue=t,this.group.activeBlock=t?this:null,this.group.groupsCollection.lastGroup=this.group,this.group.state.prevState&&this.toggleClassName(this.group.element.parentNode,this.group.state.prevState.name,this.isActiveValue),this.toggleClassName(this.element,this.group.state.name,this.isActiveValue),this.toggleClassName(this.group.element,this.group.state.name,this.isActiveValue))}raiseVisibilityChange(t){var e,s;const i=t?this._element.onShow:this._element.onHide;i&&(null===(e=this.owner)||void 0===e||e.domChanges.push(i)),null===(s=this.ribbonOwner)||void 0===s||s.toggleVisibility(this.element,t)}getMinWidth(){return this.nextBlock?this.nextBlock.getMinWidth():this.width}getNextBlock(t){let e=this.group,s=e.blocks[this.index-t];return!s&&(e=e.groupsCollection.blockGroups[e.totalIndex+t])&&(s=e.blocks[Math.pow(e.blocks.length,t>0?1:0)-1]),s}}class v extends b{constructor(t,e,s,i){super(t),this.builders=e||[],this.name=s,this.index=i?i.index+1:0,this.prevState=i,this.nextState=null,i&&(i.nextState=this)}for(t){return this.builders[this.builders.length]=this.createLayoutEntity(S,this.owner,this.name,t)}}class A extends b{constructor(t,e,s,i,o){super(t),this.groupsCollection=e,this.state=i,this.element=s,this.elementOffset=this.getBoxOffset(s)+this.getMarginLeftOffset(s),this.blocks=[],this.activeBlock=null,this.fullWidth=this.elementOffset,this.isSmallest=!i.nextState,this.isLargest=!i.prevState,this.domIndex=o,this.totalIndex=this.groupsCollection.blockGroups.length,this.createBlocks(i.builders);const n=s;i.prevState&&(this.isSmallest||(n.layoutBlockGroupObj.isSmallest=0===this.blocks.length))?delete n.layoutBlockGroupObj:n.layoutBlockGroupObj=this}dispose(){for(let t=0;t<this.blocks.length;t++)this.blocks[t].dispose();super.dispose()}afterCreate(t){this.blocks.forEach((function(e){e.afterCreate(t)})),t.groupsOffset+=this.elementOffset,t.groupBlocksLengthLookup[this.domIndex]=this.blocks.length,t.lastGroup=this}setActive(t){let e=0;!this.isSmallest&&this.isLargest&&(e=this.blocks.length-1),this.blocks[e].setActive(t)}createBlocks(t){for(let e=0;e<t.length;e++){const s=t[e],i=s.findBlockElements(this.element);for(let t=0;t<i.length;t++){const e=this.createLayoutEntity(x,this.owner,this,i[t]);this.fullWidth+=e.width=s.getBlockWidth(e),this.blocks.push(e)}}this.isLargest&&this.setActive(!0)}calculateWidth(t){return this!==t.group?this.fullWidth:this.getActualBlocks(t).reduce((function(t,e){return t+e.width}),this.elementOffset)}getActualBlocks(t){return this.blocks.map(function(e){return e.prevBlock&&e.index<t.index?e.prevBlock:e}.bind(this))}getBeforeOffset(t){const s=window.getComputedStyle(t,":before");return e.DomUtils.pxToInt(s.width)+e.DomUtils.pxToInt(s.marginRight)}getMarginLeftOffset(t){const s=window.getComputedStyle(t);return e.DomUtils.pxToInt(s.marginLeft)}}class w extends b{constructor(t,e,s){super(t),this.ribbonOwner=t,this.groupsContainer=e,this.testElement="function"==typeof s?s:function(t){return c.elementMatchesSelector(t,s)},this.blockGroups=[],this.states=[],this.width=0,this.groupsOffset=0,this.maxWidth=0,this.minWidth=0,this.groupElementsCount=0,this.currentLayoutElements=[],this.lastGroup=null,this.selector=s,this.groupLookupMap={},this.groupBlocksLengthLookup={}}createBlockGroup(t,e,s){let i=this.createLayoutEntity(A,this.owner,this,t,e,s);return i&&(i=i.blocks.length>0?this.blockGroups[this.blockGroups.length]=i:null),i&&(this.groupLookupMap[s]||(this.groupLookupMap[s]=[])).splice(0,0,i.totalIndex),i}createBlockGroups(){var t;const e=null===(t=this.ribbonOwner)||void 0===t?void 0:t.getGroupElements(this.groupsContainer,this.selector);if(e){this.groupElementsCount=e.length;for(let t=0;t<this.states.length;t++)for(let s=this.groupElementsCount-1;s>=0;s--){const i=e[s];!i||this.testElement(i)&&this.createBlockGroup(i,this.states[t],s)||(e[s]=null)}this.states=[];for(let t=0;t<this.blockGroups.length&&this.blockGroups[t].isLargest;t++)this.blockGroups[t].afterCreate(this);this.minWidth+=this.groupsOffset,this.maxWidth+=this.groupsOffset,this.width=this.maxWidth,this.currentLayoutElements=this.findActiveBlocks()}}defineState(t,e){const s=this.createLayoutEntity(v,this.owner,[],t,this.states[this.states.length-1]||null);this.states.push(s),e(s)}initialize(){}applyLayout(t){this.currentLayoutElements&&this.currentLayoutElements.forEach((function(t){t.setActive(!1)})),this.currentLayoutElements=t,this.currentLayoutElements.forEach((function(t){t.setActive(!0)})),this.detectBlockItemVisibilityChanges()}adjust(t){if(t===this.width||t<=this.minWidth&&this.width===this.minWidth||t>=this.maxWidth&&this.width===this.maxWidth)return;const e=this.width;if(this.width=Math.max(this.minWidth,Math.min(this.maxWidth,t)),this.width===this.maxWidth)return this.applyLayout(this.blockGroups.filter((function(t){return t.isLargest})));if(this.width===this.minWidth)return this.applyLayout(this.blockGroups.filter((function(t){return t.isSmallest})));const s=e-this.width,i=s/Math.abs(s),o=this.findActiveBlocks();let n=o?o[0]:null,l=n;const r=n;for(;n;){if(t=this.calculateWidth(n),i>0&&t<=this.width||i<0&&t>=this.width){const t=i<0?l:n;t!==r&&null!==t&&this.applyLayout([t]);break}l=n,n=n.getNextBlock(i)}}detectBlockItemVisibilityChanges(){const t=this.findActualBlockGroups();for(let e=0;e<t.length;e++){const s=t[e];let i=!1;for(let t=0;t<s.blocks.length;t++){let e=s.blocks[t];s!==this.lastGroup||(i=i||e.isActiveValue)||(e=e.prevBlock||e),e.raiseVisibilityChange(e.width>0)}}}calculateWidth(t){if(!t){const e=this.findActiveBlocks();e&&(t=e[0])}return this.findActualBlockGroups(t.group).reduce((function(e,s){return e+s.calculateWidth(t)}),0)}findActualBlockGroups(t=null){const e=[];if(!(t=t||this.lastGroup))return e;for(let s=0;s<this.groupElementsCount;s++){const i=this.groupLookupMap[s];for(let o=0;o<i.length;o++){const n=this.blockGroups[i[o]];if(s<t.domIndex?n.state.index<t.state.index:n.state.index<=t.state.index){e.push(n);break}}}return e}findActiveBlocks(){return this.lastGroup?this.lastGroup.blocks.filter((function(t){return t.isActiveValue})):null}dispose(){for(let t=0;t<this.blockGroups.length;t++)this.blockGroups[t].dispose();this.blockGroups=[],super.dispose()}}class S extends b{constructor(t,e,s){super(t),this.name=e,this.selectorOrFunc=s,this.prepareBlockFunc=null}getBlockWidth(t){return this.prepareBlockFunc?this.prepareBlockFunc(t):0}findBlockElements(t){const e=c.getChildElementNodesByPredicate(t,(t=>c.elementMatchesSelector(t,this.selectorOrFunc)));return null!=e?e:[]}setPrepareFunc(t){return this.prepareBlockFunc=t,this}setWidth(){return this.setPrepareFunc((t=>this.getBoxSize(t.element)))}setHidden(){return this.setPrepareFunc((function(t){return 0}))}setOnlyImageWidth(){return this.setPrepareFunc((t=>{let e=this.getBoxSize(t.element),s=c.getChildByClassName(t.element,`${g.Image}:not(.${m.AdaptivePreviewImage})`);s||(s=c.getChildByClassName(c.getChildByClassName(t.element,m.DropDownToggle),`${g.Image}:not(.${m.AdaptivePreviewImage})`));let i=c.getChildByClassName(t.element,m.AdaptivePreviewImage);if(i||(i=c.getChildByClassName(c.getChildByClassName(t.element,m.DropDownToggle),m.AdaptivePreviewImage)),s){if(e=this.getBoxSize(s)-this.getBoxOuterOffset(s),i){const t=this.getBoxSize(i)-this.getBoxOuterOffset(i);e=Math.max(e,t)}let o=this.getBoxOffset(t.element),n=s.parentNode;for(;n!==t.element;)o+=this.getBoxOffset(n),n=n.parentNode;return e+o}return e}))}setNoTextWidth(){return this.setPrepareFunc((t=>{let e=this.getBoxSize(t.element);if(c.getChildByClassName(t.element,m.ToolbarEdit))return e;const s=c.getChildByClassName(t.element,m.ToolbarItem);if(c.getChildByClassName(s,m.ToolbarEdit))return e;const i=this.findImageElement(t.element);if(i){const t=i.nextElementSibling;t&&(e-=this.getBoxSize(t),e-=this.getBoxOuterOffset(i))}return e}))}findImageElement(t){var e;let s=c.getChildByClassName(t,g.Image);if(s||(s=c.getChildByClassName(c.getChildByClassName(t,g.Button),g.Image)),!s&&(null===(e=null==t?void 0:t.classList)||void 0===e?void 0:e.contains(m.ToolbarItem))){const e=c.getChildByClassName(t,m.ToolbarItem);return this.findImageElement(e)}return s}}class O extends b{constructor(t){super(null),this.clientStateMap=new Map,this.dotNetReference=t.dotNetReference,this.container=t.getMainElement(),this.containerOffsets=this.calculateContainerOffsets(),this.blockGroupsArray=[],this.isReady=!1,this.classesToApply=[],this.domChanges=[],this.nextAdjustGroupWidth=null}getClientState(t){if(null===t.getAttribute("dxbl-toolbar-adaptive-item"))return null;const e=t.id;if(!e)return null;let s=this.clientStateMap.get(e);return s||(s={id:e},this.clientStateMap.set(e,s)),s}toggleClassNameInternal(t,e,s){this.getBatchCssUpdateCache(t)[e]=s;const i=this.getClientState(t);i&&(i[e]=s)}getBatchCssUpdateCache(t){let e=t._layoutBuilderCache;return e||(e=t._layoutBuilderCache={},this.classesToApply.push(this.createBatchCssUpdateDelegate(t))),e}createBatchCssUpdateDelegate(t){return function(){const s=t._layoutBuilderCache;if(s){delete t._layoutBuilderCache;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.DomUtils.toggleClassName(t,i,s[i])}}}createBlockGroupsCore(t,e,s){const i=[],o=this.querySelectorAll(t);for(let t=0;t<o.length;t++){const n=this.createLayoutEntity(w,this,o[t],e);this.blockGroupsArray.push(n),s&&s(n),n.createBlockGroups(),i.push(n)}return this.nextAdjustGroupWidth=this.getGroupsWidth(),i}initialize(){for(let t=0;t<this.blockGroupsArray.length;t++)this.blockGroupsArray[t].initialize();this.isReady=!0,this.adjust()}adjust(t=null){if(this.isReady){const e=this.classesToApply,s=this.domChanges;let i=this.classesToApply=[],o=this.domChanges=[];const n=this.clientStateMap;let r;null!==this.nextAdjustGroupWidth?(r=this.nextAdjustGroupWidth,this.nextAdjustGroupWidth=null):r=this.getGroupsWidth();for(let t=0;t<this.blockGroupsArray.length;t++)this.blockGroupsArray[t].adjust(r);t&&t(),i=e.concat(i),o=s.concat(o);const h=Array.from(n.values()).concat(Array.from(this.clientStateMap.values()));this.queueUpdates((()=>{for(;i.length;){const t=i.shift();t&&t()}this.queueUpdates((()=>{for(;o.length;){const t=o.shift();t&&t()}h.length&&this.dotNetReference.invokeMethodAsync("OnModelUpdated",h).catch((t=>{l(this.container)||console.error(t)}))}))}))}}toggleVisibility(t,e){const s=this.getClientState(t);s&&(s.isVisible=e)}queueUpdates(t){r(t)}getGroupsWidth(){const t=this.getContainer();return t?t.offsetWidth-this.containerOffsets:0}dispose(){this.containerOffsets=this.calculateContainerOffsets();for(let t=0;t<this.blockGroupsArray.length;t++)this.blockGroupsArray[t].dispose();this.blockGroupsArray=[],this.classesToApply=[],this.isReady=!1,super.dispose()}getGroupElements(t,e){return c.getChildElementNodesByPredicate(t,(function(t){return c.elementMatchesSelector(t,e)}))}createBlockGroups(){this.createBlockGroupsCore(`.${m.Toolbar} > ${k}`,`.${m.ToolbarGroup}`,(function(t){t.defineState(m.AdaptiveItem,(function(t){t.for(`:not(${B})`).setWidth(),t.for(B).setHidden()})),t.defineState(m.AdaptiveItemTextHidden,(function(t){t.for(`:not(${B})`).setNoTextWidth(),t.for(B).setHidden()})),t.defineState(m.AdaptiveItemHidden,(function(t){t.for(`:only-child:not(${B})`).setWidth(),t.for(`:not(:only-child):not(${B})`).setHidden(),t.for(B).setWidth()})),t.defineState(m.AdaptiveItemAllHidden,(function(t){t.for(`:only-child:not(${B})`).setNoTextWidth(),t.for(`:not(:only-child):not(${B})`).setHidden(),t.for(B).setNoTextWidth()}))}))}calculateContainerOffsets(){var t;if(!this.container)return 0;let e=this.getBoxInnerOffset(this.container),s=null!==(t=this.container.querySelector(".dxbl-toolbar"))&&void 0!==t?t:this.container;for(;s!==this.container&&s;)e+=this.getBoxOffset(s),s=s.parentNode;return e}}class G{constructor(t,e){this.currentWidth=null,this.currentHeight=null,this.elementContentWidthSubscription=null,this.mainElement=t,this.layoutBreakPoints=null,this.dotNetReference=e}getMainElement(){return this.mainElement}initialize(){r((()=>{this.buildLayout()})),r((()=>{this.adjustLayout()})),this.elementContentWidthSubscription=h(this.getMainElement(),(t=>{this.currentWidth===t.width&&this.currentHeight===t.height||(this.currentWidth=t.width,this.currentHeight=t.height,this.onBrowserWindowResize())}))}applyLayoutStateAppearance(){var t;e.DomUtils.addClassName(this.getMainElement(),m.Loaded),null===(t=this.layoutBreakPoints)||void 0===t||t.initialize(),setTimeout((()=>{e.DomUtils.removeClassName(this.getMainElement(),m.Loading)}),500)}onBrowserWindowResize(){this.layoutBreakPoints&&this.layoutBreakPoints.adjust()}update(){this.layoutBreakPoints&&this.layoutBreakPoints.adjust()}dispose(){this.elementContentWidthSubscription&&a(this.elementContentWidthSubscription),this.layoutBreakPoints&&this.layoutBreakPoints.dispose()}buildLayout(){this.layoutBreakPoints=this.layoutBreakPoints||new O(this),this.layoutBreakPoints.createBlockGroups()}adjustLayout(){var t;this.applyLayoutStateAppearance(),null===(t=this.layoutBreakPoints)||void 0===t||t.adjust()}}let W=class extends f{};W=t([y(d.Ribbon)],W);const N=new Map;function j(t,e,s){if(!t)return Promise.reject("failed");let i=N.get(t);i?i.update():(i=new G(t,s),i.initialize(),N.set(t,i));const o=t.querySelector(k)||t;return p(o),r((()=>{t.setAttribute(C,"")})),Promise.resolve("ok")}function E(t){return e(t,N),Array.from(N.keys()).forEach((t=>{l(t)&&e(t,N)})),Promise.resolve("ok");function e(t,e){if(!t)return;const s=t.querySelector(k);s&&u(s);const i=e.get(t);null==i||i.dispose(),e.delete(t)}}const L={init:j,dispose:E};export{L as default,E as dispose,j as init};
