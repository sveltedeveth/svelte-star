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
export type GiToucanProps = typeof __propDef.props;
export type GiToucanEvents = typeof __propDef.events;
export type GiToucanSlots = typeof __propDef.slots;
export default class GiToucan extends SvelteComponentTyped<GiToucanProps, GiToucanEvents, GiToucanSlots> {
}
export {};
