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
export type GiBriefcaseProps = typeof __propDef.props;
export type GiBriefcaseEvents = typeof __propDef.events;
export type GiBriefcaseSlots = typeof __propDef.slots;
export default class GiBriefcase extends SvelteComponentTyped<GiBriefcaseProps, GiBriefcaseEvents, GiBriefcaseSlots> {
}
export {};
