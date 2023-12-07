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
export type MdPeopleOutlineProps = typeof __propDef.props;
export type MdPeopleOutlineEvents = typeof __propDef.events;
export type MdPeopleOutlineSlots = typeof __propDef.slots;
export default class MdPeopleOutline extends SvelteComponentTyped<MdPeopleOutlineProps, MdPeopleOutlineEvents, MdPeopleOutlineSlots> {
}
export {};
