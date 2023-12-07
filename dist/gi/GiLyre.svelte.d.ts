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
export type GiLyreProps = typeof __propDef.props;
export type GiLyreEvents = typeof __propDef.events;
export type GiLyreSlots = typeof __propDef.slots;
export default class GiLyre extends SvelteComponentTyped<GiLyreProps, GiLyreEvents, GiLyreSlots> {
}
export {};
