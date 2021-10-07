import {Permission} from "./permission.interface";

export interface User {
    id: string
    username: string
    cloudUsername: string
    cloudDirScan: string
    cloudDirSync: string
    permissions: Permission[]
}