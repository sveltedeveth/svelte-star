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
export type GiPaperClipProps = typeof __propDef.props;
export type GiPaperClipEvents = typeof __propDef.events;
export type GiPaperClipSlots = typeof __propDef.slots;
export default class GiPaperClip extends SvelteComponentTyped<GiPaperClipProps, GiPaperClipEvents, GiPaperClipSlots> {
}
export {};
