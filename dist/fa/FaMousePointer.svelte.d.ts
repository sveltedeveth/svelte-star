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
export type FaMousePointerProps = typeof __propDef.props;
export type FaMousePointerEvents = typeof __propDef.events;
export type FaMousePointerSlots = typeof __propDef.slots;
export default class FaMousePointer extends SvelteComponentTyped<FaMousePointerProps, FaMousePointerEvents, FaMousePointerSlots> {
}
export {};
