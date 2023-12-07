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
export type GiStarSattelitesProps = typeof __propDef.props;
export type GiStarSattelitesEvents = typeof __propDef.events;
export type GiStarSattelitesSlots = typeof __propDef.slots;
export default class GiStarSattelites extends SvelteComponentTyped<GiStarSattelitesProps, GiStarSattelitesEvents, GiStarSattelitesSlots> {
}
export {};
