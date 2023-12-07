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
export type FaPlusCircleProps = typeof __propDef.props;
export type FaPlusCircleEvents = typeof __propDef.events;
export type FaPlusCircleSlots = typeof __propDef.slots;
export default class FaPlusCircle extends SvelteComponentTyped<FaPlusCircleProps, FaPlusCircleEvents, FaPlusCircleSlots> {
}
export {};
