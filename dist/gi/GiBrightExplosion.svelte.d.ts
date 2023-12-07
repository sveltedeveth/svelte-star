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
export type GiBrightExplosionProps = typeof __propDef.props;
export type GiBrightExplosionEvents = typeof __propDef.events;
export type GiBrightExplosionSlots = typeof __propDef.slots;
export default class GiBrightExplosion extends SvelteComponentTyped<GiBrightExplosionProps, GiBrightExplosionEvents, GiBrightExplosionSlots> {
}
export {};
