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
export type GiCurledLeafProps = typeof __propDef.props;
export type GiCurledLeafEvents = typeof __propDef.events;
export type GiCurledLeafSlots = typeof __propDef.slots;
export default class GiCurledLeaf extends SvelteComponentTyped<GiCurledLeafProps, GiCurledLeafEvents, GiCurledLeafSlots> {
}
export {};
