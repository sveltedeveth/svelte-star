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
export type FaHotdogProps = typeof __propDef.props;
export type FaHotdogEvents = typeof __propDef.events;
export type FaHotdogSlots = typeof __propDef.slots;
export default class FaHotdog extends SvelteComponentTyped<FaHotdogProps, FaHotdogEvents, FaHotdogSlots> {
}
export {};
