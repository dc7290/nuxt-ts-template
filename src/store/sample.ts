import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from 'src/store'

export const state = () => ({})

export type AnotherModuleState = ReturnType<typeof state>

export const getters: GetterTree<AnotherModuleState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<AnotherModuleState, RootState> = {}
