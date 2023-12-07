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
export type GiGreekTempleProps = typeof __propDef.props;
export type GiGreekTempleEvents = typeof __propDef.events;
export type GiGreekTempleSlots = typeof __propDef.slots;
export default class GiGreekTemple extends SvelteComponentTyped<GiGreekTempleProps, GiGreekTempleEvents, GiGreekTempleSlots> {
}
export {};
