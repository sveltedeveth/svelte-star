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
export type GoBroadcastProps = typeof __propDef.props;
export type GoBroadcastEvents = typeof __propDef.events;
export type GoBroadcastSlots = typeof __propDef.slots;
export default class GoBroadcast extends SvelteComponentTyped<GoBroadcastProps, GoBroadcastEvents, GoBroadcastSlots> {
}
export {};
