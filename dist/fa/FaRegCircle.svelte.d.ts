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
export type FaRegCircleProps = typeof __propDef.props;
export type FaRegCircleEvents = typeof __propDef.events;
export type FaRegCircleSlots = typeof __propDef.slots;
export default class FaRegCircle extends SvelteComponentTyped<FaRegCircleProps, FaRegCircleEvents, FaRegCircleSlots> {
}
export {};
