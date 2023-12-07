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
export type IoMdPaperProps = typeof __propDef.props;
export type IoMdPaperEvents = typeof __propDef.events;
export type IoMdPaperSlots = typeof __propDef.slots;
export default class IoMdPaper extends SvelteComponentTyped<IoMdPaperProps, IoMdPaperEvents, IoMdPaperSlots> {
}
export {};
