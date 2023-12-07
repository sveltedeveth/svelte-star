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
export type GiPaperBombProps = typeof __propDef.props;
export type GiPaperBombEvents = typeof __propDef.events;
export type GiPaperBombSlots = typeof __propDef.slots;
export default class GiPaperBomb extends SvelteComponentTyped<GiPaperBombProps, GiPaperBombEvents, GiPaperBombSlots> {
}
export {};
