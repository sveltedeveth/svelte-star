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
export type MdBurstModeProps = typeof __propDef.props;
export type MdBurstModeEvents = typeof __propDef.events;
export type MdBurstModeSlots = typeof __propDef.slots;
export default class MdBurstMode extends SvelteComponentTyped<MdBurstModeProps, MdBurstModeEvents, MdBurstModeSlots> {
}
export {};
