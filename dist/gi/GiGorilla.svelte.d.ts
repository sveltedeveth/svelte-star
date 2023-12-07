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
export type GiGorillaProps = typeof __propDef.props;
export type GiGorillaEvents = typeof __propDef.events;
export type GiGorillaSlots = typeof __propDef.slots;
export default class GiGorilla extends SvelteComponentTyped<GiGorillaProps, GiGorillaEvents, GiGorillaSlots> {
}
export {};
