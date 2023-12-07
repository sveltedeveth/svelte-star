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
export type GiTumorProps = typeof __propDef.props;
export type GiTumorEvents = typeof __propDef.events;
export type GiTumorSlots = typeof __propDef.slots;
export default class GiTumor extends SvelteComponentTyped<GiTumorProps, GiTumorEvents, GiTumorSlots> {
}
export {};
