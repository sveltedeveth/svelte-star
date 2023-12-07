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
export type GiStarfighterProps = typeof __propDef.props;
export type GiStarfighterEvents = typeof __propDef.events;
export type GiStarfighterSlots = typeof __propDef.slots;
export default class GiStarfighter extends SvelteComponentTyped<GiStarfighterProps, GiStarfighterEvents, GiStarfighterSlots> {
}
export {};
