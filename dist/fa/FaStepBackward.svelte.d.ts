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
export type FaStepBackwardProps = typeof __propDef.props;
export type FaStepBackwardEvents = typeof __propDef.events;
export type FaStepBackwardSlots = typeof __propDef.slots;
export default class FaStepBackward extends SvelteComponentTyped<FaStepBackwardProps, FaStepBackwardEvents, FaStepBackwardSlots> {
}
export {};
