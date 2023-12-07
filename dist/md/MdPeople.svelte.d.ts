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
export type MdPeopleProps = typeof __propDef.props;
export type MdPeopleEvents = typeof __propDef.events;
export type MdPeopleSlots = typeof __propDef.slots;
export default class MdPeople extends SvelteComponentTyped<MdPeopleProps, MdPeopleEvents, MdPeopleSlots> {
}
export {};
