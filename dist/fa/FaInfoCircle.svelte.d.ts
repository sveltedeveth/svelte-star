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
export type FaInfoCircleProps = typeof __propDef.props;
export type FaInfoCircleEvents = typeof __propDef.events;
export type FaInfoCircleSlots = typeof __propDef.slots;
export default class FaInfoCircle extends SvelteComponentTyped<FaInfoCircleProps, FaInfoCircleEvents, FaInfoCircleSlots> {
}
export {};
