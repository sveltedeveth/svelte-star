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
export type GiPaperWindmillProps = typeof __propDef.props;
export type GiPaperWindmillEvents = typeof __propDef.events;
export type GiPaperWindmillSlots = typeof __propDef.slots;
export default class GiPaperWindmill extends SvelteComponentTyped<GiPaperWindmillProps, GiPaperWindmillEvents, GiPaperWindmillSlots> {
}
export {};
