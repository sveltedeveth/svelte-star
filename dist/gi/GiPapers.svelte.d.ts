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
export type GiPapersProps = typeof __propDef.props;
export type GiPapersEvents = typeof __propDef.events;
export type GiPapersSlots = typeof __propDef.slots;
export default class GiPapers extends SvelteComponentTyped<GiPapersProps, GiPapersEvents, GiPapersSlots> {
}
export {};
