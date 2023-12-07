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
export type FaCircleProps = typeof __propDef.props;
export type FaCircleEvents = typeof __propDef.events;
export type FaCircleSlots = typeof __propDef.slots;
export default class FaCircle extends SvelteComponentTyped<FaCircleProps, FaCircleEvents, FaCircleSlots> {
}
export {};
