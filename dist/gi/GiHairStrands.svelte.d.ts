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
export type GiHairStrandsProps = typeof __propDef.props;
export type GiHairStrandsEvents = typeof __propDef.events;
export type GiHairStrandsSlots = typeof __propDef.slots;
export default class GiHairStrands extends SvelteComponentTyped<GiHairStrandsProps, GiHairStrandsEvents, GiHairStrandsSlots> {
}
export {};
