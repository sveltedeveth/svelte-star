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
export type MdLocalGroceryStoreProps = typeof __propDef.props;
export type MdLocalGroceryStoreEvents = typeof __propDef.events;
export type MdLocalGroceryStoreSlots = typeof __propDef.slots;
export default class MdLocalGroceryStore extends SvelteComponentTyped<MdLocalGroceryStoreProps, MdLocalGroceryStoreEvents, MdLocalGroceryStoreSlots> {
}
export {};
