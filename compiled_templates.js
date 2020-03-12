!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.annotation_window=n({compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t){return'<div class="popup" id="annotation_window" > \r\n    <div id="current_edited"></div>\r\n    <form name="change_annotation" action="javascript:void(0);">\r\n        <div>\r\n        <label for="position_inp">Pozice: </label>\r\n        <input type="text" name="position" id="position_inp">\r\n        </div>\r\n        <div>\r\n        <label for="no_inp">Číslo anotace: </label>\r\n        <input type="number" name="no" id="no_inp">\r\n        </div>\r\n        <div>\r\n        <label for="heading_inp">Nadpis: </label>\r\n        <input type="text" name="heading" id="heading_inp">\r\n        </div>\r\n        <div id="editor"></div>\r\n        <div>\r\n        <button id="copy_html" class="button">Kopírovat HTML</button>\r\n        <button id="paste_html" class="button">Vložit HTML</button>\r\n        </div>\r\n        <div>\r\n            <button id="save_change" class="button" onclick="save_changes()">Provést změny</button>\r\n            <button id="discard_change" class="button" onclick="discard_changes()">Zahodit změny</button>\r\n        </div>\r\n    </form>\r\n</div>'},useData:!0}),e.gallery=n({compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t){var a,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",s=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="gallery_wrapper" id="gal_wrapper'+s(typeof(a=null!=(a=u(l,"parent_id")||(null!=e?u(e,"parent_id"):e))?a:i)==c?a.call(r,{name:"parent_id",hash:{},data:t,loc:{start:{line:1,column:44},end:{line:1,column:57}}}):a)+'">\r\n    <img class="gal_left_click" id="glc'+s(typeof(a=null!=(a=u(l,"parent_id")||(null!=e?u(e,"parent_id"):e))?a:i)==c?a.call(r,{name:"parent_id",hash:{},data:t,loc:{start:{line:3,column:39},end:{line:3,column:52}}}):a)+'" src="../control_graphic/back_icon.png" onclick="left_click()">\r\n    <img class="gal_right_click" id="grc'+s(typeof(a=null!=(a=u(l,"parent_id")||(null!=e?u(e,"parent_id"):e))?a:i)==c?a.call(r,{name:"parent_id",hash:{},data:t,loc:{start:{line:4,column:40},end:{line:4,column:53}}}):a)+'" src="../control_graphic/right.png" onclick="right_click()">\r\n    <div class="gall_num" id="g_num'+s(typeof(a=null!=(a=u(l,"parent_id")||(null!=e?u(e,"parent_id"):e))?a:i)==c?a.call(r,{name:"parent_id",hash:{},data:t,loc:{start:{line:5,column:35},end:{line:5,column:48}}}):a)+'" >\r\n        <span class="current_img"></span>\r\n        <span class="total"></span>\r\n    </div>\r\n</div>'},useData:!0}),e.model_choice=n({1:function(n,e,l,o,t){var a,r,i=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s="function",u=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <div class="model_choice">\r\n        <input type="radio" id="model_choice'+u(typeof(r=null!=(r=p(l,"index")||t&&p(t,"index"))?r:c)==s?r.call(i,{name:"index",hash:{},data:t,loc:{start:{line:6,column:44},end:{line:6,column:54}}}):r)+'" name="model" value="'+u(typeof(r=null!=(r=p(l,"model_sr")||(null!=e?p(e,"model_sr"):e))?r:c)==s?r.call(i,{name:"model_sr",hash:{},data:t,loc:{start:{line:6,column:76},end:{line:6,column:88}}}):r)+'">\r\n        <label for="model_choice'+u(typeof(r=null!=(r=p(l,"index")||t&&p(t,"index"))?r:c)==s?r.call(i,{name:"index",hash:{},data:t,loc:{start:{line:7,column:32},end:{line:7,column:42}}}):r)+'">'+u((p(l,"increment")||e&&p(e,"increment")||c).call(i,t&&p(t,"index"),{name:"increment",hash:{},data:t,loc:{start:{line:7,column:44},end:{line:7,column:64}}}))+". model</label>\r\n"+(null!=(a=(p(l,"if_equals")||e&&p(e,"if_equals")||c).call(i,null!=e?p(e,"file_size"):e,"",{name:"if_equals",hash:{},fn:n.program(2,t,0),inverse:n.program(4,t,0),data:t,loc:{start:{line:8,column:8},end:{line:13,column:22}}}))?a:"")+"        <p>\r\n            "+u(typeof(r=null!=(r=p(l,"short_comment")||(null!=e?p(e,"short_comment"):e))?r:c)==s?r.call(i,{name:"short_comment",hash:{},data:t,loc:{start:{line:15,column:12},end:{line:15,column:29}}}):r)+"\r\n        </p>\r\n    </div>\r\n"},2:function(n,e,l,o,t){return""},4:function(n,e,l,o,t){var a,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"        <p>\r\n            <b>Velikost:</b> "+n.escapeExpression("function"==typeof(a=null!=(a=r(l,"file_size")||(null!=e?r(e,"file_size"):e))?a:n.hooks.helperMissing)?a.call(null!=e?e:n.nullContext||{},{name:"file_size",hash:{},data:t,loc:{start:{line:11,column:29},end:{line:11,column:42}}}):a)+"\r\n        </p>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t){var a,r,i=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s="function",u=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div id="model_choices">\r\n    <h3>Zvolte kvalitu modelu</h3>\r\n<form name="selection_form" action="javascript:void(0);" onsubmit="choose_model(event, '+u(typeof(r=null!=(r=p(l,"model_scale")||(null!=e?p(e,"model_scale"):e))?r:c)==s?r.call(i,{name:"model_scale",hash:{},data:t,loc:{start:{line:3,column:87},end:{line:3,column:102}}}):r)+", '"+u(typeof(r=null!=(r=p(l,"model_rotation")||(null!=e?p(e,"model_rotation"):e))?r:c)==s?r.call(i,{name:"model_rotation",hash:{},data:t,loc:{start:{line:3,column:105},end:{line:3,column:123}}}):r)+"')\">\r\n"+(null!=(a=p(l,"each").call(i,null!=e?p(e,"qualities"):e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:4,column:4},end:{line:18,column:13}}}))?a:"")+'\r\n    <input type="submit" value="OK">\r\n</form>\r\n</div>'},useData:!0}),e.player=n({1:function(n,e,l,o,t){var a,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        \r\n        <a-entity id="camera" camera=" active: true" look-controls orbit-controls=" target: 0 0 0; minDistance: 1; maxDistance: 50; initialPosition: '+n.escapeExpression("function"==typeof(a=null!=(a=r(l,"camera_position")||(null!=e?r(e,"camera_position"):e))?a:n.hooks.helperMissing)?a.call(null!=e?e:n.nullContext||{},{name:"camera_position",hash:{},data:t,loc:{start:{line:4,column:149},end:{line:4,column:168}}}):a)+'; maxPolarAngle: 180"></a-entity>\r\n          \r\n'},3:function(n,e,l,o,t){var a,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",s=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <a-entity id="camera_rig">\r\n            <a-entity id="camera" camera position="'+s(typeof(a=null!=(a=u(l,"camera_position")||(null!=e?u(e,"camera_position"):e))?a:i)==c?a.call(r,{name:"camera_position",hash:{},data:t,loc:{start:{line:8,column:51},end:{line:8,column:70}}}):a)+'" default-position="'+s(typeof(a=null!=(a=u(l,"camera_position")||(null!=e?u(e,"camera_position"):e))?a:i)==c?a.call(r,{name:"camera_position",hash:{},data:t,loc:{start:{line:8,column:90},end:{line:8,column:109}}}):a)+'" touch-controls="gyroEnabled:false" wasd-controls=" fly:true; acceleration:40"></a-entity>\r\n        </a-entity>\r\n'},5:function(n,e,l,o,t){return""},7:function(n,e,l,o,t){var a,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <a-asset-item id="main_model" src="'+n.escapeExpression("function"==typeof(a=null!=(a=r(l,"model_src")||(null!=e?r(e,"model_src"):e))?a:n.hooks.helperMissing)?a.call(null!=e?e:n.nullContext||{},{name:"model_src",hash:{},data:t,loc:{start:{line:15,column:43},end:{line:15,column:56}}}):a)+'"></a-asset-item>\r\n'},9:function(n,e,l,o,t){var a,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",s=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <a-entity gltf-model="#main_model" id="gltf_model" big_model autoscale=" scale:'+s(typeof(a=null!=(a=u(l,"model_scale")||(null!=e?u(e,"model_scale"):e))?a:i)==c?a.call(r,{name:"model_scale",hash:{},data:t,loc:{start:{line:20,column:83},end:{line:20,column:98}}}):a)+"; rotation: "+s(typeof(a=null!=(a=u(l,"model_rotation")||(null!=e?u(e,"model_rotation"):e))?a:i)==c?a.call(r,{name:"model_rotation",hash:{},data:t,loc:{start:{line:20,column:110},end:{line:20,column:128}}}):a)+'"></a-entity>\r\n'},11:function(n,e,l,o,t){return"<p>Vítejte ve webovém prohlížeči 3D objektů. Snad Vám tato nápověda usnadní jeho používání.</p>\r\n<p><b>Ovládání: </b>v této variantě pouze otáčení pohledu myší.</p>\r\n<p>\r\n    V bočním panelu, kde se nachází tato nápověda, najdete také tlačítko anotace, kterým můžete vypnout zobrazování anotací,\r\n    pokud si chcete nerušeně prohlížet model.\r\n</p>\r\n</div>\r\n</div>\r\n\r\n"},13:function(n,e,l,o,t){return'<p>Vítejte ve webovém prohlížeči 3D objektů. Snad Vám tato nápověda usnadní jeho používání.</p>\r\n<p><b>Ovládání: </b>pomocí šipek nebo WASD a myší otáčení pohledu. Na dotykovém zařízení joystickem.</p>\r\n<p>\r\n    Pokud byste zabloudili, tlačítkem <b>domečku</b> se můžete navrátit zpět na <b>počáteční pozici.</b></p>\r\n<p>\r\n    V bočním panelu, kde se nachází tato nápověda, najdete další užitečné funkce. <br>Můžete <b>vypnout zobrazování \r\n    anotací,</b> pokud si chcete nerušeně prohlédnout model. Také se zde nachází možnost nastavení rychlosti pohybu.\r\n</p>\r\n<p>\r\n    Dvojicí tlačítek <b>Kopírovat pozici</b> a <b>Přejít na pozici</b> si můžete uschovat svoji aktuální polohu a následně se na \r\n    ni kdykoliv vrátit. <br>Tlačítko <b>Kopírovat pozici</b> ji zkopíruje do schránky.\r\n</p>\r\n</div>\r\n</div>\r\n\r\n<img id="home_button" title="Return back to origin." src="../../control_graphic/home.png"></img>\r\n\r\n\r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t){var a,r,i=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<a-scene cursor="rayOrigin:mouse" raycaster="objects: .clickable" gltf-model="dracoDecoderPath: ../draco/;" background=" color: '+n.escapeExpression("function"==typeof(r=null!=(r=s(l,"background_color")||(null!=e?s(e,"background_color"):e))?r:c)?r.call(i,{name:"background_color",hash:{},data:t,loc:{start:{line:1,column:128},end:{line:1,column:148}}}):r)+'" joystick>\r\n'+(null!=(a=s(l,"if").call(i,null!=e?s(e,"orbit_control"):e,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.program(3,t,0),data:t,loc:{start:{line:2,column:4},end:{line:10,column:11}}}))?a:"")+"\r\n    <a-assets>\r\n"+(null!=(a=(s(l,"if_equals")||e&&s(e,"if_equals")||c).call(i,null!=e?s(e,"model_src"):e,"",{name:"if_equals",hash:{},fn:n.program(5,t,0),inverse:n.program(7,t,0),data:t,loc:{start:{line:13,column:8},end:{line:16,column:22}}}))?a:"")+"    </a-assets>\r\n"+(null!=(a=(s(l,"if_equals")||e&&s(e,"if_equals")||c).call(i,null!=e?s(e,"model_src"):e,"",{name:"if_equals",hash:{},fn:n.program(5,t,0),inverse:n.program(9,t,0),data:t,loc:{start:{line:18,column:4},end:{line:21,column:18}}}))?a:"")+'    <a-entity light="type: point; intensity: 1; distance: 100; decay: 2" position="0 0 0"></a-entity>\r\n    <a-entity light="type: ambient; color: #CCC"></a-entity>\r\n</a-scene>\r\n\r\n<div class="popup" id="help_popup">\r\n<div class="popup_heading"> <span class="back_icon"><img src="../control_graphic/back_icon.png"></span>Nápověda</div>\r\n<div class="popup_body">\r\n'+(null!=(a=s(l,"if").call(i,null!=e?s(e,"orbit_control"):e,{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.program(13,t,0),data:t,loc:{start:{line:29,column:0},end:{line:58,column:7}}}))?a:"")},useData:!0}),e.popup=n({1:function(n,e,l,o,t,a,r){var i,c,s=null!=e?e:n.nullContext||{},u=n.hooks.helperMissing,p="function",d=n.escapeExpression,m=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="popup" id="'+d(typeof(c=null!=(c=m(l,"key")||t&&m(t,"key"))?c:u)==p?c.call(s,{name:"key",hash:{},data:t,loc:{start:{line:2,column:23},end:{line:2,column:31}}}):c)+'">\r\n    <div class="popup_heading"> <span class="back_icon"><img src="../../control_graphic/back_icon.png"></span><span class="heading_span" >'+d(typeof(c=null!=(c=m(l,"heading")||(null!=e?m(e,"heading"):e))?c:u)==p?c.call(s,{name:"heading",hash:{},data:t,loc:{start:{line:3,column:138},end:{line:3,column:149}}}):c)+'</span></div>\r\n    <div class="popup_body"> <span class="popup_text"> '+(null!=(i=typeof(c=null!=(c=m(l,"text")||(null!=e?m(e,"text"):e))?c:u)==p?c.call(s,{name:"text",hash:{},data:t,loc:{start:{line:4,column:55},end:{line:4,column:65}}}):c)?i:"")+"</span> </div>\r\n"+(null!=(i=m(l,"if").call(s,null!=r[1]?m(r[1],"edit_mode"):r[1],{name:"if",hash:{},fn:n.program(2,t,0,a,r),inverse:n.noop,data:t,loc:{start:{line:5,column:4},end:{line:7,column:11}}}))?i:"")+"</div>\r\n"},2:function(n,e,l,o,t){var a,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <button class="button ed_button" id="edit'+n.escapeExpression("function"==typeof(a=null!=(a=r(l,"key")||t&&r(t,"key"))?a:n.hooks.helperMissing)?a.call(null!=e?e:n.nullContext||{},{name:"key",hash:{},data:t,loc:{start:{line:6,column:49},end:{line:6,column:57}}}):a)+'">Upravit</button>\r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t,a,r){var i,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(i=c(l,"each").call(null!=e?e:n.nullContext||{},null!=e?c(e,"annotations"):e,{name:"each",hash:{},fn:n.program(1,t,0,a,r),inverse:n.noop,data:t,loc:{start:{line:1,column:0},end:{line:9,column:9}}}))?i:""},useData:!0,useDepths:!0}),e.popup_button=n({1:function(n,e,l,o,t){var a,r=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c=n.escapeExpression,s="function",u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<a-text \r\n    value="'+c((u(l,"get_number")||e&&u(e,"get_number")||i).call(r,t&&u(t,"key"),{name:"get_number",hash:{},data:t,loc:{start:{line:3,column:11},end:{line:3,column:30}}}))+'" width="6" align="center"\r\n    look-at="[camera]" color="white" id="rendered'+c(typeof(a=null!=(a=u(l,"key")||t&&u(t,"key"))?a:i)==s?a.call(r,{name:"key",hash:{},data:t,loc:{start:{line:4,column:49},end:{line:4,column:57}}}):a)+'"\r\n    class="clickable" info-window=" window_id:'+c(typeof(a=null!=(a=u(l,"key")||t&&u(t,"key"))?a:i)==s?a.call(r,{name:"key",hash:{},data:t,loc:{start:{line:5,column:46},end:{line:5,column:54}}}):a)+'" position="'+c(typeof(a=null!=(a=u(l,"position")||(null!=e?u(e,"position"):e))?a:i)==s?a.call(r,{name:"position",hash:{},data:t,loc:{start:{line:5,column:66},end:{line:5,column:78}}}):a)+'"\r\n></a-text>\r\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,o,t){var a,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=r(l,"each").call(null!=e?e:n.nullContext||{},null!=e?r(e,"annotations"):e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?a:""},useData:!0})}();