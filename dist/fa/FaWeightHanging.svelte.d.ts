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
export type FaWeightHangingProps = typeof __propDef.props;
export type FaWeightHangingEvents = typeof __propDef.events;
export type FaWeightHangingSlots = typeof __propDef.slots;
export default class FaWeightHanging extends SvelteComponentTyped<FaWeightHangingProps, FaWeightHangingEvents, FaWeightHangingSlots> {
}
export {};
