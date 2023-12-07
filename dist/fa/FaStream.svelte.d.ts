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
export type FaStreamProps = typeof __propDef.props;
export type FaStreamEvents = typeof __propDef.events;
export type FaStreamSlots = typeof __propDef.slots;
export default class FaStream extends SvelteComponentTyped<FaStreamProps, FaStreamEvents, FaStreamSlots> {
}
export {};
