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
export type GiDrinkingProps = typeof __propDef.props;
export type GiDrinkingEvents = typeof __propDef.events;
export type GiDrinkingSlots = typeof __propDef.slots;
export default class GiDrinking extends SvelteComponentTyped<GiDrinkingProps, GiDrinkingEvents, GiDrinkingSlots> {
}
export {};
