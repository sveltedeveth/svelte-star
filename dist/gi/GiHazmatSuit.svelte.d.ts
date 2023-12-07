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
export type GiHazmatSuitProps = typeof __propDef.props;
export type GiHazmatSuitEvents = typeof __propDef.events;
export type GiHazmatSuitSlots = typeof __propDef.slots;
export default class GiHazmatSuit extends SvelteComponentTyped<GiHazmatSuitProps, GiHazmatSuitEvents, GiHazmatSuitSlots> {
}
export {};
