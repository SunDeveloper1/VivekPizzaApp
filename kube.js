onst k8s = require('@kubernetes/client-node'); //https://github.com/kubernetes-client/javascript
 
const kc = new k8s.KubeConfig(); //Creation of the Kubeconfig , wich is a file containing all info related to communication with a cluster : Auth methode , ID , adress of cluster, ect...
 
 
kc.loadFromCluster(); //Since we are in the cluster we need to load the kubeconfig from the data provided by the cluster at the creation of the pod , luckily , the SDK manage that for us
 
const k8sCoreV1Api = kc.makeApiClient(k8s.CoreV1Api); // we call the CoreV1Api that will be used for the creation of the secrets
const k8sBatchV1Api = kc.makeApiClient(k8s.BatchV1Api); //we call the BatchV1Api that will be used for the creation of the jobs
 
//Creation of the Secret
k8sCoreV1Api.createNamespacedSecret('dev', {
    apiVersion:'v1',
    kind:'Secret',
    metadata: {
	...
        }
    }).catch(e => console.log(e))
 
//creation of the job
k8sBatchV1Api.createNamespacedJob('dev', {
    apiVersion: 'batch/v1',
    kind: 'Job',
    metadata: {
	...
       }
    },
    spec: {
	...
          }
       }
    }}).catch(e => console.log(e))
 
k8sCoreV1Api.deleteNamespacedSecret('secret','dev')
