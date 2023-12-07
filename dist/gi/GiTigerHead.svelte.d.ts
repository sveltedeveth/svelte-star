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
export type GiTigerHeadProps = typeof __propDef.props;
export type GiTigerHeadEvents = typeof __propDef.events;
export type GiTigerHeadSlots = typeof __propDef.slots;
export default class GiTigerHead extends SvelteComponentTyped<GiTigerHeadProps, GiTigerHeadEvents, GiTigerHeadSlots> {
}
export {};
