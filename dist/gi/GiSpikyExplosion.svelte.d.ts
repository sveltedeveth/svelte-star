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
export type GiSpikyExplosionProps = typeof __propDef.props;
export type GiSpikyExplosionEvents = typeof __propDef.events;
export type GiSpikyExplosionSlots = typeof __propDef.slots;
export default class GiSpikyExplosion extends SvelteComponentTyped<GiSpikyExplosionProps, GiSpikyExplosionEvents, GiSpikyExplosionSlots> {
}
export {};
