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
export type GiTigerProps = typeof __propDef.props;
export type GiTigerEvents = typeof __propDef.events;
export type GiTigerSlots = typeof __propDef.slots;
export default class GiTiger extends SvelteComponentTyped<GiTigerProps, GiTigerEvents, GiTigerSlots> {
}
export {};
