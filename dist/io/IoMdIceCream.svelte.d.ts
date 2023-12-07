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
export type IoMdIceCreamProps = typeof __propDef.props;
export type IoMdIceCreamEvents = typeof __propDef.events;
export type IoMdIceCreamSlots = typeof __propDef.slots;
export default class IoMdIceCream extends SvelteComponentTyped<IoMdIceCreamProps, IoMdIceCreamEvents, IoMdIceCreamSlots> {
}
export {};
