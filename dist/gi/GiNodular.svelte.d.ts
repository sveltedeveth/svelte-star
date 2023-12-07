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
export type GiNodularProps = typeof __propDef.props;
export type GiNodularEvents = typeof __propDef.events;
export type GiNodularSlots = typeof __propDef.slots;
export default class GiNodular extends SvelteComponentTyped<GiNodularProps, GiNodularEvents, GiNodularSlots> {
}
export {};
