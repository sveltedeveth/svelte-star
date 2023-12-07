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
export type WiTrainProps = typeof __propDef.props;
export type WiTrainEvents = typeof __propDef.events;
export type WiTrainSlots = typeof __propDef.slots;
export default class WiTrain extends SvelteComponentTyped<WiTrainProps, WiTrainEvents, WiTrainSlots> {
}
export {};
