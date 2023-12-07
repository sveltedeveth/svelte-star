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
export type GiArrowedProps = typeof __propDef.props;
export type GiArrowedEvents = typeof __propDef.events;
export type GiArrowedSlots = typeof __propDef.slots;
export default class GiArrowed extends SvelteComponentTyped<GiArrowedProps, GiArrowedEvents, GiArrowedSlots> {
}
export {};
