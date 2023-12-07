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
export type GiRadarDishProps = typeof __propDef.props;
export type GiRadarDishEvents = typeof __propDef.events;
export type GiRadarDishSlots = typeof __propDef.slots;
export default class GiRadarDish extends SvelteComponentTyped<GiRadarDishProps, GiRadarDishEvents, GiRadarDishSlots> {
}
export {};
