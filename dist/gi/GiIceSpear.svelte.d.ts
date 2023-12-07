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
export type GiIceSpearProps = typeof __propDef.props;
export type GiIceSpearEvents = typeof __propDef.events;
export type GiIceSpearSlots = typeof __propDef.slots;
export default class GiIceSpear extends SvelteComponentTyped<GiIceSpearProps, GiIceSpearEvents, GiIceSpearSlots> {
}
export {};
