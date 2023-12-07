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
export type IoMdMedkitProps = typeof __propDef.props;
export type IoMdMedkitEvents = typeof __propDef.events;
export type IoMdMedkitSlots = typeof __propDef.slots;
export default class IoMdMedkit extends SvelteComponentTyped<IoMdMedkitProps, IoMdMedkitEvents, IoMdMedkitSlots> {
}
export {};
