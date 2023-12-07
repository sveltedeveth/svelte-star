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
export type GiCultistProps = typeof __propDef.props;
export type GiCultistEvents = typeof __propDef.events;
export type GiCultistSlots = typeof __propDef.slots;
export default class GiCultist extends SvelteComponentTyped<GiCultistProps, GiCultistEvents, GiCultistSlots> {
}
export {};
