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
export type GiExplosionRaysProps = typeof __propDef.props;
export type GiExplosionRaysEvents = typeof __propDef.events;
export type GiExplosionRaysSlots = typeof __propDef.slots;
export default class GiExplosionRays extends SvelteComponentTyped<GiExplosionRaysProps, GiExplosionRaysEvents, GiExplosionRaysSlots> {
}
export {};
