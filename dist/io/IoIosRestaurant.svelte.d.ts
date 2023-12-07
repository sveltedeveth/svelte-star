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
export type IoIosRestaurantProps = typeof __propDef.props;
export type IoIosRestaurantEvents = typeof __propDef.events;
export type IoIosRestaurantSlots = typeof __propDef.slots;
export default class IoIosRestaurant extends SvelteComponentTyped<IoIosRestaurantProps, IoIosRestaurantEvents, IoIosRestaurantSlots> {
}
export {};
