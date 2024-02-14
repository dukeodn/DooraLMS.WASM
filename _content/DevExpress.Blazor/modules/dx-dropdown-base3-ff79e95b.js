import{_ as e}from"./_tslib-6e8ca86b.js";import{P as t}from"./dx-html-element-pointer-events-helper-1bf230d1.js";import{E as o}from"./eventhelper-8570b930.js";import{C as n}from"./custom-events-helper-e7f279d3.js";import{d as s}from"./constants-d4ec8d6f.js";import{P as p}from"./portal-9686dca9.js";import{o as r,q as i}from"./popup-a1c2390a.js";import{d as l,e as u,f as a}from"./logicaltreehelper-99f1adf9.js";import{C as d}from"./css-classes-f45f6949.js";import{DxMaskedInputEditor as h}from"./masked-input-eb4f162b.js";import{s as m}from"./lit-element-70cf14f4.js";import{e as c}from"./property-d3853089.js";class E extends Event{constructor(){super(E.eventName,{bubbles:!0,composed:!0,cancelable:!0})}}E.eventName=s+".opendropdown";class v extends Event{constructor(){super(v.eventName,{bubbles:!0,composed:!0,cancelable:!0})}}v.eventName=s+".closedropdown",n.register(E.eventName,(e=>e.detail)),n.register(v.eventName,(e=>e.detail));class P{constructor(e){this.boundOnPopupElementChangedHandler=this.onPopupElementChanged.bind(this),this.boundOnPopupShownHandler=this.onPopupShown.bind(this),this.boundOnPopupClosedHandler=this.onPopupClosed.bind(this),this.boundOnPopupPortalElementsChangedHandler=this.onDropDownPortalElementsChanged.bind(this),this.control=e,this.popupPortal=null,this._popupElement=null,this._adaptiveDropDownElement=null}get popupElement(){return this._popupElement}get useMobileFocusBehaviour(){var e;return(null===(e=this._adaptiveDropDownElement)||void 0===e?void 0:e.adaptivityEnabled)||!1}onConnectedCallback(){this.ensurePopupInfrastructure(),this.control.addEventListener(p.eventName,this.boundOnPopupElementChangedHandler)}onDisconnectedCallback(){this.control.removeEventListener(p.eventName,this.boundOnPopupElementChangedHandler),this.disposePopupInfrastructure()}onSlotChanged(){this.disposePopupInfrastructure(),this.ensurePopupInfrastructure()}getPopupPortal(){if(!this.control.shadowRoot)return null;const e=this.control.shadowRoot.querySelector("slot");if(!e)return null;return e.assignedNodes().find((e=>l(e)))}onPopupElementChanged(e){o.getOriginalSource(e)===this.popupPortal&&(this.disposePopupElement(),this.ensurePopupElement())}onPopupShown(e){this.popupElement&&u(this.popupElement)&&this.control.addLogicalChild(this.popupElement)}onPopupClosed(e){this.popupElement&&u(this.popupElement)&&this.control.removeLogicalChild(this.popupElement)}onDropDownPortalElementsChanged(e){this.ensurePopupElement()}ensurePopupInfrastructure(){var e;this.popupPortal=this.getPopupPortal(),null===(e=this.popupPortal)||void 0===e||e.addEventListener(p.eventName,this.boundOnPopupPortalElementsChangedHandler),this.ensurePopupElement()}ensurePopupElement(){var e,t,o;this.popupPortal&&(this._popupElement=null===(e=this.popupPortal)||void 0===e?void 0:e.popupBase,null===(t=this._popupElement)||void 0===t||t.addEventListener(r.eventName,this.boundOnPopupShownHandler),null===(o=this._popupElement)||void 0===o||o.addEventListener(i.eventName,this.boundOnPopupClosedHandler),this._popupElement&&a(this._popupElement)&&(this._adaptiveDropDownElement=this._popupElement),this.control.ensurePopupElement())}disposePopupInfrastructure(){var e;null===(e=this.popupPortal)||void 0===e||e.removeEventListener(p.eventName,this.boundOnPopupPortalElementsChangedHandler),this.popupPortal=null,this._adaptiveDropDownElement=null,this.disposePopupElement()}disposePopupElement(){var e,t;null===(e=this._popupElement)||void 0===e||e.removeEventListener(r.eventName,this.boundOnPopupShownHandler),null===(t=this._popupElement)||void 0===t||t.removeEventListener(i.eventName,this.boundOnPopupClosedHandler),this._popupElement=null,this.control.disposePopupElement()}}class D{}D.DropDownButton=d.Prefix+"-edit-btn-dropdown";class w extends h{constructor(){super(),this.isDropDownOpen=!1,this.dropDownButtonElement=null,this.popupHelper=new P(this)}get useMobileFocusBehaviour(){return this.popupHelper.useMobileFocusBehaviour}get popupElement(){return this.popupHelper.popupElement}get dropDownElement(){return this.popupElement}get shouldProcessFocusOut(){return!0}connectedCallback(){super.connectedCallback(),this.popupHelper.onConnectedCallback()}disconnectedCallback(){this.popupHelper.onDisconnectedCallback(),super.disconnectedCallback()}contentChanged(){super.contentChanged(),this.popupHelper.onSlotChanged(),this.dropDownButtonElement=this.querySelector(`.${D.DropDownButton}`),u(this.editBoxElement)&&this.addLogicalChild(this.editBoxElement)}processKeyDown(e){return this.isDropDownOpen||this.processKeyDownServerCommand(e),super.processKeyDown(e)}processFocusOut(e){var t,n,s;const p=o.getEventSource(e);if(null===(t=this.popupElement)||void 0===t?void 0:t.contains(p))return;const r=null!==(n=e.relatedTarget)&&void 0!==n?n:document.activeElement;if(this.contains(r)||(null===(s=this.popupElement)||void 0===s?void 0:s.contains(r)))return;this.raiseFocusOut(this.fieldElement?this.fieldElementValue:this.fieldText)}processFocusIn(){this.focused&&super.processFocusIn()}processPointerDown(e){var t;return o.containsInComposedPath(e,w.isDropDownButtonElement)&&(this.toggleDropDownVisibility(),this.focused||(this.shouldApplySelectionOnFocus=!1,null===(t=this.editBoxElement)||void 0===t||t.focus(),this.shouldApplySelectionOnFocus=!0),o.markHandled(e)),super.processPointerDown(e)}canHandlePointerDown(e){return t.containsInComposedPath(e,this.dropDownButtonElement)||t.containsInComposedPath(e,this.inputElement)}processKeyDownServerCommand(e){return!!w.isToggleDropDownVisibilityKeyCommand(e)&&(this.toggleDropDownVisibility(),!0)}ensurePopupElement(){}disposePopupElement(){}toggleDropDownVisibility(){this.isDropDownOpen?this.dispatchEvent(new v):this.enabled&&!this.isReadOnly&&this.dispatchEvent(new E)}static isToggleDropDownVisibilityKeyCommand(e){return(e.altKey||e.metaKey)&&("ArrowUp"===e.key||"ArrowDown"===e.key)}static isDropDownButtonElement(e){var t;return!!e&&(null===(t=e.classList)||void 0===t?void 0:t.contains(D.DropDownButton))}isEditBoxElement(e){return e===this.fieldElement||e===this.editBoxTemplateElement}processCapturedKeyDownAsync(e,t){return this.processKeyDownServerCommand(e)?(e.preventDefault(),t.handled=!0,Promise.resolve()):super.processCapturedKeyDownAsync(e,t)}async processCapturedPointerDownAsync(e,t){return this.canHandlePointerDown(e)?(t.handled=!0,Promise.resolve()):super.processCapturedPointerDownAsync(e,t)}}w.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0},e([c({type:Boolean,attribute:"is-dropdown-open"})],w.prototype,"isDropDownOpen",void 0);export{w as D};
