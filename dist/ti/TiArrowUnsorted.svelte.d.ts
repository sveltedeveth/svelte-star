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
export type TiArrowUnsortedProps = typeof __propDef.props;
export type TiArrowUnsortedEvents = typeof __propDef.events;
export type TiArrowUnsortedSlots = typeof __propDef.slots;
export default class TiArrowUnsorted extends SvelteComponentTyped<TiArrowUnsortedProps, TiArrowUnsortedEvents, TiArrowUnsortedSlots> {
}
export {};
