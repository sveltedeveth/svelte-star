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
export type GiVineFlowerProps = typeof __propDef.props;
export type GiVineFlowerEvents = typeof __propDef.events;
export type GiVineFlowerSlots = typeof __propDef.slots;
export default class GiVineFlower extends SvelteComponentTyped<GiVineFlowerProps, GiVineFlowerEvents, GiVineFlowerSlots> {
}
export {};
