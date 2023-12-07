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
export type TiBriefcaseProps = typeof __propDef.props;
export type TiBriefcaseEvents = typeof __propDef.events;
export type TiBriefcaseSlots = typeof __propDef.slots;
export default class TiBriefcase extends SvelteComponentTyped<TiBriefcaseProps, TiBriefcaseEvents, TiBriefcaseSlots> {
}
export {};
