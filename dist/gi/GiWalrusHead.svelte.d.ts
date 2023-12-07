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
export type GiWalrusHeadProps = typeof __propDef.props;
export type GiWalrusHeadEvents = typeof __propDef.events;
export type GiWalrusHeadSlots = typeof __propDef.slots;
export default class GiWalrusHead extends SvelteComponentTyped<GiWalrusHeadProps, GiWalrusHeadEvents, GiWalrusHeadSlots> {
}
export {};
