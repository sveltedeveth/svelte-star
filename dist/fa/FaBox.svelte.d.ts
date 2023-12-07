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
export type FaBoxProps = typeof __propDef.props;
export type FaBoxEvents = typeof __propDef.events;
export type FaBoxSlots = typeof __propDef.slots;
export default class FaBox extends SvelteComponentTyped<FaBoxProps, FaBoxEvents, FaBoxSlots> {
}
export {};
