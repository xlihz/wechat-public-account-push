export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxaf60414a1f0569c1",
    // 公众号appSecret
    appSecret: "b0e9217cf704fe166fc3dab159f0479f",
    // 模板消息id
    templateId: "TSkDGOXK121uVrmAgp0SLf-JJOqIR4b2al-TWKwtSv0",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["olsCg6nTzen99_OdnoLQdQ6MKj68"，"olsCg6sIZxIkAF0MFDwvxhIdF0gY"],
     
    // 信息配置
    // 所在省份
    province: "湖北",
    // 所在城市
    city: "十堰",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "欢崽", "year": "2002", "date": "11-19", "type": 'new'},
      {"name": "小狸", "year": "2002", "date": "02-22", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-12-05",
    // 结婚纪念日
    marryDate: "2022-12-05"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
