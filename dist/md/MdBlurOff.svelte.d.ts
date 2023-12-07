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
export type MdBlurOffProps = typeof __propDef.props;
export type MdBlurOffEvents = typeof __propDef.events;
export type MdBlurOffSlots = typeof __propDef.slots;
export default class MdBlurOff extends SvelteComponentTyped<MdBlurOffProps, MdBlurOffEvents, MdBlurOffSlots> {
}
export {};
