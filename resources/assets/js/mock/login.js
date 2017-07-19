import Mock from 'mockjs';
let Random = Mock.Random;

export const login = [
    {
        path: '/json/login.json',
        data: {
            'data': {
                id: Random.integer(0, 5000),
                login: Random.boolean()
            }
        }
    }
];