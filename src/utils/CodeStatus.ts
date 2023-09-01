enum CodeStatus {
    OK = 200, // 请求成功
    FAILED = 300, // 请求失败
    TOKEN_INVALID= 400, // token无效或过期
    CUSTOM_ERROR = 500, // 业务异常
}

export default CodeStatus;