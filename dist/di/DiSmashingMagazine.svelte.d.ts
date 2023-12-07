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
export type DiSmashingMagazineProps = typeof __propDef.props;
export type DiSmashingMagazineEvents = typeof __propDef.events;
export type DiSmashingMagazineSlots = typeof __propDef.slots;
export default class DiSmashingMagazine extends SvelteComponentTyped<DiSmashingMagazineProps, DiSmashingMagazineEvents, DiSmashingMagazineSlots> {
}
export {};
