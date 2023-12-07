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
export type MdBlurOnProps = typeof __propDef.props;
export type MdBlurOnEvents = typeof __propDef.events;
export type MdBlurOnSlots = typeof __propDef.slots;
export default class MdBlurOn extends SvelteComponentTyped<MdBlurOnProps, MdBlurOnEvents, MdBlurOnSlots> {
}
export {};
