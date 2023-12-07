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
export type FaCityProps = typeof __propDef.props;
export type FaCityEvents = typeof __propDef.events;
export type FaCitySlots = typeof __propDef.slots;
export default class FaCity extends SvelteComponentTyped<FaCityProps, FaCityEvents, FaCitySlots> {
}
export {};
