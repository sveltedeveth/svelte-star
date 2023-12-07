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
export type GiEvilMoonProps = typeof __propDef.props;
export type GiEvilMoonEvents = typeof __propDef.events;
export type GiEvilMoonSlots = typeof __propDef.slots;
export default class GiEvilMoon extends SvelteComponentTyped<GiEvilMoonProps, GiEvilMoonEvents, GiEvilMoonSlots> {
}
export {};
