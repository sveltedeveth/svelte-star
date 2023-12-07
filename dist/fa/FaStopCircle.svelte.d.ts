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
export type FaStopCircleProps = typeof __propDef.props;
export type FaStopCircleEvents = typeof __propDef.events;
export type FaStopCircleSlots = typeof __propDef.slots;
export default class FaStopCircle extends SvelteComponentTyped<FaStopCircleProps, FaStopCircleEvents, FaStopCircleSlots> {
}
export {};
