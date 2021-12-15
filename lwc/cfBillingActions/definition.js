let definition = 
                {"dataSource":{"type":null},"filter":{"['Type']":"Auto"},"states":[{"actionCtxId":"['Id']","blankStateCheck":false,"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"}]},"definedActions":{"actions":[{"id":"SetUpBill","displayName":"Bill SetUp","type":"OmniScript","omniType":{"Name":"ins/SetUpBills/English","Type":"ins","SubType":"SetUpBills","Language":"English","Id":"a3F5f000000vOvUEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['Type']","operator":"==","value":"Auto","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['Type'] == 'Auto'","disableAddCondition":false,"vlocityIcon":"icon-v-minus-line","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"generateStatement","displayName":"Generate Statement","type":"OmniScript","omniType":{"Name":"ins/createStatement/English","Type":"ins","SubType":"createStatement","Language":"English","Id":"a3F5f000000vP1iEA2","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"conditions":{"group":[{"field":"['Type']","operator":"==","value":"Auto","type":"custom"}]},"extraParams":{"c__ContextId":"['Id']"},"filter":"$scope.obj['Type'] == 'Auto'","disableAddCondition":false,"vlocityIcon":"icon-v-minus-line","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Dunning","displayName":"Dunning","type":"OmniScript","omniType":{"Name":"ins/dunning/English","Type":"ins","SubType":"dunning","Language":"English","Id":"a3F5f000000vOvTEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"vlocityIcon":"icon-v-close","conditions":{"group":[]},"extraParams":{"c__ContextId":"['Id']"},"vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage"},{"id":"Payment","displayName":"Make a Payment","type":"OmniScript","omniType":{"Name":"ins/PolicyPayment/English","Type":"ins","SubType":"PolicyPayment","Language":"English","Id":"a3F5f000000vOvWEAK","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"layoutType":"lightning","openUrlIn":"New Tab / Window","isLwcOS":true,"vlocityIcon":"icon-v-close","vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage","conditions":{"group":[]},"extraParams":{"c__ContextId":"['Id']"}},{"id":"autoPay","displayName":"AutoPay","type":"OmniScript","omniType":{"Name":"ins/ProcessAutoPay/English","Type":"ins","SubType":"ProcessAutoPay","Language":"English","Id":"a3F5f000000vOvZEAC","isLwc":true},"omniSubType":"","omniLang":"","isCustomAction":true,"collapse":true,"hasExtraParams":true,"vForcewithNsPrefix":"vlocity_ins__OmniScriptUniversalPage","layoutType":"lightning","openUrlIn":"New Tab / Window","vlocityIcon":"icon-v-minus-line","isLwcOS":true,"conditions":{"group":[]},"extraParams":{"c__ContextId":"['Id']"}}]},"fields":[],"name":"open-actions","sObjectType":"Asset","templateUrl":"action-grid-card-slds","isSmartAction":false,"smartAction":{},"lwc":{"MasterLabel":"actionGridState","DeveloperName":"actionGridState","Id":"0Rb5f000002CtnKCAA","name":"actionGridState","NamespacePrefix":"vlocity_ins"},"filter":"$scope.data.status === 'active'","disableAddCondition":false}],"title":"Billing Actions","enableLwc":true,"GlobalKey__c":"BillingActions/vlocityDev/1/1582887056099"}; 
            export default definition