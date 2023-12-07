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
export type FaFanProps = typeof __propDef.props;
export type FaFanEvents = typeof __propDef.events;
export type FaFanSlots = typeof __propDef.slots;
export default class FaFan extends SvelteComponentTyped<FaFanProps, FaFanEvents, FaFanSlots> {
}
export {};
