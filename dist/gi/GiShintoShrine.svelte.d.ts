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
export type GiShintoShrineProps = typeof __propDef.props;
export type GiShintoShrineEvents = typeof __propDef.events;
export type GiShintoShrineSlots = typeof __propDef.slots;
export default class GiShintoShrine extends SvelteComponentTyped<GiShintoShrineProps, GiShintoShrineEvents, GiShintoShrineSlots> {
}
export {};
