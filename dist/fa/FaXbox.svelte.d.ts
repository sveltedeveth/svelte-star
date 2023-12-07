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
export type FaXboxProps = typeof __propDef.props;
export type FaXboxEvents = typeof __propDef.events;
export type FaXboxSlots = typeof __propDef.slots;
export default class FaXbox extends SvelteComponentTyped<FaXboxProps, FaXboxEvents, FaXboxSlots> {
}
export {};
