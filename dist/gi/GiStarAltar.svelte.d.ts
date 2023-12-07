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
export type GiStarAltarProps = typeof __propDef.props;
export type GiStarAltarEvents = typeof __propDef.events;
export type GiStarAltarSlots = typeof __propDef.slots;
export default class GiStarAltar extends SvelteComponentTyped<GiStarAltarProps, GiStarAltarEvents, GiStarAltarSlots> {
}
export {};
