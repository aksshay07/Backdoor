export interface IStore {
    user: {
        isAuthenticated: boolean,
        id: string | undefined
        username: string | undefined,
        permissionLevel: number
    }
}