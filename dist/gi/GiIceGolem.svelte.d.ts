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
export type GiIceGolemProps = typeof __propDef.props;
export type GiIceGolemEvents = typeof __propDef.events;
export type GiIceGolemSlots = typeof __propDef.slots;
export default class GiIceGolem extends SvelteComponentTyped<GiIceGolemProps, GiIceGolemEvents, GiIceGolemSlots> {
}
export {};
