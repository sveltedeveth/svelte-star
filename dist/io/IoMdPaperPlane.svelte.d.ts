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
export type IoMdPaperPlaneProps = typeof __propDef.props;
export type IoMdPaperPlaneEvents = typeof __propDef.events;
export type IoMdPaperPlaneSlots = typeof __propDef.slots;
export default class IoMdPaperPlane extends SvelteComponentTyped<IoMdPaperPlaneProps, IoMdPaperPlaneEvents, IoMdPaperPlaneSlots> {
}
export {};
