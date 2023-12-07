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
export type GiGooSpurtProps = typeof __propDef.props;
export type GiGooSpurtEvents = typeof __propDef.events;
export type GiGooSpurtSlots = typeof __propDef.slots;
export default class GiGooSpurt extends SvelteComponentTyped<GiGooSpurtProps, GiGooSpurtEvents, GiGooSpurtSlots> {
}
export {};
