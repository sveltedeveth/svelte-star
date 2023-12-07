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
export type MdVisibilityOffProps = typeof __propDef.props;
export type MdVisibilityOffEvents = typeof __propDef.events;
export type MdVisibilityOffSlots = typeof __propDef.slots;
export default class MdVisibilityOff extends SvelteComponentTyped<MdVisibilityOffProps, MdVisibilityOffEvents, MdVisibilityOffSlots> {
}
export {};
