export default [
  {
    command: "extension.isPhone",
    title: "验证手机号码 1开头 11位数",
    rule: "let reg = /^1[0-9]{10}$/",
  },
  {
    command: "extension.isTel",
    title: "验证座机号",
    rule: "let reg = /^([0-9]{3,4})?-?[0-9]{7,8}$/",
  },
  {
    command: "extension.isInt",
    title: "验证是否为整数",
    rule: "let reg = /^[-+]?d*$/",
  },
  {
    command: "extension.isFloat",
    title: "验证是否为小数",
    rule: "let reg = /^[-+]?d+(.d+)?$/",
  },
  {
    command: "extension.isEmail",
    title: "验证邮箱",
    rule: "let reg = /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/",
  },
  {
    command: "extension.isPayPwd",
    title: "验证支付密码(6位数)",
    rule: "let reg = /^[0-9]{6}$/",
  },
  {
    command: "extension.isNumberLetter",
    title: "验证是否为数字、字母组合",
    rule: "reg = new RegExp('^[a-zA-Z0-9]')",
  },
  {
    command: "extension.isNumberAndLetter",
    title: "验证是否为数字+字母组合(必须包含数字加字母)",
    rule: "let reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')",
  },
  {
    command: "extension.isNumberLetterUnderline",
    title: "验证是否为数字、字母、下划线",
    rule: "let reg = new RegExp('^[A-Za-z0-9_]')",
  },
  {
    command: "extension.isCapital",
    title: "验证是否为全大写字母",
    rule: "let reg = new RegExp('^[A-Z]')",
  },
  {
    command: "extension.isBankCard",
    title: "验证是否为合法的银行卡",
    rule: "let reg = new RegExp('^[0-9]{10,40}$')",
  },
  {
    command: "extension.isPlate",
    title: "验证是否为合法的车牌号",
    rule: "let reg = /^[澳_川_鄂_甘_赣_贵_桂_港_黑_沪_京_津_冀_吉_晋_辽_鲁_蒙_闽_宁_青_琼_陕_苏_皖_湘_新_渝_豫_粤_云_藏_浙_临]{1}[A-Z]{1}[A-Z_0-9]{4,5}[A-Z_0-9_挂]{1}$/",
  },
  {
    command: "extension.isCompanyCode",
    title: "验证是否为合法的社会统一信用代码",
    rule: "let reg = /^[0-9a-zA-Z]{2}[0-9]{6}[0-9a-zA-Z]{10}$/",
  },
  {
    command: "extension.isIdCard",
    title: "验证是否为合法的身份证",
    rule: "let reg = /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/",
  },
  {
    command: "extension.isUrl",
    title: "验证是否为url地址",
    rule: "let reg =  /^((https?|ftp|file)://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$/",
  },
  {
    command: "extension.isDate",
    title: "验证日期格式(YYYY-MM-DD hh:mm:ss)",
    rule: "let reg = /^(d{1,4})(-|/)(d{1,2})(-|/)(d{1,2}) (d{1,2}):(d{1,2}):(d{1,2})$/",
  },
];
