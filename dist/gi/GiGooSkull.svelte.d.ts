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
export type GiGooSkullProps = typeof __propDef.props;
export type GiGooSkullEvents = typeof __propDef.events;
export type GiGooSkullSlots = typeof __propDef.slots;
export default class GiGooSkull extends SvelteComponentTyped<GiGooSkullProps, GiGooSkullEvents, GiGooSkullSlots> {
}
export {};
