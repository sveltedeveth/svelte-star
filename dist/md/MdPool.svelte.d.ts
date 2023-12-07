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
export type MdPoolProps = typeof __propDef.props;
export type MdPoolEvents = typeof __propDef.events;
export type MdPoolSlots = typeof __propDef.slots;
export default class MdPool extends SvelteComponentTyped<MdPoolProps, MdPoolEvents, MdPoolSlots> {
}
export {};
