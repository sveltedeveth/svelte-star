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
export type IoMdSaveProps = typeof __propDef.props;
export type IoMdSaveEvents = typeof __propDef.events;
export type IoMdSaveSlots = typeof __propDef.slots;
export default class IoMdSave extends SvelteComponentTyped<IoMdSaveProps, IoMdSaveEvents, IoMdSaveSlots> {
}
export {};
