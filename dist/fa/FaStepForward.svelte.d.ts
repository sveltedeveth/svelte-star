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
export type FaStepForwardProps = typeof __propDef.props;
export type FaStepForwardEvents = typeof __propDef.events;
export type FaStepForwardSlots = typeof __propDef.slots;
export default class FaStepForward extends SvelteComponentTyped<FaStepForwardProps, FaStepForwardEvents, FaStepForwardSlots> {
}
export {};
