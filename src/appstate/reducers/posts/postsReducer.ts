import { PostsTypes } from "../../types/postsTypes"

import {
	PostsActions,
	PostsGetSuccessAction,
	PostsGetErrorAction,
	PostsGetUpdateAction
} from "../../actions/posts/__types/IActions"

import { API } from "../../../models/ApiState"

export const initialState: IPosts = {
	posts: [],
	postsCount: 10,
	postsGetRequestState: API.NOT_REQUESTED,
	postsGetError: ""
}

export function postsReducer(state: IPosts = initialState, action: PostsActions): IPosts {
	switch (action.type) {
		case PostsTypes.POSTS_GET_REQUEST:
			return {
				...state,
				postsGetRequestState: API.REQUEST_PENDING
			}
		case PostsTypes.POSTS_GET_REQUEST_SUCCESS:
			return {
				...state,
				posts: [...(action as PostsGetSuccessAction).payload.posts],
				postsCount: (action as PostsGetSuccessAction).payload.postsCount,
				postsGetRequestState: API.REQUEST_SUCCESS
			}
		case PostsTypes.POSTS_GET_REQUEST_UPDATE:
			return {
				...state,
				posts: [...state.posts, ...(action as PostsGetUpdateAction).payload.posts],
				postsCount: (action as PostsGetUpdateAction).payload.postsCount,
				postsGetRequestState: API.REQUEST_SUCCESS
			}
		case PostsTypes.POSTS_GET_REQUEST_UPDATE:
			return {
				...state,
				posts: [...state.posts, ...(action as PostsGetUpdateAction).payload.posts],
				postsCount: (action as PostsGetUpdateAction).payload.postsCount,
				postsGetRequestState: API.REQUEST_SUCCESS
			}
		case PostsTypes.POSTS_GET_REQUEST_ERROR:
			return {
				...state,
				postsGetError: (action as PostsGetErrorAction).payload,
				postsGetRequestState: API.REQUEST_ERROR
			}
		case PostsTypes.POSTS_GET_REQUEST_STATE_RESET:
			return {
				...state,
				postsGetRequestState: API.NOT_REQUESTED
			}
		default:
			return state
	}
}
