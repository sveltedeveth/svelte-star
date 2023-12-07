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
export type GiPaperBoatProps = typeof __propDef.props;
export type GiPaperBoatEvents = typeof __propDef.events;
export type GiPaperBoatSlots = typeof __propDef.slots;
export default class GiPaperBoat extends SvelteComponentTyped<GiPaperBoatProps, GiPaperBoatEvents, GiPaperBoatSlots> {
}
export {};
