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
export type IoMdSadProps = typeof __propDef.props;
export type IoMdSadEvents = typeof __propDef.events;
export type IoMdSadSlots = typeof __propDef.slots;
export default class IoMdSad extends SvelteComponentTyped<IoMdSadProps, IoMdSadEvents, IoMdSadSlots> {
}
export {};
