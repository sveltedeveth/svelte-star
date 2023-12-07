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
export type GiLavaProps = typeof __propDef.props;
export type GiLavaEvents = typeof __propDef.events;
export type GiLavaSlots = typeof __propDef.slots;
export default class GiLava extends SvelteComponentTyped<GiLavaProps, GiLavaEvents, GiLavaSlots> {
}
export {};
