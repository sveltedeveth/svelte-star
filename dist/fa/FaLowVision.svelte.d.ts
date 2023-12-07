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
export type FaLowVisionProps = typeof __propDef.props;
export type FaLowVisionEvents = typeof __propDef.events;
export type FaLowVisionSlots = typeof __propDef.slots;
export default class FaLowVision extends SvelteComponentTyped<FaLowVisionProps, FaLowVisionEvents, FaLowVisionSlots> {
}
export {};
