import CodeStatus from "./CodeStatus";

class R {
    // _code 状态码
    // _msg 返回消息
    // _data 返回数据
    private code: string
    private msg: string
    private data: any

    constructor(code: string, msg: string, data: any) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    static success(msg: string, data: any = null) {
        return new R(CodeStatus.OK.toString(), msg, data);
    }

    static fail(msg: string, data: any = null) {
        return new R(CodeStatus.FAILED.toString(), msg, data);
    }

    static error(msg: string, data: any = null) {
        return new R(CodeStatus.CUSTOM_ERROR.toString(), msg, data);
    }
}

export default R;