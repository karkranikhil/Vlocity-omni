let definition = 
                {"GlobalKey__c":"ins-quote-actions-card/Vlocity/1/1586467554234","dataSource":{"type":null},"enableLwc":true,"filter":{},"states":[{"actionCtxId":"['Id']","conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"}]},"definedActions":{"actions":[{"collapse":true,"conditions":{"group":[{"field":"['Status']","operator":"!=","type":"custom","value":"Issued"}]},"disableAddCondition":false,"displayName":"Issue Policy","eventName":"policy_action","extraParams":{"isFsc":false,"recordId":"['Id']"},"filter":"$scope.obj['Status'] != 'Issued'","hasExtraParams":true,"id":"Issue Policy Action","isCustomAction":true,"message":"issuePolicy","type":"PubSub","vlocityIcon":"utility:edit"},{"collapse":true,"conditions":{"group":[{"field":"['Status']","operator":"!=","type":"custom","value":"Issued"}]},"disableAddCondition":false,"displayName":"Issue Insurance Policy","eventName":"policy_action","extraParams":{"isFsc":true,"recordId":"['Id']"},"filter":"$scope.obj['Status'] != 'Issued'","hasExtraParams":true,"id":"Issue FSC Action","isCustomAction":true,"message":"issuePolicy","type":"PubSub","vlocityIcon":"utility:edit"}]},"fields":[],"isSmartAction":false,"lwc":{"DeveloperName":"actionGridState","Id":"0Rb5f000002CtxdSAO","MasterLabel":"actionGridState","NamespacePrefix":"vlocity_ins","name":"actionGridState"},"name":"Active","sObjectType":"Quote","smartAction":{}}],"title":"Quote Actions"}; 
            export default definition