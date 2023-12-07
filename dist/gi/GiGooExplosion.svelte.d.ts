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
export type GiGooExplosionProps = typeof __propDef.props;
export type GiGooExplosionEvents = typeof __propDef.events;
export type GiGooExplosionSlots = typeof __propDef.slots;
export default class GiGooExplosion extends SvelteComponentTyped<GiGooExplosionProps, GiGooExplosionEvents, GiGooExplosionSlots> {
}
export {};
