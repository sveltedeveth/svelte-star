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
export type FaMinusCircleProps = typeof __propDef.props;
export type FaMinusCircleEvents = typeof __propDef.events;
export type FaMinusCircleSlots = typeof __propDef.slots;
export default class FaMinusCircle extends SvelteComponentTyped<FaMinusCircleProps, FaMinusCircleEvents, FaMinusCircleSlots> {
}
export {};
