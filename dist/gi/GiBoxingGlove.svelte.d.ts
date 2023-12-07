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
export type GiBoxingGloveProps = typeof __propDef.props;
export type GiBoxingGloveEvents = typeof __propDef.events;
export type GiBoxingGloveSlots = typeof __propDef.slots;
export default class GiBoxingGlove extends SvelteComponentTyped<GiBoxingGloveProps, GiBoxingGloveEvents, GiBoxingGloveSlots> {
}
export {};
