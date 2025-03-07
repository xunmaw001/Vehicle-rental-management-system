const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "报表",
                            "删除"
                        ],
                        "menu":"车辆出租管理",
                        "menuJump":"列表",
                        "tableName":"cheliangOrder"
                    }
                ],
                "menu":"车辆管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"检查单管理",
                        "menuJump":"列表",
                        "tableName":"cheliangJiancha"
                    }
                ],
                "menu":"检查单管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"车辆类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"检查结果管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCheliangJiancha"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"地区管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryDiqu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "报表",
                            "修改",
                            "删除"
                        ],
                        "menu":"客户管理",
                        "menuJump":"列表",
                        "tableName":"kehu"
                    }
                ],
                "menu":"客户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "新增",
                            "查看"
                        ],
                        "menu":"车辆出租管理",
                        "menuJump":"列表",
                        "tableName":"cheliangOrder"
                    }
                ],
                "menu":"车辆管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"检查单管理",
                        "menuJump":"列表",
                        "tableName":"cheliangJiancha"
                    }
                ],
                "menu":"检查单管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"车辆出租管理",
                        "menuJump":"列表",
                        "tableName":"cheliangOrder"
                    }
                ],
                "menu":"车辆管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"客户",
        "tableName":"kehu"
    }
]
    }
}
export default menu;
