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
export type GiAnglerFishProps = typeof __propDef.props;
export type GiAnglerFishEvents = typeof __propDef.events;
export type GiAnglerFishSlots = typeof __propDef.slots;
export default class GiAnglerFish extends SvelteComponentTyped<GiAnglerFishProps, GiAnglerFishEvents, GiAnglerFishSlots> {
}
export {};
