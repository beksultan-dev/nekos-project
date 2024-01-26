export interface UserModel {
	userId: string;
	name: string | null;
	photo: string | null;
	email: string | null;
	isAuth: boolean;
}
