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
export type IoMdRestaurantProps = typeof __propDef.props;
export type IoMdRestaurantEvents = typeof __propDef.events;
export type IoMdRestaurantSlots = typeof __propDef.slots;
export default class IoMdRestaurant extends SvelteComponentTyped<IoMdRestaurantProps, IoMdRestaurantEvents, IoMdRestaurantSlots> {
}
export {};
