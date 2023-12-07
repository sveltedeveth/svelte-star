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
export type GoSyncProps = typeof __propDef.props;
export type GoSyncEvents = typeof __propDef.events;
export type GoSyncSlots = typeof __propDef.slots;
export default class GoSync extends SvelteComponentTyped<GoSyncProps, GoSyncEvents, GoSyncSlots> {
}
export {};
