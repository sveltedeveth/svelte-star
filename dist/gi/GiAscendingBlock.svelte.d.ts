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
export type GiAscendingBlockProps = typeof __propDef.props;
export type GiAscendingBlockEvents = typeof __propDef.events;
export type GiAscendingBlockSlots = typeof __propDef.slots;
export default class GiAscendingBlock extends SvelteComponentTyped<GiAscendingBlockProps, GiAscendingBlockEvents, GiAscendingBlockSlots> {
}
export {};
