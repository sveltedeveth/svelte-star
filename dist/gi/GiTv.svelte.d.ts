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
export type GiTvProps = typeof __propDef.props;
export type GiTvEvents = typeof __propDef.events;
export type GiTvSlots = typeof __propDef.slots;
export default class GiTv extends SvelteComponentTyped<GiTvProps, GiTvEvents, GiTvSlots> {
}
export {};
