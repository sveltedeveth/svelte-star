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
export type FaRegUserCircleProps = typeof __propDef.props;
export type FaRegUserCircleEvents = typeof __propDef.events;
export type FaRegUserCircleSlots = typeof __propDef.slots;
export default class FaRegUserCircle extends SvelteComponentTyped<FaRegUserCircleProps, FaRegUserCircleEvents, FaRegUserCircleSlots> {
}
export {};
