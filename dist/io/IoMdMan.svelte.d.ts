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
export type IoMdManProps = typeof __propDef.props;
export type IoMdManEvents = typeof __propDef.events;
export type IoMdManSlots = typeof __propDef.slots;
export default class IoMdMan extends SvelteComponentTyped<IoMdManProps, IoMdManEvents, IoMdManSlots> {
}
export {};
