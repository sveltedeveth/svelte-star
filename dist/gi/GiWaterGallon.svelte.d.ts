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
export type GiWaterGallonProps = typeof __propDef.props;
export type GiWaterGallonEvents = typeof __propDef.events;
export type GiWaterGallonSlots = typeof __propDef.slots;
export default class GiWaterGallon extends SvelteComponentTyped<GiWaterGallonProps, GiWaterGallonEvents, GiWaterGallonSlots> {
}
export {};
