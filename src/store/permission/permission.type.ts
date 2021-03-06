// Разрешение

export enum Permission {
    USER_CREATE = 'USER_CREATE',
    USER_UPDATE = 'USER_UPDATE',
    USER_REMOVE = 'USER_REMOVE',
    PHOTO_CREATE = 'PHOTO_CREATE',
    PHOTO_UPDATE = 'PHOTO_UPDATE',
    PHOTO_REMOVE = 'PHOTO_REMOVE',
    TAG_CREATE = 'TAG_CREATE',
    TAG_UPDATE = 'TAG_UPDATE',
    TAG_REMOVE = 'TAG_REMOVE'
}

export interface PermissionDto {
    id: string
    value: Permission
    description: string
    createdAt: string
    updatedAt: string
}
