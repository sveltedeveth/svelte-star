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
export type GiDrinkMeProps = typeof __propDef.props;
export type GiDrinkMeEvents = typeof __propDef.events;
export type GiDrinkMeSlots = typeof __propDef.slots;
export default class GiDrinkMe extends SvelteComponentTyped<GiDrinkMeProps, GiDrinkMeEvents, GiDrinkMeSlots> {
}
export {};
