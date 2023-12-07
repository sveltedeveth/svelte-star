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
export type GiTapProps = typeof __propDef.props;
export type GiTapEvents = typeof __propDef.events;
export type GiTapSlots = typeof __propDef.slots;
export default class GiTap extends SvelteComponentTyped<GiTapProps, GiTapEvents, GiTapSlots> {
}
export {};
