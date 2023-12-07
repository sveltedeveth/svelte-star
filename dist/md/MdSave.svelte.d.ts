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
export type MdSaveProps = typeof __propDef.props;
export type MdSaveEvents = typeof __propDef.events;
export type MdSaveSlots = typeof __propDef.slots;
export default class MdSave extends SvelteComponentTyped<MdSaveProps, MdSaveEvents, MdSaveSlots> {
}
export {};
