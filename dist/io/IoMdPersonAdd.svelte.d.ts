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
export type IoMdPersonAddProps = typeof __propDef.props;
export type IoMdPersonAddEvents = typeof __propDef.events;
export type IoMdPersonAddSlots = typeof __propDef.slots;
export default class IoMdPersonAdd extends SvelteComponentTyped<IoMdPersonAddProps, IoMdPersonAddEvents, IoMdPersonAddSlots> {
}
export {};
