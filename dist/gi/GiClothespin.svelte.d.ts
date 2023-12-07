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
export type GiClothespinProps = typeof __propDef.props;
export type GiClothespinEvents = typeof __propDef.events;
export type GiClothespinSlots = typeof __propDef.slots;
export default class GiClothespin extends SvelteComponentTyped<GiClothespinProps, GiClothespinEvents, GiClothespinSlots> {
}
export {};
