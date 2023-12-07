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
export type GiLotusFlowerProps = typeof __propDef.props;
export type GiLotusFlowerEvents = typeof __propDef.events;
export type GiLotusFlowerSlots = typeof __propDef.slots;
export default class GiLotusFlower extends SvelteComponentTyped<GiLotusFlowerProps, GiLotusFlowerEvents, GiLotusFlowerSlots> {
}
export {};
