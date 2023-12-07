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
export type FaPeopleCarryProps = typeof __propDef.props;
export type FaPeopleCarryEvents = typeof __propDef.events;
export type FaPeopleCarrySlots = typeof __propDef.slots;
export default class FaPeopleCarry extends SvelteComponentTyped<FaPeopleCarryProps, FaPeopleCarryEvents, FaPeopleCarrySlots> {
}
export {};
