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
export type MdFlagProps = typeof __propDef.props;
export type MdFlagEvents = typeof __propDef.events;
export type MdFlagSlots = typeof __propDef.slots;
export default class MdFlag extends SvelteComponentTyped<MdFlagProps, MdFlagEvents, MdFlagSlots> {
}
export {};
