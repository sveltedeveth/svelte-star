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
export type FaRegSaveProps = typeof __propDef.props;
export type FaRegSaveEvents = typeof __propDef.events;
export type FaRegSaveSlots = typeof __propDef.slots;
export default class FaRegSave extends SvelteComponentTyped<FaRegSaveProps, FaRegSaveEvents, FaRegSaveSlots> {
}
export {};
