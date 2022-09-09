export default interface ILinks {
    url: string;
    code: string;
    description: string;
    clicks?: number;
    active: boolean;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}