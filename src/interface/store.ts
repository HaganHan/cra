
export interface State {
  userInfo: UserInfoState;
  loading: LoadingState;
}

export interface LoadingAction {
  type: string;
}

export interface LoadingState {
  show: boolean;
}

export interface UserInfoAction {
  type: string;
  userName: string;
}

export interface UserInfoState {
  userName: string;
}
