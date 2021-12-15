export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"vex_personal_lines@vlocity.com","userId":"0055f000006m7YIAAY","userCurrencyCode":"USD","timeStamp":"2021-09-03T01:21:18.625Z","sOmniScriptId":"a3F5f000000vOw5EAE","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":true,"stylesheet":{"newport":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"6b04b9fd-881e-e18a-eeb6-85f29cd470dc","labelMap":{"cancellationDetailsHeadline":"confirmCancellation:cancellationDetailsHeadline","modPremCurrency":"confirmCancellation:modPremCurrency","refund":"confirmCancellation:refund","effectiveDateValidation":"cancelPolicy:effectiveDateValidation","originalPremium":"cancelPolicy:originalPremium","endDate":"cancelPolicy:endDate","startDate":"cancelPolicy:startDate","hdlPolicyDetails":"cancelPolicy:hdlPolicyDetails","spacingTextBlock":"cancelPolicy:spacingTextBlock","lineBreak1":"cancelPolicy:lineBreak1","effectiveDate":"cancelPolicy:effectiveDate","hldDateSpacer":"cancelPolicy:hldDateSpacer","viewPolicy":"viewPolicy","UpdatePolicyUniqueName":"UpdatePolicyUniqueName","cancelPolicyService":"cancelPolicyService","confirmCancellation":"confirmCancellation","prepareToCancel":"prepareToCancel","cancelPolicy":"cancelPolicy","setEffectiveDate":"setEffectiveDate","setDisplayValues":"setDisplayValues","setPolicyDisplayValues":"setPolicyDisplayValues","getPolicyDetails":"getPolicyDetails"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":null,"policyId":"%ContextId%"},"remoteMethod":"getPolicyDetails","remoteClass":"InsPolicyService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"Ins_TransforPolicyDetails_CancelPolicyOS","postMessage":"Done","message":{},"label":"getPolicyDetails","inProgressMessage":"In Progress","getDataDRBundleName":"Ins_ReadFSCPolicyDetails","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"getPolicyDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"getPolicyDetails","lwcId":"lwc0"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"Step","ssm":false,"showPersistentComponent":[null,null],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"setPolicyDisplayValues","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"dataRaptor Input Parameters":[{"inputParam":"Id","element":"ContextId"}],"controlWidth":12,"bundle":"Fsc_ReadPolicyDetails","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setPolicyDisplayValues","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"setPolicyDisplayValues","lwcId":"lwc1"},{"type":"DataRaptor Transform Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"setDisplayValues","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"FSC_TransPolicyDetails_CancelPolicyOS","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setDisplayValues","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bDataRaptorTransformAction":true,"JSONPath":"setDisplayValues","lwcId":"lwc2"},{"type":"Set Values","propSetMap":{"wpm":false,"validationRequired":"None","ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":"setEffectiveDate","elementValueMap":{"policyId":"%ContextId%","effectiveDate":"=TODAY()"},"disOnTplt":false,"controlWidth":12,"aggElements":{}},"offSet":0,"name":"setEffectiveDate","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"setEffectiveDate","lwcId":"lwc3"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":6,"nextLabel":"Calculate and Display Refund","label":"When would you like the cancellation to take effect?","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"Details","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"cancelPolicy":"","effectiveDate":"","startDate":"","endDate":"","originalPremium":""},"aggElements":{}},"offSet":0,"name":"cancelPolicy","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Headline","rootIndex":4,"response":null,"propSetMap":{"show":null,"sanitize":false,"labelKey":"","label":null,"disOnTplt":false,"controlWidth":4,"HTMLTemplateId":""},"name":"hldDateSpacer","level":1,"JSONPath":"cancelPolicy:hldDateSpacer","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"lwcId":"lwc40-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Date","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":false,"modelDateFormat":"yyyy-MM-dd","minDate":"today","label":"Cancellation Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"dateType":"string","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"effectiveDate","level":1,"JSONPath":"cancelPolicy:effectiveDate","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc41-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Line Break","rootIndex":4,"response":null,"propSetMap":{"show":null,"padding":0,"label":"LineBreak1","disOnTplt":false,"HTMLTemplateId":""},"name":"lineBreak1","level":1,"JSONPath":"cancelPolicy:lineBreak1","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc42-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Text Block","rootIndex":4,"response":null,"propSetMap":{"textKey":"","text":"","show":null,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"spacingTextBlock","level":1,"JSONPath":"cancelPolicy:spacingTextBlock","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc43-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Headline","rootIndex":4,"response":null,"propSetMap":{"show":null,"label":"<h3>Policy Details</h3>","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"hdlPolicyDetails","level":1,"JSONPath":"cancelPolicy:hdlPolicyDetails","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"lwcId":"lwc44-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Date","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"modelDateFormat":"yyyy-MM-dd","label":"Start Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"startDate","level":1,"JSONPath":"cancelPolicy:startDate","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc45-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Date","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"modelDateFormat":"yyyy-MM-dd","label":"End Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"endDate","level":1,"JSONPath":"cancelPolicy:endDate","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc46-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Currency","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"min":null,"max":null,"mask":2,"label":"Original Premium","inputWidth":12,"hideGroupSep":false,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"currencySymbol":"$","controlWidth":4,"conditionType":"Hide if False","allowNegative":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"originalPremium","level":1,"JSONPath":"cancelPolicy:originalPremium","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bCurrency":true,"lwcId":"lwc47-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Validation","rootIndex":4,"response":null,"propSetMap":{"validateExpression":{"group":{"rules":[{"field":"effectiveDate","data":"endDate","condition":"<"}],"operator":"OR"}},"show":null,"messages":[{"value":true,"type":"Success","text":"","active":false},{"value":false,"type":"Requirement","text":"Any new end date must be prior to existing policy end date.","active":true}],"label":"Effective Date","hideLabel":true,"controlWidth":12,"HTMLTemplateId":""},"name":"effectiveDateValidation","level":1,"JSONPath":"cancelPolicy:effectiveDateValidation","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bMessaging":true,"lwcId":"lwc48-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"cancelPolicy","lwcId":"lwc4"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","ssm":false,"showPersistentComponent":[false,false],"show":null,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","policyId":"%ContextId%","effectiveDate":"%effectiveDate%"},"remoteMethod":"prepareToCancelPolicy","remoteClass":"InsPolicyService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postMessage":"Done","message":{},"label":"Prepare to cancel","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"aggElements":{}},"offSet":0,"name":"prepareToCancel","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"prepareToCancel","lwcId":"lwc5"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":6,"nextLabel":"Approve and Proceed","label":"Please review & confirm your cancellation","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"Review","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"confirmCancellation":""},"aggElements":{"refund":"","modPremCurrency":""}},"offSet":0,"name":"confirmCancellation","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Formula","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"refund","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"%priceDiff%","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","controlWidth":12,"HTMLTemplateId":""},"name":"refund","level":1,"JSONPath":"confirmCancellation:refund","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc60-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Formula","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"Formula1","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"CURRENCY(ROUND(%totalPremiumForTerm%+%totalTaxForTerm%+%totalFeeForTerm%,2))","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","controlWidth":12,"HTMLTemplateId":""},"name":"modPremCurrency","level":1,"JSONPath":"confirmCancellation:modPremCurrency","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc61-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text Block","rootIndex":6,"response":null,"propSetMap":{"textKey":"","text":"<table style=\"width: 405px; margin-left: auto; margin-right: auto;\">\n<tbody>\n<tr>\n<td style=\"width: 258.582px;\">\n<h3><strong>Cancellation Date:&nbsp;</strong></h3>\n</td>\n<td style=\"width: 146.418px; text-align: right;\">\n<h3>%effectiveDate%</h3>\n</td>\n</tr>\n<tr>\n<td style=\"width: 258.582px;\">\n<h3><strong>Original Period Premium:</strong></h3>\n</td>\n<td style=\"width: 146.418px; text-align: right;\">\n<h3>%originalPremium%</h3>\n</td>\n</tr>\n<tr>\n<td style=\"width: 258.582px;\">\n<h3><strong>Modified Period Premium:</strong></h3>\n</td>\n<td style=\"width: 146.418px; text-align: right;\">\n<h3>%modPremCurrency%</h3>\n</td>\n</tr>\n<tr>\n<td style=\"width: 258.582px;\">\n<h3><strong>Refund:</strong></h3>\n</td>\n<td style=\"width: 146.418px; text-align: right;\">\n<h3>%refund%</h3>\n</td>\n</tr>\n</tbody>\n</table>\n<p style=\"text-align: center;\"></p>\n<h5 style=\"text-align: center;\">&nbsp;</h5>\n<h5 style=\"text-align: center;\">Clicking Approve will execute this cancellation on the scheduled cancellation date.&nbsp;</h5>\n<h5 style=\"text-align: center;\">You will receive the refund only after the cancel date has passed.</h5>","show":null,"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"cancellationDetailsHeadline","level":1,"JSONPath":"confirmCancellation:cancellationDetailsHeadline","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc62-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"confirmCancellation","lwcId":"lwc6"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","toastComplete":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","policyId":"%ContextId%","includeRevenueSchedule":true,"effectiveDate":"%effectiveDate%","createTransaction":true},"remoteMethod":"cancelPolicy","remoteClass":"InsPolicyService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Cancel Policy","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"cancelPolicyService","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"cancelPolicyService","lwcId":"lwc7"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[null,null],"show":null,"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"label":"UpdatePolicyUniqueName","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"ins_updatePolicy_uniqueName","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"UpdatePolicyUniqueName","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"UpdatePolicyUniqueName","lwcId":"lwc8"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variantOptions":["brand","outline-brand","neutral","success","destructive","text-destructive","inverse","link"],"variant":"neutral","validationRequired":null,"targetTypeOptions":["Component","Current Page","Knowledge Article","Named Page","Navigation Item","Object","Record","Record Relationship","Web Page","Vlocity OmniScript"],"targetType":"Record","targetParams":"%ContextId%","targetName":"InsurancePolicy","targetLWCLayoutOptions":["lightning","newport"],"targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":null,"replaceOptions":[{"value":false,"label":"No"},{"value":true,"label":"Yes"}],"replace":true,"recordActionOptions":["clone","edit","view"],"recordAction":"view","pubsub":false,"objectActionOptions":["home","list","new"],"objectAction":"new","message":{},"loginAction":"login","label":"View Policy","iconVariant":"","iconPositionOptions":["left","right"],"iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"viewPolicy","level":0,"indexInParent":9,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"viewPolicy","lwcId":"lwc9"}],"bReusable":false,"bpVersion":1,"bpType":"insFSC","bpSubType":"PolicyCancellation","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};