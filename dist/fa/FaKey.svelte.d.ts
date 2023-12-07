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
export type FaKeyProps = typeof __propDef.props;
export type FaKeyEvents = typeof __propDef.events;
export type FaKeySlots = typeof __propDef.slots;
export default class FaKey extends SvelteComponentTyped<FaKeyProps, FaKeyEvents, FaKeySlots> {
}
export {};
