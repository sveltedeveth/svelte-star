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
export type GiFoldedPaperProps = typeof __propDef.props;
export type GiFoldedPaperEvents = typeof __propDef.events;
export type GiFoldedPaperSlots = typeof __propDef.slots;
export default class GiFoldedPaper extends SvelteComponentTyped<GiFoldedPaperProps, GiFoldedPaperEvents, GiFoldedPaperSlots> {
}
export {};
