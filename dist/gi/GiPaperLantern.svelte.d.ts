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
export type GiPaperLanternProps = typeof __propDef.props;
export type GiPaperLanternEvents = typeof __propDef.events;
export type GiPaperLanternSlots = typeof __propDef.slots;
export default class GiPaperLantern extends SvelteComponentTyped<GiPaperLanternProps, GiPaperLanternEvents, GiPaperLanternSlots> {
}
export {};
