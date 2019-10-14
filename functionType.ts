type CallBackError = Error | null;
type CallBack = (error: CallBackError,response: object) => void;
type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack):void => {
    if(cb){
        cb(null,{mensaje: 'todo salio como lo planeamos'});
    }
}