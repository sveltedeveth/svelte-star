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
export type IoMdShirtProps = typeof __propDef.props;
export type IoMdShirtEvents = typeof __propDef.events;
export type IoMdShirtSlots = typeof __propDef.slots;
export default class IoMdShirt extends SvelteComponentTyped<IoMdShirtProps, IoMdShirtEvents, IoMdShirtSlots> {
}
export {};
