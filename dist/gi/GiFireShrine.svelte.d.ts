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
export type GiFireShrineProps = typeof __propDef.props;
export type GiFireShrineEvents = typeof __propDef.events;
export type GiFireShrineSlots = typeof __propDef.slots;
export default class GiFireShrine extends SvelteComponentTyped<GiFireShrineProps, GiFireShrineEvents, GiFireShrineSlots> {
}
export {};
