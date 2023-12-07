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
export type MdPersonProps = typeof __propDef.props;
export type MdPersonEvents = typeof __propDef.events;
export type MdPersonSlots = typeof __propDef.slots;
export default class MdPerson extends SvelteComponentTyped<MdPersonProps, MdPersonEvents, MdPersonSlots> {
}
export {};
