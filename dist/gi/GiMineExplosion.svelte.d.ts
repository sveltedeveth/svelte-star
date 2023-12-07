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
export type GiMineExplosionProps = typeof __propDef.props;
export type GiMineExplosionEvents = typeof __propDef.events;
export type GiMineExplosionSlots = typeof __propDef.slots;
export default class GiMineExplosion extends SvelteComponentTyped<GiMineExplosionProps, GiMineExplosionEvents, GiMineExplosionSlots> {
}
export {};
