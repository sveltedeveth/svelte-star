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
export type FaTheRedYetiProps = typeof __propDef.props;
export type FaTheRedYetiEvents = typeof __propDef.events;
export type FaTheRedYetiSlots = typeof __propDef.slots;
export default class FaTheRedYeti extends SvelteComponentTyped<FaTheRedYetiProps, FaTheRedYetiEvents, FaTheRedYetiSlots> {
}
export {};
