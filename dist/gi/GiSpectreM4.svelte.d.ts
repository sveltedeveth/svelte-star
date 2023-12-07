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
export type GiSpectreM4Props = typeof __propDef.props;
export type GiSpectreM4Events = typeof __propDef.events;
export type GiSpectreM4Slots = typeof __propDef.slots;
export default class GiSpectreM4 extends SvelteComponentTyped<GiSpectreM4Props, GiSpectreM4Events, GiSpectreM4Slots> {
}
export {};
