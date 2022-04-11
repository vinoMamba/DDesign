import type { TreeNode } from "./type";

export const mockTree: TreeNode[] = [
  {
    id: "1",
    name: "root",
    children: [
      {
        id: "2",
        name: "child1",
        children: [
          {
            id: "3",
            name: "grandchild1",
            children: [],
          },
          {
            id: "4",
            name: "grandchild2",
            children: [],
          },
        ],
      },
    ],
  },
];
