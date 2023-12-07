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
export type GiFloodProps = typeof __propDef.props;
export type GiFloodEvents = typeof __propDef.events;
export type GiFloodSlots = typeof __propDef.slots;
export default class GiFlood extends SvelteComponentTyped<GiFloodProps, GiFloodEvents, GiFloodSlots> {
}
export {};
