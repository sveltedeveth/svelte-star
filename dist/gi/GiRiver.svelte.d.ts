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
export type GiRiverProps = typeof __propDef.props;
export type GiRiverEvents = typeof __propDef.events;
export type GiRiverSlots = typeof __propDef.slots;
export default class GiRiver extends SvelteComponentTyped<GiRiverProps, GiRiverEvents, GiRiverSlots> {
}
export {};
