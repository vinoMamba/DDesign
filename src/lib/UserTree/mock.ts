import type {TreeNode} from "./type";

export const mockTree: TreeNode[] = [
    {
        id: "1",
        name: "安徽网钉企业服务中心",
        type: 0,
        peopleCount: 0,
        avatar: 'xx',
        checked: false,
        children: [
            {
                id: "2",
                name: "董事长办公室",
                type: 0,
                peopleCount: 0,
                avatar: 'xx',
                checked: false,
                children: [
                    {
                        id: "3",
                        name: "测试部",
                        type: 0,
                        peopleCount: 0,
                        avatar: 'xx',
                        checked: false,
                        children: [
                            {
                                id: "443",
                                name: "王笑笑",
                                type: 1,
                                peopleCount: 0,
                                avatar: 'xx',
                                children: [],
                                checked: false
                            },
                            {
                                id: "444",
                                name: "王哭哭",
                                type: 1,
                                peopleCount: 0,
                                avatar: 'xx',
                                checked: false,
                                children: []
                            }

                        ],
                    },
                    {
                        id: "4",
                        name: "开发部",
                        type: 0,
                        peopleCount: 0,
                        avatar: 'xx',
                        checked: false,
                        children: [],
                    },
                ],
            },
            {
                id: "22",
                name: "总经理办公室",
                type: 0,
                peopleCount: 0,
                avatar: 'xx',
                checked: false,
                children: [
                    {
                        id: "33",
                        name: "grandchild1",
                        type: 0,
                        peopleCount: 0,
                        avatar: 'xx',
                        checked: false,
                        children: [],
                    },
                    {
                        id: "44",
                        name: "grandchild2",
                        type: 0,
                        peopleCount: 0,
                        avatar: 'xx',
                        checked: false,
                        children: [],
                    },
                ],
            },
            {
                id: "233",
                name: "王鑫",
                type: 1,
                peopleCount: 0,
                avatar: 'xx',
                checked: false,
                children: []
            },
            {
                id: "234",
                name: "宋江",
                type: 1,
                peopleCount: 0,
                avatar: 'xx',
                checked: false,
                children: []
            },
        ],
    },
];
