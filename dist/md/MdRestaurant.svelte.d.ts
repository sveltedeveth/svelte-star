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
export type MdRestaurantProps = typeof __propDef.props;
export type MdRestaurantEvents = typeof __propDef.events;
export type MdRestaurantSlots = typeof __propDef.slots;
export default class MdRestaurant extends SvelteComponentTyped<MdRestaurantProps, MdRestaurantEvents, MdRestaurantSlots> {
}
export {};
