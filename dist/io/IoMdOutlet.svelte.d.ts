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
export type IoMdOutletProps = typeof __propDef.props;
export type IoMdOutletEvents = typeof __propDef.events;
export type IoMdOutletSlots = typeof __propDef.slots;
export default class IoMdOutlet extends SvelteComponentTyped<IoMdOutletProps, IoMdOutletEvents, IoMdOutletSlots> {
}
export {};
