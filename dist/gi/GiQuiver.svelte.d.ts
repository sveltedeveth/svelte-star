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
export type GiQuiverProps = typeof __propDef.props;
export type GiQuiverEvents = typeof __propDef.events;
export type GiQuiverSlots = typeof __propDef.slots;
export default class GiQuiver extends SvelteComponentTyped<GiQuiverProps, GiQuiverEvents, GiQuiverSlots> {
}
export {};
