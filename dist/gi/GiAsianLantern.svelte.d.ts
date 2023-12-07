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
export type GiAsianLanternProps = typeof __propDef.props;
export type GiAsianLanternEvents = typeof __propDef.events;
export type GiAsianLanternSlots = typeof __propDef.slots;
export default class GiAsianLantern extends SvelteComponentTyped<GiAsianLanternProps, GiAsianLanternEvents, GiAsianLanternSlots> {
}
export {};
