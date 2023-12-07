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
export type GiFireFlowerProps = typeof __propDef.props;
export type GiFireFlowerEvents = typeof __propDef.events;
export type GiFireFlowerSlots = typeof __propDef.slots;
export default class GiFireFlower extends SvelteComponentTyped<GiFireFlowerProps, GiFireFlowerEvents, GiFireFlowerSlots> {
}
export {};
