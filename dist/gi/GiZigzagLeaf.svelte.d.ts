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
export type GiZigzagLeafProps = typeof __propDef.props;
export type GiZigzagLeafEvents = typeof __propDef.events;
export type GiZigzagLeafSlots = typeof __propDef.slots;
export default class GiZigzagLeaf extends SvelteComponentTyped<GiZigzagLeafProps, GiZigzagLeafEvents, GiZigzagLeafSlots> {
}
export {};
