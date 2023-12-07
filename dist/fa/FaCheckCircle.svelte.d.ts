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
export type FaCheckCircleProps = typeof __propDef.props;
export type FaCheckCircleEvents = typeof __propDef.events;
export type FaCheckCircleSlots = typeof __propDef.slots;
export default class FaCheckCircle extends SvelteComponentTyped<FaCheckCircleProps, FaCheckCircleEvents, FaCheckCircleSlots> {
}
export {};
