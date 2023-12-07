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
export type FaKaggleProps = typeof __propDef.props;
export type FaKaggleEvents = typeof __propDef.events;
export type FaKaggleSlots = typeof __propDef.slots;
export default class FaKaggle extends SvelteComponentTyped<FaKaggleProps, FaKaggleEvents, FaKaggleSlots> {
}
export {};
