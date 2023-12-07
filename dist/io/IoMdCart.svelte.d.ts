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
export type IoMdCartProps = typeof __propDef.props;
export type IoMdCartEvents = typeof __propDef.events;
export type IoMdCartSlots = typeof __propDef.slots;
export default class IoMdCart extends SvelteComponentTyped<IoMdCartProps, IoMdCartEvents, IoMdCartSlots> {
}
export {};
