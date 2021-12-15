let definition =
      {"dataSource":{"contextVariables":[{"id":3,"name":"User.userAccountId","val":"0015f00000FDSAFAAD"}],"orderBy":{"isReverse":false,"name":""},"type":"DataRaptor","value":{"bundle":"InsReadAccountContactDetails","inputMap":{"Id":"{User.userAccountId}"},"resultVar":""}},"dynamicCanvasWidth":{"type":"tablet_l"},"enableLwc":true,"globalCSS":true,"isFlex":true,"lwc":{"DeveloperName":"cfInsYourAgent_nds","Id":"0Rb5f000002CtwACAA","MasterLabel":"cfInsYourAgent_nds","NamespacePrefix":"c","ManageableState":"unmanaged"},"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3EYour%20Agent%3C/div%3E","record":"{record}"},"size":{"default":12,"isResponsive":true,"large":12,"medium":12,"small":12},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-m-bottom_medium nds-page-header__title nds-color__text_gray-11","container":{"class":""},"customClass":"nds-m-bottom_medium nds-page-header__title nds-color__text_gray-11","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":12,"isResponsive":true,"large":12,"medium":12,"small":12},"sizeClass":"nds-large-size_12-of-12 nds-medium-size_12-of-12 nds-small-size_12-of-12 nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"},{"class":"nds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"PrimaryBroker.Image","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BPrimaryBroker.Image%7D%3C/div%3E","record":"{record}"},"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-rounded-image","container":{"class":""},"customClass":"nds-rounded-image","elementStyleProperties":{},"height":"","inlineStyle":"","margin":[],"maxHeight":"","minHeight":"","padding":[],"selectedStyles":"","size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"nds-large-size_3-of-12 nds-medium-size_3-of-12 nds-small-size_4-of-12 nds-size_4-of-12 ","style":"             ","text":{"align":"","color":""},"theme":""},"type":"text"},{"class":"nds-col ","element":"flexIcon","elementLabel":"Icon-2","name":"Icon","property":{"data-conditions":{"group":[{"field":"PrimaryBroker","id":"state-new-condition-7","operator":"==","type":"custom","value":"undefined"},{"field":"PrimaryBroker.Image","id":"state-new-condition-14","logicalOperator":"||","operator":"==","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon-action-user nds-icon_xx-large","iconName":"action:user","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"large","variant":"inverse"},"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-rounded-image","container":{"class":""},"customClass":"nds-rounded-image","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":true,"large":"3","medium":"3","small":"4"},"sizeClass":"nds-large-size_3-of-12 nds-medium-size_3-of-12 nds-small-size_4-of-12 nds-size_4-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"children":[{"class":"nds-col ","element":"outputField","elementLabel":"Block-2-Field-1","key":"element_element_block_3_0_outputField_0_0","name":"Field","parentElementKey":"element_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"PrimaryBroker","id":"state-new-condition-58","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"Name","placeholder":"","record":"{record}","styles":{"label":{"color":"","fontSize":""},"value":{"color":"","fontSize":""}},"type":"text"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-text-body_medium_bold nds-m-bottom--small   nds-color__text_gray-11","container":{"class":""},"customClass":"nds-text-body_medium_bold nds-m-bottom--small   nds-color__text_gray-11","elementStyleProperties":{"styles":{"label":{"color":"","fontSize":""},"value":{"color":"","fontSize":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"nds-size_11-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-2-Field-2","key":"element_element_block_3_0_outputField_1_0","name":"Field","parentElementKey":"element_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"PrimaryBroker","id":"state-new-condition-65","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"fieldName":"agentDetails","placeholder":"","record":"{record}","type":"text"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"nds-size_8-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"outputField","elementLabel":"Block-2-Text-3","key":"element_element_block_3_0_outputField_2_0","name":"Text","parentElementKey":"element_block_3_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"PrimaryBroker","id":"state-new-condition-72","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BPrimaryBroker.Phone%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"text"}],"class":"nds-col ","element":"block","elementLabel":"Block-3","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"8","isResponsive":true,"large":"9","medium":"9","small":"8"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-left--medium ","container":{"class":"nds-p-left--medium"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":true,"large":"9","medium":"9","small":"8"},"sizeClass":"nds-large-size_9-of-12 nds-medium-size_9-of-12 nds-small-size_8-of-12 nds-size_8-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"},{"children":[{"class":"nds-col ","element":"action","elementLabel":"Action-4","key":"element_element_block_3_0_action_0_0","name":"Action","parentElementKey":"element_block_3_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Web Page":{"targetName":"mailto:{PrimaryBroker.Email}"},"displayName":"Email","id":"flex-action-1603354110291","openUrlIn":"Current Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":""}}},"size":{"default":"2","isResponsive":true,"large":"2","medium":"2","small":"2"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-border_right nds-text-link","container":{"class":""},"customClass":"nds-border_right nds-text-link","elementStyleProperties":{"styles":{"label":{"color":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":true,"large":"2","medium":"2","small":"2"},"sizeClass":"nds-large-size_2-of-12 nds-medium-size_2-of-12 nds-small-size_2-of-12 nds-size_2-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"},{"class":"nds-col ","element":"action","elementLabel":"Block-3-Action-0-clone-0","key":"element_element_block_3_0_action_1_0","name":"Action","parentElementKey":"element_block_3_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"Web Page":{"targetName":"http://{PrimaryBroker.WebSite}"},"displayName":"Website","id":"flex-action-1603355674089","openUrlIn":"New Tab/Window","targetType":"Web Page","type":"Custom","vlocityIcon":"standard-default"},"stateObj":"{record}","styles":{"label":{"color":""}}},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":" nds-text-link nds-p-left--small","container":{"class":""},"customClass":" nds-text-link nds-p-left--small","elementStyleProperties":{"styles":{"label":{"color":""}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"2","isResponsive":false},"sizeClass":"nds-size_2-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"element"}],"class":"nds-col ","element":"block","elementLabel":"Block-4","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"PrimaryBroker","id":"state-new-condition-45","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-p-around_x-small nds-m-top_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:medium","size":"medium","type":"top"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"             ","text":{"align":"","color":""}},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#ffffff","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"nds-communities-agent nds-color__text_gray-11 nds-p-vertical--medium ","container":{"class":"nds-communities-agent nds-color__text_gray-11 nds-p-vertical--medium"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"nds-size_12-of-12 ","style":"background-color:#ffffff;             ","text":{"align":"","color":""}}}],"theme":"nds","title":"insYourAgent_nds","xmlObject":{"masterLabel":"insYourAgent_nds","apiVersion":48,"runtimeNamespace":"vlocity_ins","targetConfigs":"PHRhcmdldENvbmZpZyB0YXJnZXRzPSJsaWdodG5pbmdfX0FwcFBhZ2UiPg0KICAgICAgPHByb3BlcnR5IG5hbWU9ImRlYnVnIiB0eXBlPSJCb29sZWFuIi8+DQogICAgICA8cHJvcGVydHkgbmFtZT0icmVjb3JkSWQiIHR5cGU9IlN0cmluZyIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgdGFyZ2V0cz0ibGlnaHRuaW5nX19SZWNvcmRQYWdlIj4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJkZWJ1ZyIgdHlwZT0iQm9vbGVhbiIvPg0KICAgIDwvdGFyZ2V0Q29uZmlnPg0KICAgIDx0YXJnZXRDb25maWcgeG1sbnM9IiIgdGFyZ2V0cz0ibGlnaHRuaW5nQ29tbXVuaXR5X19EZWZhdWx0Ij4NCiAgICAgIDxwcm9wZXJ0eSBuYW1lPSJyZWNvcmRJZCIgdHlwZT0iU3RyaW5nIi8+DQogICAgPC90YXJnZXRDb25maWc+","targets":{"target":["lightning__RecordPage","lightning__AppPage","lightning__HomePage","lightningCommunity__Page","lightningCommunity__Default"]},"isExplicitImport":false},"Id":"a5P5f000000QKqFEAG","vlocity_ins__GlobalKey__c":"insYourAgent_nds/Vlocity/1/1605749442421","vlocity_ins__IsChildCard__c":false};
  export default definition