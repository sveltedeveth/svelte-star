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
export type IoMdMaleProps = typeof __propDef.props;
export type IoMdMaleEvents = typeof __propDef.events;
export type IoMdMaleSlots = typeof __propDef.slots;
export default class IoMdMale extends SvelteComponentTyped<IoMdMaleProps, IoMdMaleEvents, IoMdMaleSlots> {
}
export {};
