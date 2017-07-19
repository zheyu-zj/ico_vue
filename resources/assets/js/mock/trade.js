import Mock from 'mockjs';
let Random = Mock.Random;

export const trade = [
    {
        path: '/json/trade.json',
        data: {
            newMessages:[
                '最新成交： 用户 assfa_fa 成功交易 100 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 200 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 300 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 400 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 500 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 600 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 700 DOGE'
            ],
            dataTable:[
                {
                    'id': 0,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                    'img': Random.image()
                },
            ]
        }
    }
];
