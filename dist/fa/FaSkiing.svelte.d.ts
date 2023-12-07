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
export type FaSkiingProps = typeof __propDef.props;
export type FaSkiingEvents = typeof __propDef.events;
export type FaSkiingSlots = typeof __propDef.slots;
export default class FaSkiing extends SvelteComponentTyped<FaSkiingProps, FaSkiingEvents, FaSkiingSlots> {
}
export {};
