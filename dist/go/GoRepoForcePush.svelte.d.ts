import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoRepoForcePushProps = typeof __propDef.props;
export type GoRepoForcePushEvents = typeof __propDef.events;
export type GoRepoForcePushSlots = typeof __propDef.slots;
export default class GoRepoForcePush extends SvelteComponentTyped<GoRepoForcePushProps, GoRepoForcePushEvents, GoRepoForcePushSlots> {
}
export {};
