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
export type IoMdPeopleProps = typeof __propDef.props;
export type IoMdPeopleEvents = typeof __propDef.events;
export type IoMdPeopleSlots = typeof __propDef.slots;
export default class IoMdPeople extends SvelteComponentTyped<IoMdPeopleProps, IoMdPeopleEvents, IoMdPeopleSlots> {
}
export {};
