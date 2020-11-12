import Vue from 'vue';
import 'intersection-observer';
import {ObserveVisibility} from 'vue-observe-visibility';

Vue.directive('observe-visibility', ObserveVisibility);
