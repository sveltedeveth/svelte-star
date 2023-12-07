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
export type GiPaperProps = typeof __propDef.props;
export type GiPaperEvents = typeof __propDef.events;
export type GiPaperSlots = typeof __propDef.slots;
export default class GiPaper extends SvelteComponentTyped<GiPaperProps, GiPaperEvents, GiPaperSlots> {
}
export {};
