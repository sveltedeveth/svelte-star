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
export type IoMdLogOutProps = typeof __propDef.props;
export type IoMdLogOutEvents = typeof __propDef.events;
export type IoMdLogOutSlots = typeof __propDef.slots;
export default class IoMdLogOut extends SvelteComponentTyped<IoMdLogOutProps, IoMdLogOutEvents, IoMdLogOutSlots> {
}
export {};
