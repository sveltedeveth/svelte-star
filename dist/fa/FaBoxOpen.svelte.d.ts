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
export type FaBoxOpenProps = typeof __propDef.props;
export type FaBoxOpenEvents = typeof __propDef.events;
export type FaBoxOpenSlots = typeof __propDef.slots;
export default class FaBoxOpen extends SvelteComponentTyped<FaBoxOpenProps, FaBoxOpenEvents, FaBoxOpenSlots> {
}
export {};
