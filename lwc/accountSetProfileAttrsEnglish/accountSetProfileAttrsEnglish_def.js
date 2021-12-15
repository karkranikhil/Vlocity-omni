export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"vex_personal_lines@vlocity.com","userId":"0055f000006m7YIAAY","userCurrencyCode":"USD","timeStamp":"2021-09-03T00:49:08.293Z","sOmniScriptId":"a3F5f000000vOvsEAE","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"scrollBehavior":"auto","saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge","dispOutsideOmni":false}],"message":{},"mergeSavedData":false,"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":true,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":true},"prefillJSON":"{}","lwcId":"522cf348-7a57-c2af-6fe3-658a41838470","labelMap":{"Segment":"Step1:Segment","LifeEvents":"Step1:LifeEvents","Interests":"Step1:Interests","ProductLinesHeld":"Step1:ProductLinesHeld","Family":"Step1:Family","CloseAndRefresh":"CloseAndRefresh","DataRaptorPostAction1":"DataRaptorPostAction1","Step1":"Step1","SetValues2":"SetValues2","DR_AcctExt":"DR_AcctExt"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[true,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"DataRaptorExtractAction1","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"AccountId","element":"ContextId"}],"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"AccountProfileExtract","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"DR_AcctExt","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"DR_AcctExt","lwcId":"lwc0"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[true,false],"show":null,"pubsub":false,"message":{},"label":"SetValues1","elementValueMap":{"Segment":"%Tags:Customer_Market_Segment__c%","ProductLinesHeld":"%Tags:Customer_Product_Lines__c%","LifeEvents":"%Tags:Customer_Life_Events__c%","Interests":"%Tags:Customer_Interests__c%","Family":"%Tags:Customer_Family__c%"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetValues2","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues2","lwcId":"lwc1"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[true,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Save","message":{},"label":"Set Customer Attributes","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","businessEvent":"","businessCategory":"","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"Step1":"","Family":"","ProductLinesHeld":"","Interests":"","LifeEvents":"","Segment":""},"aggElements":{}},"offSet":0,"name":"Step1","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[],"optionWidth":100,"optionSource":{"type":"SObject","source":"Account.Customer_Family__c"},"optionHeight":100,"label":"Family","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":2,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Family","level":1,"JSONPath":"Step1:Family","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[],"optionWidth":100,"optionSource":{"type":"SObject","source":"Account.Customer_Product_Lines2__c"},"optionHeight":100,"label":"Product Lines","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":2,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"ProductLinesHeld","level":1,"JSONPath":"Step1:ProductLinesHeld","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc21-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[],"optionWidth":100,"optionSource":{"type":"SObject","source":"Account.Customer_Interests__c"},"optionHeight":100,"label":"Interests","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":2,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Interests","level":1,"JSONPath":"Step1:Interests","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc22-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[],"optionWidth":100,"optionSource":{"type":"SObject","source":"Account.Customer_Life_Events__c"},"optionHeight":100,"label":"Life Events","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":2,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"LifeEvents","level":1,"JSONPath":"Step1:LifeEvents","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc23-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Multi-select","rootIndex":2,"response":null,"propSetMap":{"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[],"optionWidth":100,"optionSource":{"type":"SObject","source":"Account.Customer_Market_Segment__c"},"optionHeight":100,"label":"Segment","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":3,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Segment","level":1,"JSONPath":"Step1:Segment","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bMultiselect":true,"lwcId":"lwc24-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Step1","lwcId":"lwc2"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[true,false],"show":null,"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"label":"DataRaptorPostAction1","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"controlWidth":12,"businessEvent":"","businessCategory":"","bundle":"AccountUpdateAttributes","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"DataRaptorPostAction1","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"DataRaptorPostAction1","lwcId":"lwc3"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"Submit","targetType":"Current Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replace":false,"recordAction":"view","pubsub":true,"objectAction":"home","message":{},"loginAction":"login","label":"NavigateAction1","iconVariant":"","iconPosition":"left","iconName":"","controlWidth":12,"businessEvent":"","businessCategory":"","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CloseAndRefresh","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"CloseAndRefresh","lwcId":"lwc4"}],"bReusable":false,"bpVersion":1,"bpType":"Account","bpSubType":"SetProfileAttrs","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};