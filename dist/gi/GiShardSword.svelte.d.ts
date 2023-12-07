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
export type GiShardSwordProps = typeof __propDef.props;
export type GiShardSwordEvents = typeof __propDef.events;
export type GiShardSwordSlots = typeof __propDef.slots;
export default class GiShardSword extends SvelteComponentTyped<GiShardSwordProps, GiShardSwordEvents, GiShardSwordSlots> {
}
export {};
