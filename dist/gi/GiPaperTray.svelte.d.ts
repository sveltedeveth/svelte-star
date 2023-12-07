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
export type GiPaperTrayProps = typeof __propDef.props;
export type GiPaperTrayEvents = typeof __propDef.events;
export type GiPaperTraySlots = typeof __propDef.slots;
export default class GiPaperTray extends SvelteComponentTyped<GiPaperTrayProps, GiPaperTrayEvents, GiPaperTraySlots> {
}
export {};
