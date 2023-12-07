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
export type MdMouseProps = typeof __propDef.props;
export type MdMouseEvents = typeof __propDef.events;
export type MdMouseSlots = typeof __propDef.slots;
export default class MdMouse extends SvelteComponentTyped<MdMouseProps, MdMouseEvents, MdMouseSlots> {
}
export {};
