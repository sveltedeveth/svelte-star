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
export type GoBriefcaseProps = typeof __propDef.props;
export type GoBriefcaseEvents = typeof __propDef.events;
export type GoBriefcaseSlots = typeof __propDef.slots;
export default class GoBriefcase extends SvelteComponentTyped<GoBriefcaseProps, GoBriefcaseEvents, GoBriefcaseSlots> {
}
export {};
