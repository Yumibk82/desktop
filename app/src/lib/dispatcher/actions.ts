import { IRepository } from '../../models/repository'
import { URLActionType } from '../parse-url'

export interface IGetUsersAction {
  name: 'get-users'
}

export interface IGetRepositoriesAction {
  name: 'get-repositories'
}

export interface IAddRepositoriesAction {
  name: 'add-repositories'
  readonly repositories: ReadonlyArray<IRepository>
}

export interface IRemoveRepositoriesAction {
  name: 'remove-repositories'
  readonly repositoryIDs: number[]
}

export interface IRequestOAuthAction {
  name: 'request-oauth'
}

export interface IURLAction {
  name: 'url-action'
  readonly action: URLActionType
}

export interface IUpdateGitHubRepositoryAction {
  name: 'update-github-repository'
  readonly repository: IRepository
}

export type Action = IGetUsersAction | IGetRepositoriesAction |
                     IAddRepositoriesAction | IRequestOAuthAction |
                     IURLAction | IUpdateGitHubRepositoryAction |
                     IRemoveRepositoriesAction
