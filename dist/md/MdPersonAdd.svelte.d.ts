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
export type MdPersonAddProps = typeof __propDef.props;
export type MdPersonAddEvents = typeof __propDef.events;
export type MdPersonAddSlots = typeof __propDef.slots;
export default class MdPersonAdd extends SvelteComponentTyped<MdPersonAddProps, MdPersonAddEvents, MdPersonAddSlots> {
}
export {};
