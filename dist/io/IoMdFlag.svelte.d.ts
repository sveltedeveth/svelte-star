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
export type IoMdFlagProps = typeof __propDef.props;
export type IoMdFlagEvents = typeof __propDef.events;
export type IoMdFlagSlots = typeof __propDef.slots;
export default class IoMdFlag extends SvelteComponentTyped<IoMdFlagProps, IoMdFlagEvents, IoMdFlagSlots> {
}
export {};
