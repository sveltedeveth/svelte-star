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
export type GiCornerExplosionProps = typeof __propDef.props;
export type GiCornerExplosionEvents = typeof __propDef.events;
export type GiCornerExplosionSlots = typeof __propDef.slots;
export default class GiCornerExplosion extends SvelteComponentTyped<GiCornerExplosionProps, GiCornerExplosionEvents, GiCornerExplosionSlots> {
}
export {};
