import R from '../utils/R';

const CorsConfig = function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    if(req.method.toLowerCase() == 'options') res.send(R.success('OK!')); // 让 options 尝试请求快速结束
    else next();
}

export default CorsConfig;