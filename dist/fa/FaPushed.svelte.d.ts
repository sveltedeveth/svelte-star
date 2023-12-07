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
export type FaPushedProps = typeof __propDef.props;
export type FaPushedEvents = typeof __propDef.events;
export type FaPushedSlots = typeof __propDef.slots;
export default class FaPushed extends SvelteComponentTyped<FaPushedProps, FaPushedEvents, FaPushedSlots> {
}
export {};
