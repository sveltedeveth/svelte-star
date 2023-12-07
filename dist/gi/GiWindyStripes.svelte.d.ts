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
export type GiWindyStripesProps = typeof __propDef.props;
export type GiWindyStripesEvents = typeof __propDef.events;
export type GiWindyStripesSlots = typeof __propDef.slots;
export default class GiWindyStripes extends SvelteComponentTyped<GiWindyStripesProps, GiWindyStripesEvents, GiWindyStripesSlots> {
}
export {};
