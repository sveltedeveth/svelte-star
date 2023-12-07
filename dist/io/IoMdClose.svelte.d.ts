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
export type IoMdCloseProps = typeof __propDef.props;
export type IoMdCloseEvents = typeof __propDef.events;
export type IoMdCloseSlots = typeof __propDef.slots;
export default class IoMdClose extends SvelteComponentTyped<IoMdCloseProps, IoMdCloseEvents, IoMdCloseSlots> {
}
export {};
