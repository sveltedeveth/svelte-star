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
export type GiSaveProps = typeof __propDef.props;
export type GiSaveEvents = typeof __propDef.events;
export type GiSaveSlots = typeof __propDef.slots;
export default class GiSave extends SvelteComponentTyped<GiSaveProps, GiSaveEvents, GiSaveSlots> {
}
export {};
