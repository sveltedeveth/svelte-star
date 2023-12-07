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
export type FaTrainProps = typeof __propDef.props;
export type FaTrainEvents = typeof __propDef.events;
export type FaTrainSlots = typeof __propDef.slots;
export default class FaTrain extends SvelteComponentTyped<FaTrainProps, FaTrainEvents, FaTrainSlots> {
}
export {};
