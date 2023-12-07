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
export type GiTyreProps = typeof __propDef.props;
export type GiTyreEvents = typeof __propDef.events;
export type GiTyreSlots = typeof __propDef.slots;
export default class GiTyre extends SvelteComponentTyped<GiTyreProps, GiTyreEvents, GiTyreSlots> {
}
export {};
