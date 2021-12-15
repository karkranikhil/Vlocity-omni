export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"vex_personal_lines@vlocity.com","userId":"0055f000006m7YIAAY","userCurrencyCode":"USD","timeStamp":"2021-09-03T01:18:51.66Z","sOmniScriptId":"a3F5f000000vOw8EAE","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{"Debugpage":"InsuranceRulesOmniScriptUniversal?layout=newport&debugLog=true"},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newport":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currentLanguage":"en_US","currencyCode":"","consoleTabTitle":null,"consoleTabLabel":"New","consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":true,"allowCancel":true},"prefillJSON":"{}","lwcId":"5cff0bbf-548f-c700-62c0-215e62975c40","labelMap":{"FlexcardReview":"confirmationScreen:FlexcardReview","txtModalPriceReductionMarine":"configure:txtModalPriceReductionMarine","txtPriceReductionMarine":"configure:txtPriceReductionMarine","txtPriceReduction":"configure:txtPriceReduction","absAmountOwed":"configure:absAmountOwed","modalPriceDifference":"configure:modalPriceDifference","absPriceDifference":"configure:absPriceDifference","feeDiff":"configure:feeDiff","taxDiff":"configure:taxDiff","priceDifference":"configure:priceDifference","timeFactor":"configure:timeFactor","isPreviousMode":"configure:isPreviousMode","previousBilldate":"configure:previousBilldate","configureCoverageBOP":"configure:configureCoverageBOP","configureCoveragesMarine":"configure:configureCoveragesMarine","configureCoverages":"configure:configureCoverages","modalPremium":"configure:modalPremium","newExpirationDate":"configure:newExpirationDate","newEffectiveDate":"configure:newEffectiveDate","dateOfRenewal":"configure:dateOfRenewal","endDate":"configure:endDate","startDate":"configure:startDate","confirmationScreen":"confirmationScreen","UpdateOldPolicy":"UpdateOldPolicy","createUpdatePolicy":"createUpdatePolicy","configure":"configure","SetRenewDate":"SetRenewDate","setDisplayValues":"setDisplayValues","GetPolicyCoverages":"GetPolicyCoverages","GetInsuredItems":"GetInsuredItems","SetPolicyId":"SetPolicyId"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Set Values","propSetMap":{"wpm":false,"validationRequired":"None","ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"PolicyId":"=%ContextId%","EffectiveDate":"=TODAY()"},"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetPolicyId","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetPolicyId","lwcId":"lwc0"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","policyId":"%ContextId%"},"remoteMethod":"getInsuredItems","remoteClass":"InsPolicyService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"VPL-TransformAutoAndDriverInsuredItemsModify-103-1","postMessage":"Done","message":{},"label":"getInsuredItems","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetInsuredItems","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"GetInsuredItems","lwcId":"lwc1"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"None","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"getProducts","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":"","policyId":"%ContextId%"},"remoteMethod":"getPolicyDetails","remoteClass":"InsPolicyService","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"getPolicyDetail","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"GetPolicyCoverages","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"GetPolicyCoverages","lwcId":"lwc2"},{"type":"DataRaptor Extract Action","propSetMap":{"wpm":false,"validationRequired":"None","ssm":false,"showPersistentComponent":[false,false],"show":null,"responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postMessage":"Done","message":{},"label":"Set Display Values","inProgressMessage":"In Progress","ignoreCache":false,"failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"dataRaptor Input Parameters":[{"inputParam":"Id","element":"PolicyId"}],"controlWidth":12,"bundle":"Fsc_ReadPolicyDetails","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"setDisplayValues","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bDataRaptorExtractAction":true,"JSONPath":"setDisplayValues","lwcId":"lwc3"},{"type":"Set Values","propSetMap":{"wpm":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"pubsub":false,"message":{},"label":null,"elementValueMap":{"renDate":"=MOMENT(MONTH(%renewOmniDate%)+\"-\"+DAYOFMONTH(%renewOmniDate%)+\"-\"+YEAR(%renewOmniDate%)).format()"},"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"SetRenewDate","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetRenewDate","lwcId":"lwc4"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":false,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":3,"previousLabel":"Previous","nextWidth":5,"nextLabel":"Next","message":{},"label":"Let's Modify Your Coverages","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"Modifications","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"configure":"","startDate":"","endDate":"","dateOfRenewal":""},"aggElements":{"newEffectiveDate":"","newExpirationDate":"","modalPremium":"","configureCoverages":"","configureCoveragesMarine":"","configureCoverageBOP":"","previousBilldate":"","isPreviousMode":"","timeFactor":"","priceDifference":"","taxDiff":"","feeDiff":"","absPriceDifference":"","modalPriceDifference":"","absAmountOwed":""}},"offSet":0,"name":"configure","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Date","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"modelDateFormat":"yyyy-MM-dd","minDate":"","maxDate":"","label":"Orignal Effective Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"startDate","level":1,"JSONPath":"configure:startDate","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc50-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Date","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"modelDateFormat":"yyyy-MM-dd","label":"Expiration Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":4,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"endDate","level":1,"JSONPath":"configure:endDate","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc51-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Date","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":true,"modelDateFormat":"MM-dd-yyyy","minDate":"","maxDate":"","label":"Policy Renewal Date","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":"%renDate%","dateType":"date","dateFormat":"MM-dd-yyyy","controlWidth":3,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"dateOfRenewal","level":1,"JSONPath":"configure:dateOfRenewal","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc52-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"Effective Date","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"MOMENT(%renDate%).format()","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Text","controlWidth":0,"HTMLTemplateId":""},"name":"newEffectiveDate","level":1,"JSONPath":"configure:newEffectiveDate","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc53-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"Expiration Date","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF(\n%termForPolicy%='Annual', \nMOMENT(%configure:newEffectiveDate%).add(364,'day').format(), \nIF(%termForPolicy%='Semi-Annual', MOMENT(%configure:newEffectiveDate%).add(181,'day').format(),\nMOMENT(%configure:newEffectiveDate%).add(30,'day').format()\n)\n)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Text","controlWidth":0,"HTMLTemplateId":""},"name":"newExpirationDate","level":1,"JSONPath":"configure:newExpirationDate","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc54-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"ModalPremium","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"ROUND((%originalPremium%/%Frequency%),2)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","controlWidth":3,"HTMLTemplateId":""},"name":"modalPremium","level":1,"JSONPath":"configure:modalPremium","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc55-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":6,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"productName","data":"Multi Auto","condition":"="}],"operator":"OR"}},"rePriceAction":{"optionsMap":{"instanceKey":"autoVehicle.instanceKey","includeRawCalculationResult":true,"includeInputKeys":"autoVehicle.instanceKey,autoDriver.instanceKey","evalOptionalCoverageRelationship":true,"effectiveDate":"%configure:newEffectiveDate%","calculateTaxesandFees":true,"aggByKey":"autoVehicle.instanceKey"},"methodName":"rePriceProduct","className":"InsProductService"},"lwcName":"vlocity_ins__insOsMultiInstanceGrandchildren","label":"Auto LWC","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%getProducts%","name":"init-json"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"configureCoverages","level":1,"JSONPath":"configure:configureCoverages","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc56-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":7,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"productName","data":"Marine","condition":"="}],"operator":"OR"}},"rePriceAction":{"optionsMap":{"instanceKey":"wiVessel.instanceKey","includeRawCalculationResult":true,"includeInputKeys":"wiVessel.instanceKey","evalOptionalCoverageRelationship":true,"effectiveDate":"%configure:newEffectiveDate%","calculateTaxesandFees":true,"aggByKey":"wiVessel.instanceKey"},"methodName":"rePriceProduct","className":"InsProductService"},"lwcName":"vlocity_ins__insOsMultiInstanceGrandchildren","label":"Auto LWC","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%getProducts%","name":"init-json"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"configureCoveragesMarine","level":1,"JSONPath":"configure:configureCoveragesMarine","indexInParent":7,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent2":true,"lwcId":"lwc57-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":8,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":5,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"productName","data":"Homeowners (HO3)","condition":"="},{"field":"productName","data":"Economy Business","condition":"="},{"field":"productName","data":"Renters (HO4)","condition":"="},{"field":"productName","data":"Superior Business","condition":"="}],"operator":"OR"}},"rePriceAction":{"optionsMap":{"instanceKey":"%insuredItems:propHomeRental:instanceKey%","includeRawCalculationResult":true,"includeInputKeys":"%insuredItems:propHomeRental:instanceKey%","evalOptionalCoverageRelationship":true,"effectiveDate":"%configure:newEffectiveDate%","calculateTaxesandFees":true,"aggByKey":"%insuredItems:propHomeRental:instanceKey%"},"methodName":"rePriceProduct","className":"InsProductService"},"lwcName":"vlocity_ins__insOsSingleInstance","label":"Single Instance LWC","hide":false,"disOnTplt":false,"customAttributes":[{"source":"%getProducts%","name":"init-json"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"configureCoverageBOP","level":1,"JSONPath":"configure:configureCoverageBOP","indexInParent":8,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent3":true,"lwcId":"lwc58-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":9,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"previousBilldate","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"MOMENT(%PolicyBillDate%).subtract(%numMonths%,'month')","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Date","controlWidth":12,"HTMLTemplateId":""},"name":"previousBilldate","level":1,"JSONPath":"configure:previousBilldate","indexInParent":9,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc59-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":10,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"isPreviousMode","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF((DATEDIFF(%EffectiveDate%,%previousBilldate%)>0),1,0)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Number","controlWidth":12,"HTMLTemplateId":""},"name":"isPreviousMode","level":1,"JSONPath":"configure:isPreviousMode","indexInParent":10,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc510-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":11,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":"","label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"ROUND((DATEDIFF(%EffectiveDate%,%endDate%))/(DATEDIFF(%startDate%,%endDate%)),3)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Number","currencySymbol":"$","controlWidth":3,"HTMLTemplateId":""},"name":"timeFactor","level":1,"JSONPath":"configure:timeFactor","indexInParent":11,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc511-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":12,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":"priceDifference","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF(  %productName%='Multi Auto',\nROUND(%configure:configureCoverages:records|1:Price%+%configure:configureCoverages:records|1:vlocity_ins__TotalTaxAmount__c%+%configure:configureCoverages:records|1:vlocity_ins__TotalFeeAmount__c%-%originalPremium%,2),\nIF( %productName%='Marine',\n%configure:configureCoveragesMarine:records|1:Price%+%configure:configureCoveragesMarine:records|1:vlocity_ins__TotalTaxAmount__c%+%configure:configureCoveragesMarine:records|1:vlocity_ins__TotalFeeAmount__c%-%originalPremium%,\n%configure:configureCoverageBOP:records|1:Price%+%configure:configureCoverageBOP:records|1:vlocity_ins__TotalTaxAmount__c%+%configure:configureCoverageBOP:records|1:vlocity_ins__TotalFeeAmount__c%-%originalPremium%\n)\n)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":null,"controlWidth":12,"HTMLTemplateId":""},"name":"priceDifference","level":1,"JSONPath":"configure:priceDifference","indexInParent":12,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc512-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":13,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF(  %productName%='Multi Auto',\nROUND(ABS(%configure:configureCoverages:records|1:vlocity_ins__TotalTaxAmount__c% - %TotalTax%),2),\nIF( %productName%='Marine',\nROUND(ABS(%configure:configureCoveragesMarine:records|1:vlocity_ins__TotalTaxAmount__c% - %TotalTax%),2),\nROUND(ABS(%configure:configureCoverageBOP:records|1:vlocity_ins__TotalTaxAmount__c% - %TotalTax%),2)\n)\n)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":null,"controlWidth":12,"HTMLTemplateId":""},"name":"taxDiff","level":1,"JSONPath":"configure:taxDiff","indexInParent":13,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc513-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":14,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF(  %productName%='Multi Auto',\nROUND(ABS(%configure:configureCoverages:records|1:vlocity_ins__TotalFeeAmount__c% - %TotalFee%),2),\nIF( %productName%='Marine',\nROUND(ABS(%configure:configureCoveragesMarine:records|1:vlocity_ins__TotalFeeAmount__c% - %TotalFee%),2),\nROUND(ABS(%configure:configureCoverageBOP:records|1:vlocity_ins__TotalFeeAmount__c% - %TotalFee%),2)\n)\n)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":null,"controlWidth":12,"HTMLTemplateId":""},"name":"feeDiff","level":1,"JSONPath":"configure:feeDiff","indexInParent":14,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc514-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":15,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":"$#,###.##","label":"absPriceDifference","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"ROUND(ABS(%priceDifference%),3)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","currencySymbol":"$","controlWidth":3,"HTMLTemplateId":""},"name":"absPriceDifference","level":1,"JSONPath":"configure:absPriceDifference","indexInParent":15,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc515-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":16,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":"$#,###.##","label":"Formula6","inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"ROUND(ABS(%priceDifference%/%Frequency%),3)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","controlWidth":12,"HTMLTemplateId":""},"name":"modalPriceDifference","level":1,"JSONPath":"configure:modalPriceDifference","indexInParent":16,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc516-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":17,"eleArray":[{"type":"Formula","rootIndex":5,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":"$#,###.##","label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"ROUND(ABS(%priceDifference%),3)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Currency","currencySymbol":"$","controlWidth":3,"HTMLTemplateId":""},"name":"absAmountOwed","level":1,"JSONPath":"configure:absAmountOwed","indexInParent":17,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc517-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":18,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"text":"<h3 style=\"text-align: center;\"><strong>Original Premium:</strong>&nbsp; $%originalPremium%</h3>\n<h3 style=\"text-align: center;\">Your&nbsp;annual premium&nbsp;would be reduced by %absPriceDifference%. &nbsp;</h3>\n<h3 style=\"text-align: center;\">The&nbsp;refund for the remainder of you term would be %absAmountOwed%.</h3>","show":{"group":{"rules":[{"field":"priceDifference","data":"0","condition":"<"},{"field":"productName","data":"Multi Auto","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"txtPriceReduction","level":1,"JSONPath":"configure:txtPriceReduction","indexInParent":18,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc518-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":19,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"text":"<h3 style=\"text-align: center;\"><strong>Original Premium:</strong>&nbsp; $%originalPremium%</h3>\n<h3 style=\"text-align: center;\">Your premium&nbsp;would be reduced by %modalPriceDifference% %Mode%</h3>\n<h3 style=\"text-align: center;\">&nbsp;</h3>\n<h3 style=\"text-align: center;\">&nbsp;</h3>","show":{"group":{"rules":[{"field":"priceDifference","data":"0","condition":"<"},{"field":"productName","data":"Marine","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"txtPriceReductionMarine","level":1,"JSONPath":"configure:txtPriceReductionMarine","indexInParent":19,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc519-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":20,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"","text":"<h3 style=\"text-align: center;\"><strong>Original Premium:</strong>&nbsp; $%originalPremium%</h3>\n<h3 style=\"text-align: center;\">Your&nbsp;annual premium&nbsp;would be increased by %absPriceDifference%.&nbsp;</h3>\n<h3 style=\"text-align: center;\">Please click next to make a Payment and complete your changes</h3>","show":{"group":{"rules":[{"field":"priceDifference","data":"0","condition":">"},{"field":"productName","data":"Marine","condition":"="}],"operator":"AND"}},"sanitize":false,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"txtModalPriceReductionMarine","level":1,"JSONPath":"configure:txtModalPriceReductionMarine","indexInParent":20,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc520-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"configure","lwcId":"lwc5"},{"type":"Integration Procedure Action","propSetMap":{"wpm":false,"validationRequired":"Step","useContinuation":false,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","remoteTimeout":30000,"remoteOptions":{"useFuture":false,"preTransformBundle":"","postTransformBundle":"","chainable":false},"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Create Update Policy","integrationProcedureKey":"insPolicy_createRenewedVersion","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"createUpdatePolicy","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"createUpdatePolicy","lwcId":"lwc6"},{"type":"DataRaptor Post Action","propSetMap":{"wpm":false,"validationRequired":"Submit","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","remoteTimeout":30000,"redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"postTransformBundle":"","postMessage":"Done","message":{},"label":"Update Old Policy","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"bundle":"Ins_PostOldPolicyVersion_FscOS","HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"UpdateOldPolicy","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"UpdateOldPolicy","lwcId":"lwc7"},{"type":"Step","propSetMap":{"wpm":false,"validationRequired":true,"ssm":false,"showPersistentComponent":[false,false],"show":null,"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","pubsub":false,"previousWidth":0,"previousLabel":"Previous","nextWidth":0,"nextLabel":"Next","message":{},"label":"Policy Renewed","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":"Confirmations","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":false,"HTMLTemplateId":"","uiElements":{"confirmationScreen":""},"aggElements":{"FlexcardReview":""}},"offSet":0,"name":"confirmationScreen","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":8,"response":null,"propSetMap":{"show":null,"lwcName":"cfFlex_ConfirmationScreenOS","label":"FlexcardReview","hide":false,"disOnTplt":false,"customAttributes":[{"source":"true","name":"parent-data"},{"source":"%Policy%","name":"records"}],"controlWidth":12,"conditionType":"Hide if False","bStandalone":false},"name":"FlexcardReview","level":1,"JSONPath":"confirmationScreen:FlexcardReview","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent4":true,"lwcId":"lwc80-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"confirmationScreen","lwcId":"lwc8"}],"bReusable":false,"bpVersion":1,"bpType":"insFSC","bpSubType":"RenewPolicy","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"getProducts":null,"Policy":null}};