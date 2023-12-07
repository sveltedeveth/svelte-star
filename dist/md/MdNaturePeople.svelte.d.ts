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
export type MdNaturePeopleProps = typeof __propDef.props;
export type MdNaturePeopleEvents = typeof __propDef.events;
export type MdNaturePeopleSlots = typeof __propDef.slots;
export default class MdNaturePeople extends SvelteComponentTyped<MdNaturePeopleProps, MdNaturePeopleEvents, MdNaturePeopleSlots> {
}
export {};
