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
export type FaRegHandRockProps = typeof __propDef.props;
export type FaRegHandRockEvents = typeof __propDef.events;
export type FaRegHandRockSlots = typeof __propDef.slots;
export default class FaRegHandRock extends SvelteComponentTyped<FaRegHandRockProps, FaRegHandRockEvents, FaRegHandRockSlots> {
}
export {};
