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
export type FaTimesCircleProps = typeof __propDef.props;
export type FaTimesCircleEvents = typeof __propDef.events;
export type FaTimesCircleSlots = typeof __propDef.slots;
export default class FaTimesCircle extends SvelteComponentTyped<FaTimesCircleProps, FaTimesCircleEvents, FaTimesCircleSlots> {
}
export {};
