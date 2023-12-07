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
export type MdRestaurantMenuProps = typeof __propDef.props;
export type MdRestaurantMenuEvents = typeof __propDef.events;
export type MdRestaurantMenuSlots = typeof __propDef.slots;
export default class MdRestaurantMenu extends SvelteComponentTyped<MdRestaurantMenuProps, MdRestaurantMenuEvents, MdRestaurantMenuSlots> {
}
export {};
