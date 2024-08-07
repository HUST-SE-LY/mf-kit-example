import { loadRemote } from '@module-federation/enhanced/runtime';
import * as vueBridge from '@module-federation/bridge-vue3';
import * as reactBridge from '@module-federation/bridge-react';
const app1 = vueBridge.createRemoteComponent({
  loader: () => loadRemote('app1/export-app'),
});

export const remoteAppRoutes = [
  {
    path: '/app1/:pathMatch(.*)*',
    component: app1,
  },
];