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
export type FaBriefcaseProps = typeof __propDef.props;
export type FaBriefcaseEvents = typeof __propDef.events;
export type FaBriefcaseSlots = typeof __propDef.slots;
export default class FaBriefcase extends SvelteComponentTyped<FaBriefcaseProps, FaBriefcaseEvents, FaBriefcaseSlots> {
}
export {};
