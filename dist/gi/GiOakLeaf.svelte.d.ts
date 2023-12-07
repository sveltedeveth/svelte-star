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
export type GiOakLeafProps = typeof __propDef.props;
export type GiOakLeafEvents = typeof __propDef.events;
export type GiOakLeafSlots = typeof __propDef.slots;
export default class GiOakLeaf extends SvelteComponentTyped<GiOakLeafProps, GiOakLeafEvents, GiOakLeafSlots> {
}
export {};
