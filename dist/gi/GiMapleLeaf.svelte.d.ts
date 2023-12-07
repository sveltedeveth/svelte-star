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
export type GiMapleLeafProps = typeof __propDef.props;
export type GiMapleLeafEvents = typeof __propDef.events;
export type GiMapleLeafSlots = typeof __propDef.slots;
export default class GiMapleLeaf extends SvelteComponentTyped<GiMapleLeafProps, GiMapleLeafEvents, GiMapleLeafSlots> {
}
export {};
