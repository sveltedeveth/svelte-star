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
export type FaToolboxProps = typeof __propDef.props;
export type FaToolboxEvents = typeof __propDef.events;
export type FaToolboxSlots = typeof __propDef.slots;
export default class FaToolbox extends SvelteComponentTyped<FaToolboxProps, FaToolboxEvents, FaToolboxSlots> {
}
export {};
