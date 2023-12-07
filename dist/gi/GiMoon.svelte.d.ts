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
export type GiMoonProps = typeof __propDef.props;
export type GiMoonEvents = typeof __propDef.events;
export type GiMoonSlots = typeof __propDef.slots;
export default class GiMoon extends SvelteComponentTyped<GiMoonProps, GiMoonEvents, GiMoonSlots> {
}
export {};
