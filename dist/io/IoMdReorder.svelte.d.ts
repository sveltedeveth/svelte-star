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
export type IoMdReorderProps = typeof __propDef.props;
export type IoMdReorderEvents = typeof __propDef.events;
export type IoMdReorderSlots = typeof __propDef.slots;
export default class IoMdReorder extends SvelteComponentTyped<IoMdReorderProps, IoMdReorderEvents, IoMdReorderSlots> {
}
export {};
