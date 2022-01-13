import Vue from "vue";
import Vuex from "vuex";

import actions from "@/commons/store/actions";
import getters from "@/commons/store/getters";
import mutations from "@/commons/store/mutations";
import state from "@/commons/store/state";

Vue.use(Vuex);

export default new Vuex.Store({ actions, getters, mutations, state });
