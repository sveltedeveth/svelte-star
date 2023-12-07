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
export type GiLanternProps = typeof __propDef.props;
export type GiLanternEvents = typeof __propDef.events;
export type GiLanternSlots = typeof __propDef.slots;
export default class GiLantern extends SvelteComponentTyped<GiLanternProps, GiLanternEvents, GiLanternSlots> {
}
export {};
