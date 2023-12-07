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
export type GiTropicalFishProps = typeof __propDef.props;
export type GiTropicalFishEvents = typeof __propDef.events;
export type GiTropicalFishSlots = typeof __propDef.slots;
export default class GiTropicalFish extends SvelteComponentTyped<GiTropicalFishProps, GiTropicalFishEvents, GiTropicalFishSlots> {
}
export {};
