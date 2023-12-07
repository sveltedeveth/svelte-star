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
export type IoMdBriefcaseProps = typeof __propDef.props;
export type IoMdBriefcaseEvents = typeof __propDef.events;
export type IoMdBriefcaseSlots = typeof __propDef.slots;
export default class IoMdBriefcase extends SvelteComponentTyped<IoMdBriefcaseProps, IoMdBriefcaseEvents, IoMdBriefcaseSlots> {
}
export {};
