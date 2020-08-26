
export interface State {
  userInfo: { userName: string };
  loading: boolean;
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
