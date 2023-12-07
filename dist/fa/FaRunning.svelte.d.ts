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
export type FaRunningProps = typeof __propDef.props;
export type FaRunningEvents = typeof __propDef.events;
export type FaRunningSlots = typeof __propDef.slots;
export default class FaRunning extends SvelteComponentTyped<FaRunningProps, FaRunningEvents, FaRunningSlots> {
}
export {};
