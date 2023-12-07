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
export type FaHandRockProps = typeof __propDef.props;
export type FaHandRockEvents = typeof __propDef.events;
export type FaHandRockSlots = typeof __propDef.slots;
export default class FaHandRock extends SvelteComponentTyped<FaHandRockProps, FaHandRockEvents, FaHandRockSlots> {
}
export {};
