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
export type MdHearingProps = typeof __propDef.props;
export type MdHearingEvents = typeof __propDef.events;
export type MdHearingSlots = typeof __propDef.slots;
export default class MdHearing extends SvelteComponentTyped<MdHearingProps, MdHearingEvents, MdHearingSlots> {
}
export {};
