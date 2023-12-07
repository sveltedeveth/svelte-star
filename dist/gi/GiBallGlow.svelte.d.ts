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
export type GiBallGlowProps = typeof __propDef.props;
export type GiBallGlowEvents = typeof __propDef.events;
export type GiBallGlowSlots = typeof __propDef.slots;
export default class GiBallGlow extends SvelteComponentTyped<GiBallGlowProps, GiBallGlowEvents, GiBallGlowSlots> {
}
export {};
