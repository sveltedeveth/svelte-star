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
export type FaSistrixProps = typeof __propDef.props;
export type FaSistrixEvents = typeof __propDef.events;
export type FaSistrixSlots = typeof __propDef.slots;
export default class FaSistrix extends SvelteComponentTyped<FaSistrixProps, FaSistrixEvents, FaSistrixSlots> {
}
export {};
