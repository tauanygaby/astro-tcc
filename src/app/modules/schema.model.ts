export interface Tag {
    name: string;
    color?: string;
}
export interface Task {
    id: number;
    descricao: string;
    tipo: Tag[]
    responsavel: string;
    image?: string;
}

// export interface Issue {
//     name: IssueType;
//     color: string;
// }

export enum IssueType {
    Task = 'task',
    SubTask = 'sub-task',
    Bug = 'bug',
    Epic = 'epic',
    Story = 'story'
}

export interface Trello {
    titulo: string;
    tasks: Task[];
    id: string;
}

export interface Board {
    title: string;
    trello: Trello[];
}